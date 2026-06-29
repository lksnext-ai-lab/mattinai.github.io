# Content Sources

This file maps every page in the Mattin AI documentation site to the `docs/` files and codebase areas it was authored from, so accuracy is auditable and future updates can be traced to their primary sources.

**Rule:** when `docs/` and the actual code disagree, **code is the source of truth**. The `docs/` files are the first reference, but all technical claims must be verified against the codebase before being published here.

---

## Toolchain

The site is built with [Fumadocs](https://fumadocs.dev) on Next.js (`output: 'export'`). Content lives in `content/docs/**` as MDX files. Navigation is defined in `meta.json` files alongside the content. There is no `docs.json` or Mintlify configuration.

---

## Page-to-source mapping

| Site page | Primary `docs/` sources | Code grounding |
|---|---|---|
| `getting-started/introduction` | `docs/guides/chat-bot/kb-overview.md`, `docs/index.md`, `README.md` | `backend/models/` entities |
| `getting-started/core-concepts` | `docs/guides/chat-bot/kb-overview.md`, `docs/architecture/overview.md`, `docs/reference/role-authorization.md`, `CLAUDE.md` | `backend/models/` (App, Agent, AIService, EmbeddingService, Silo, Repository, Domain, APIKey); role hierarchy `VIEWER` → `EDITOR` → `ADMINISTRATOR` → `OWNER` → `OMNIADMIN` |
| `getting-started/quickstart` | `docs/guides/chat-bot/kb-apps.md`, `docs/guides/chat-bot/kb-agents.md`, `docs/guides/chat-bot/kb-overview.md` | `frontend/src/pages/AppsPage.tsx`, `AgentFormPage.tsx`, `AgentPlaygroundPage.tsx`, `settings/AIServicesPage.tsx`, `components/services/wizard/`, `components/forms/AppForm.tsx` |
| `guides/apps` | `docs/guides/chat-bot/kb-apps.md` | `frontend/src/pages/AppsPage.tsx`, `AppDashboard.tsx`, `settings/AppSettingsPage.tsx`, `settings/CollaborationPage.tsx` |
| `guides/agents` | `docs/guides/chat-bot/kb-agents.md`, `docs/guides/chat-bot/agent-prompt.md`, `docs/guides/chat-bot/kb-ai-services.md` | `frontend/src/pages/AgentFormPage.tsx` (tabs: Basic / Prompts / Configuration / Advanced / Marketplace), `AgentPlaygroundPage.tsx`; `backend/models/agent.py` (memory fields) |
| `guides/silos-and-rag` | `docs/guides/chat-bot/kb-silos-and-rag.md`, `docs/ai/rag-vector-stores.md` | `frontend/src/pages/SilosPage.tsx`, `SiloFormPage.tsx`, `SiloPlaygroundPage.tsx`; `backend/models/silo.py`; `backend/tools/vector_store_factory.py` |
| `guides/repositories` | `docs/guides/chat-bot/kb-silos-and-rag.md`, `docs/reference/file-processing.md` | `frontend/src/pages/RepositoriesPage.tsx`, `RepositoryFormPage.tsx`, `RepositoryDetailPage.tsx`; `backend/models/repository.py` |
| `guides/playground` | `docs/guides/chat-bot/kb-conversations.md`, `docs/guides/chat-bot/kb-agents.md` | `frontend/src/pages/AgentPlaygroundPage.tsx`, `SiloPlaygroundPage.tsx`, `RepositoryPlaygroundPage.tsx` |
| `guides/api-keys` | `docs/api/public-api.md` | `frontend/src/pages/settings/APIKeysPage.tsx`; `backend/services/api_key_service.py` |
| `api-reference/introduction` | `docs/api/public-api.md` | `backend/routers/public/v1/__init__.py` (`X-API-KEY`, `enforce_app_rate_limit`) |
| `api-reference` (endpoint pages) | — code-sourced, no `docs/` counterpart | `backend/routers/public/v1/*` via `docs-site/scripts/export-openapi.py` → `api-reference/openapi.json` → `docs-site/scripts/generate-openapi-docs.mjs` |

---

## API reference snapshot provenance

`api-reference/openapi.json` is a generated snapshot, not hand-authored content. It is produced by `docs-site/scripts/export-openapi.py`, which:

1. Imports the FastAPI app from `backend/main.py`.
2. Builds the ASGI stack via `TestClient` (resolves lazy router includes without starting the lifespan).
3. Fetches the fully resolved `/openapi.json` and filters to `/public/v1` paths — 37 public paths, last regenerated 2026-06-25.
4. Trims `components/schemas` to those transitively reachable from the public paths.
5. Writes a standalone public spec to `api-reference/openapi.json`.

Source: `backend/routers/public/v1/*`, derived from the full `/openapi.json`. The backend's `/openapi-public.json` endpoint returns an empty spec under the current FastAPI version (lazy router inclusion is not resolved at import time), so the script fetches the full schema and filters it; see `README.md` for details and the `--from-file` fallback.

The per-operation MDX pages under `content/docs/api-reference/` are **generated** by `docs-site/scripts/generate-openapi-docs.mjs` (using `fumadocs-openapi`) from the snapshot. Do not hand-edit those files — they are overwritten on every build. `content/docs/api-reference/meta.json` is hand-maintained (the generator runs with `meta: false`); new endpoints must be appended there after regenerating the snapshot.

When regenerating, record the date and path count as a comment in the commit message or a PR note so the snapshot age is always traceable.
