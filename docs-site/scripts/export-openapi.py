#!/usr/bin/env python3
"""Export the Mattin AI **public** OpenAPI schema to ``api-reference/openapi.json``.

This is the repeatable mechanism for regenerating the committed snapshot that the
Mintlify "API Reference" group renders. The committed ``openapi.json`` is a
SNAPSHOT; record its provenance (source + command + date) in CONTENT-SOURCES.md.

How it works
------------
The backend builds the FastAPI app with **lazy router inclusion** (routes are
wrapped in ``_IncludedRouter`` placeholders until the ASGI app is built). The
backend's own ``get_openapi_public()`` filters ``app.routes`` by path prefix,
which does NOT resolve those placeholders at import time, so it returns zero
paths in-process (the bundled ``/openapi-public.json`` / ``/docs/public`` is
affected the same way under the current FastAPI version).

To get an accurate spec without modifying backend code, this script:
  1. imports the FastAPI app from ``backend.main`` (the ``backend/`` dir is the
     import root, e.g. ``import config``, ``from models.agent import ...``);
  2. uses ``TestClient`` to build the ASGI stack and fetch the *default*
     ``/openapi.json`` (which DOES resolve the lazy includes);
  3. keeps only paths under ``/public/v1`` plus the component schemas they
     reference (transitively);
  4. writes a standalone public spec to ``docs-site/api-reference/openapi.json``.

The lifespan (DB / checkpointer / OIDC) is intentionally NOT started, so no
database or external services are required, only the backend's Python deps.

Usage
-----
From the repo root, with the backend dependencies installed::

    python docs-site/scripts/export-openapi.py

Fallback (no backend deps): run the backend, snapshot the *default* schema, and
pass it to this script with ``--from-file``. Do NOT use ``/openapi-public.json``
directly: it is empty under the current FastAPI version (see "How it works")::

    curl -s http://localhost:8000/openapi.json -o /tmp/full-openapi.json
    python docs-site/scripts/export-openapi.py --from-file /tmp/full-openapi.json

No secrets are written: the spec is generated from code models only, and the
``servers`` host is a placeholder to be replaced per deployment.
"""

import json
import os
import sys
from pathlib import Path

PUBLIC_PREFIX = "/public/v1"

# Resolve paths relative to this script so CWD does not matter.
SCRIPT_DIR = Path(__file__).resolve().parent
DOCS_SITE = SCRIPT_DIR.parent
REPO_ROOT = DOCS_SITE.parent
OUTPUT = DOCS_SITE / "api-reference" / "openapi.json"

# The backend uses ``backend/`` itself as the import root.
BACKEND_DIR = REPO_ROOT / "backend"
sys.path.insert(0, str(BACKEND_DIR))

# Safe, non-secret defaults so the module imports without a real environment.
# Nothing here connects to a real service (the lifespan is never started).
os.environ.setdefault("AICT_LOGIN", "FAKE")
os.environ.setdefault("SECRET_KEY", "export-placeholder-not-a-secret")
os.environ.setdefault("AICT_OMNIADMINS", "admin@example.com")
os.environ.setdefault(
    "SQLALCHEMY_DATABASE_URI",
    "postgresql://placeholder:placeholder@localhost:5432/placeholder",
)
os.environ.setdefault("VECTOR_DB_TYPE", "PGVECTOR")
os.environ.setdefault("REPO_BASE_FOLDER", os.path.join(str(REPO_ROOT), ".export-tmp", "repo"))
os.environ.setdefault("STATIC_FILES_FOLDER", os.path.join(str(REPO_ROOT), ".export-tmp", "static"))
for _var in ("REPO_BASE_FOLDER", "STATIC_FILES_FOLDER"):
    os.makedirs(os.environ[_var], exist_ok=True)


def _collect_refs(node, acc):
    """Collect all ``#/components/schemas/<Name>`` references reachable from node."""
    if isinstance(node, dict):
        for key, value in node.items():
            if key == "$ref" and isinstance(value, str) and value.startswith("#/components/schemas/"):
                acc.add(value.rsplit("/", 1)[-1])
            # Always recurse into the value too: an OpenAPI 3.1 $ref node may carry
            # sibling keys (e.g. description) that themselves contain nested $refs.
            _collect_refs(value, acc)
    elif isinstance(node, list):
        for item in node:
            _collect_refs(item, acc)


def _load_full_schema_from_file(path: str):
    """Load a full (default) /openapi.json schema previously saved to disk.

    Used by the no-backend-deps fallback: snapshot the running backend's default
    schema with ``curl`` and pass it here for filtering.
    """
    with open(path, "r", encoding="utf-8") as handle:
        return json.load(handle)


def main(argv=None) -> int:
    argv = list(sys.argv[1:] if argv is None else argv)

    # Fallback mode: filter a pre-downloaded full /openapi.json (no backend deps).
    #   curl -s http://localhost:8000/openapi.json -o /tmp/full-openapi.json
    #   python docs-site/scripts/export-openapi.py --from-file /tmp/full-openapi.json
    from_file = None
    if "--from-file" in argv:
        idx = argv.index("--from-file")
        try:
            from_file = argv[idx + 1]
        except IndexError:
            print("[export-openapi] ERROR: --from-file requires a path argument")
            return 2

    if from_file:
        try:
            full = _load_full_schema_from_file(from_file)
        except Exception as exc:
            print(f"[export-openapi] ERROR: could not read --from-file '{from_file}': {exc}")
            return 1
    else:
        try:
            import main as backend_main  # backend/main.py
            from fastapi.testclient import TestClient
        except Exception as exc:  # pragma: no cover - environment dependent
            print(f"[export-openapi] ERROR: could not import backend app: {exc}")
            print("[export-openapi] Ensure the backend Python dependencies are installed,")
            print("[export-openapi] or use the no-deps fallback:")
            print("    curl -s http://localhost:8000/openapi.json -o /tmp/full-openapi.json")
            print("    python docs-site/scripts/export-openapi.py --from-file /tmp/full-openapi.json")
            return 1

        # Build the ASGI stack (resolves lazy router includes) WITHOUT starting the
        # lifespan, so no DB/external services are needed.
        try:
            client = TestClient(backend_main.app)
            full = client.get("/openapi.json").json()
        except Exception as exc:  # pragma: no cover - environment dependent
            print(f"[export-openapi] ERROR: failed to build the app or fetch the schema: {exc}")
            print("[export-openapi] Use the no-deps fallback:")
            print("    curl -s http://localhost:8000/openapi.json -o /tmp/full-openapi.json")
            print("    python docs-site/scripts/export-openapi.py --from-file /tmp/full-openapi.json")
            return 1

    paths = {p: v for p, v in full.get("paths", {}).items() if p.startswith(PUBLIC_PREFIX)}
    if not paths:
        print("[export-openapi] ERROR: no public paths found under", PUBLIC_PREFIX)
        return 1

    components = full.get("components", {}) or {}
    all_schemas = components.get("schemas", {}) or {}

    # Keep only the schemas reachable from the public paths (transitive closure).
    needed = set()
    _collect_refs(paths, needed)
    changed = True
    while changed:
        changed = False
        for name in list(needed):
            schema = all_schemas.get(name)
            if schema is not None:
                before = len(needed)
                _collect_refs(schema, needed)
                changed = changed or len(needed) > before
    # Sort by name so the committed snapshot is deterministic across runs
    # (``needed`` is a set; unsorted iteration would churn the diff every export).
    kept_schemas = {name: all_schemas[name] for name in sorted(needed) if name in all_schemas}

    spec = {
        "openapi": full.get("openapi", "3.1.0"),
        "info": {
            "title": "Mattin AI — Public API",
            "version": full.get("info", {}).get("version", "1.0.0"),
            "description": (
                "Public API for external applications. Authenticate with the "
                "X-API-KEY header (an App-scoped API key). Requests are rate-limited per App."
            ),
        },
        "servers": [
            {
                "url": "https://your-instance.example.com",
                "description": "Replace with your Mattin AI instance host",
            }
        ],
        "paths": paths,
        "components": {**components, "schemas": kept_schemas},
    }

    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    with open(OUTPUT, "w", encoding="utf-8") as handle:
        json.dump(spec, handle, indent=2, ensure_ascii=False)
        handle.write("\n")

    print(f"[export-openapi] Wrote {OUTPUT}")
    print(
        f"[export-openapi] Public paths: {len(paths)} | "
        f"schemas kept: {len(kept_schemas)} of {len(all_schemas)}"
    )
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
