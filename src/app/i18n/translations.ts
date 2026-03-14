export const translations = {
  es: {
    nav: {
      about: "Acerca de",
      features: "Características",
      quickstart: "Inicio Rápido",
      architecture: "Arquitectura",
      licensing: "Licencias"
    },
    hero: {
      introducing: "Presentamos Mattin AI",
      title1: "Crea apps de IA",
      title2: "sin complejidad",
      description: "Mattin AI es una plataforma open-source que conecta LLMs, almacenes vectoriales, agentes y herramientas MCP — todo lo necesario para construir aplicaciones de IA en producción.",
      getStarted: "Empezar ahora",
      viewGithub: "Ver en GitHub",
      openSource: "Open Source",
      productionReady: "Production Ready",
      terminalTitle: "Listo en 3 pasos",
      exploreFeatures: "Explorar características",
      viewDocs: "Ver documentación"
    },
    features: {
      title: "Características Principales",
      benefitsTitle1: "Todo lo que necesitas para",
      benefitsTitle2: "construir con IA",
      benefitsSubtitle: "Una plataforma completa que cubre desde la integración de LLMs hasta el despliegue en producción.",
      llm: {
        title: "Integración Multi-LLM",
        description: "Conecta con OpenAI, Anthropic Claude, Azure OpenAI, Mistral AI, Google y Ollama desde una interfaz unificada. Cambia de proveedor sin reescribir código."
      },
      rag: {
        title: "RAG y Búsqueda Semántica",
        description: "Sistemas RAG avanzados con búsqueda semántica sobre tus propios documentos, webs y multimedia. Soporta pgvector y Qdrant como backends vectoriales."
      },
      agents: {
        title: "Agentes de IA y Automatización",
        description: "Crea agentes con memoria, herramientas y contexto RAG. Composición de agentes (agentes como herramientas), salida estructurada JSON y procesamiento de archivos adjuntos."
      },
      modular: {
        title: "Arquitectura Modular",
        description: "Backend FastAPI + frontend React publicado como librería npm. Despliega proyectos cliente personalizados en minutos usando la plantilla incluida."
      },
      mcp: {
        title: "Soporte MCP Nativo",
        description: "Actúa como servidor y cliente MCP (Model Context Protocol). Expone tus agentes como herramientas MCP para Claude Desktop, Cursor y cualquier cliente compatible."
      },
      marketplace: {
        title: "Marketplace de Agentes",
        description: "Descubre, publica y gestiona agentes reutilizables. Sistema de cuotas y control de acceso para distribuir agentes entre equipos y proyectos."
      },
      multitenancy: {
        title: "Multi-tenancy y RBAC",
        description: "Espacios de trabajo (Apps) con roles granulares: OWNER, ADMINISTRATOR, EDITOR, VIEWER. Autenticación OIDC con Azure Entra ID para despliegues empresariales."
      },
      api: {
        title: "API REST Pública",
        description: "Acceso programático completo mediante API keys. Rate limiting, documentación Swagger interactiva y SDK para integraciones externas en producción."
      },
      technical: {
        title: "Stack Técnico",
        backend: "Backend",
        frontend: "Frontend",
        database: "Base de Datos",
        framework: "Framework",
        license: "Licencia",
        commercial: "Comercial"
      },
      cta: {
        repository: "Ver Repositorio",
        documentation: "Documentación"
      }
    },
    quickstart: {
      title: "En marcha en minutos",
      subtitle: "Un solo comando Docker para arrancar todo el stack: base de datos, backend y frontend.",
      step1title: "Clona el repositorio",
      step1desc: "Descarga el código fuente desde GitHub.",
      step2title: "Configura tu entorno",
      step2desc: "Copia el archivo de ejemplo y añade tu clave API de LLM.",
      step3title: "Arranca los servicios",
      step3desc: "Docker Compose levanta la base de datos, el backend y el frontend.",
      readyLabel: "Listo en",
      readyUrl: "http://localhost:3000",
      ctaDocs: "Ver documentación completa",
      ctaGithub: "Ver en GitHub"
    },
    usecases: {
      title: "Para cada equipo",
      subtitle: "Mattin AI se adapta a equipos de todos los tamaños y casos de uso.",
      enterprise: {
        title: "Equipos Enterprise",
        description: "Despliega un espacio de trabajo de IA privado para toda tu organización con autenticación corporativa y control de acceso granular.",
        feature1: "Autenticación OIDC con Azure Entra ID",
        feature2: "Roles por workspace (OWNER, ADMIN, EDITOR, VIEWER)",
        feature3: "Soporte para Azure OpenAI y modelos locales Ollama",
        feature4: "Exportación e importación de configuraciones"
      },
      developer: {
        title: "Desarrolladores",
        description: "Integra capacidades de IA en tus aplicaciones mediante la API REST pública o la librería React reutilizable.",
        feature1: "API pública con autenticación por API key",
        feature2: "Librería React (@lksnext/ai-core-tools-base)",
        feature3: "Documentación Swagger interactiva",
        feature4: "Despliegue Docker en un solo comando"
      },
      researcher: {
        title: "Investigadores y Equipos IA",
        description: "Experimenta con diferentes modelos, configura pipelines RAG sobre tus datos y conecta herramientas externas vía MCP.",
        feature1: "Soporte multi-proveedor: OpenAI, Anthropic, Mistral, Ollama",
        feature2: "RAG sobre documentos, webs, audio y vídeo",
        feature3: "MCP: conecta con Claude Desktop y Cursor",
        feature4: "Marketplace de agentes reutilizables"
      }
    },
    licensing: {
      title: "Licencias",
      subtitle: "Mattin AI usa un modelo de doble licencia para equilibrar la apertura de la comunidad con la sostenibilidad del proyecto.",
      community: {
        title: "Comunidad",
        badge: "AGPL 3.0 — Gratuita",
        description: "Ideal para uso personal, educativo, investigación y proyectos open-source.",
        feature1: "Acceso completo a la plataforma",
        feature2: "Uso libre en proyectos open-source",
        feature3: "Soporte comunitario (GitHub Issues)",
        feature4: "Auto-hospedado",
        feature5: "Código derivado debe ser open-source (copyleft)",
        cta: "Ver en GitHub"
      },
      commercial: {
        title: "Comercial",
        badge: "Licencia de pago",
        description: "Para uso en producción, prestación de servicios y despliegues empresariales sin obligaciones copyleft.",
        feature1: "Sin obligaciones copyleft",
        feature2: "Uso en productos y servicios comerciales",
        feature3: "SLA y soporte prioritario",
        feature4: "Servicios profesionales e integración",
        feature5: "Indemnización y garantía",
        cta: "Contactar para licencia"
      },
      contact: "Para consultas sobre licencias comerciales, contacta con"
    },
    architecture: {
      title: "Arquitectura de Agentes",
      subtitle: "Arquitectura técnica de los agentes Mattin AI, diseñada para flexibilidad, escalabilidad y observabilidad.",
      configuration: {
        title: "Configuración",
        description: "Define el comportamiento y las capacidades del agente a través de componentes modulares.",
        instructions: "Instrucciones del Sistema",
        instructions_desc: "Prompts y configuraciones de personalidad",
        memory: "Configuración de Memoria",
        memory_desc: "Estrategia, ventana de contexto y persistencia",
        tools: "Registro de Herramientas",
        tools_desc: "Conectores MCP y capacidades del agente",
        data: "Esquemas de Datos",
        data_desc: "JSON/Pydantic para intercambio de datos",
        rag: "Configuración RAG",
        rag_desc: "Fuentes de datos y estrategia de recuperación"
      },
      runtime: {
        title: "Runtime y Orquestación",
        description: "Motor de ejecución central impulsado por el patrón ReAct para toma de decisiones inteligentes.",
        gateway: "API Gateway y Seguridad",
        gateway_desc: "Autenticación y limitación de tasa",
        memory: "Gestión de Memoria y Estado",
        memory_desc: "Historial de sesión a corto plazo",
        orchestration: "Motor de Orquestación",
        orchestration_desc: "Bucle ReAct para razonamiento y acción",
        tools: "Ejecución de Herramientas",
        tools_desc: "Llamadas a API externa y sub-agentes",
        llm: "Integración LLM",
        llm_desc: "Soporte multi-proveedor (OpenAI, Anthropic, etc.)"
      },
      observability: {
        title: "Observabilidad",
        description: "Monitoreo y seguimiento integral para depuración y optimización.",
        tracing: "Trazabilidad de Ejecución",
        tracing_desc: "Seguimiento paso a paso del flujo del agente",
        logs: "Registro de Logs",
        logs_desc: "Registro de errores y eventos del sistema",
        metrics: "Métricas de Rendimiento",
        metrics_desc: "Seguimiento de latencia, uso de tokens y costos",
        feedback: "Feedback de Usuarios",
        feedback_desc: "Calificaciones de calidad de respuesta e insights"
      },
      flow: {
        config: "Configuración",
        execution: "Ejecución",
        monitoring: "Monitoreo",
        configDesc: "Definir comportamiento",
        executionDesc: "Procesar y ejecutar",
        monitoringDesc: "Rastrear y optimizar",
        title: "Flujo de Trabajo"
      }
    },
    footer: {
      sponsored: "Patrocinado por",
      partner1: "AI Innovation Partner",
      partner2: "Basque Government Agency",
      copyright: "Todos los derechos reservados.",
      trademark: "MattinAI es una marca registrada y propiedad intelectual de LKS Next. El uso o reproducción no autorizados están prohibidos.",
      description: "La plataforma de IA open-source para equipos que construyen aplicaciones inteligentes.",
      resources: "Recursos",
      documentation: "Documentación",
      repository: "Repositorio GitHub",
      quickstart: "Inicio Rápido",
      licensing: "Licencias",
      offices: "LKS NEXT OFFICES",
      headquarters: "SOCIAL HEADQUARTERS"
    }
  },
  en: {
    nav: {
      about: "About",
      features: "Features",
      quickstart: "Quick Start",
      architecture: "Architecture",
      licensing: "Licensing"
    },
    hero: {
      introducing: "Introducing Mattin AI",
      title1: "Build AI Apps",
      title2: "Without the Complexity",
      description: "Mattin AI is an open-source platform that connects LLMs, vector stores, agents, and MCP tools — everything you need to ship production AI applications.",
      getStarted: "Get Started",
      viewGithub: "View on GitHub",
      openSource: "Open Source",
      productionReady: "Production Ready",
      terminalTitle: "Up and running in 3 steps",
      exploreFeatures: "Explore features",
      viewDocs: "View documentation"
    },
    features: {
      title: "Key Features",
      benefitsTitle1: "Everything you need to",
      benefitsTitle2: "build with AI",
      benefitsSubtitle: "A complete platform covering LLM integration, RAG, agents, and production deployment.",
      llm: {
        title: "Multi-LLM Integration",
        description: "Connect to OpenAI, Anthropic Claude, Azure OpenAI, Mistral AI, Google, and Ollama from a single unified interface. Switch providers without rewriting code."
      },
      rag: {
        title: "RAG & Semantic Search",
        description: "Advanced Retrieval-Augmented Generation over your documents, websites, and media. Supports pgvector and Qdrant as vector backends."
      },
      agents: {
        title: "AI Agents & Automation",
        description: "Build agents with memory, tools, and RAG context. Agent composition (agents as tools), structured JSON output, and file attachment processing."
      },
      modular: {
        title: "Modular Architecture",
        description: "FastAPI backend + React frontend published as an npm library. Deploy custom client projects in minutes using the included template."
      },
      mcp: {
        title: "Native MCP Support",
        description: "Acts as both MCP server and client (Model Context Protocol). Expose your agents as MCP tools for Claude Desktop, Cursor, and any compatible client."
      },
      marketplace: {
        title: "Agent Marketplace",
        description: "Discover, publish, and manage reusable agents. Quota management and access control for distributing agents across teams and projects."
      },
      multitenancy: {
        title: "Multi-tenancy & RBAC",
        description: "Workspaces (Apps) with fine-grained roles: OWNER, ADMINISTRATOR, EDITOR, VIEWER. OIDC authentication with Azure Entra ID for enterprise deployments."
      },
      api: {
        title: "Public REST API",
        description: "Full programmatic access via API keys. Rate limiting, interactive Swagger docs, and SDK for external integrations in production."
      },
      technical: {
        title: "Technical Stack",
        backend: "Backend",
        frontend: "Frontend",
        database: "Database",
        framework: "Framework",
        license: "License",
        commercial: "Commercial"
      },
      cta: {
        repository: "View Repository",
        documentation: "Documentation"
      }
    },
    quickstart: {
      title: "Up and running in minutes",
      subtitle: "A single Docker Compose command starts the full stack: database, backend, and frontend.",
      step1title: "Clone the repository",
      step1desc: "Download the source code from GitHub.",
      step2title: "Configure your environment",
      step2desc: "Copy the example file and add your LLM API key.",
      step3title: "Start the services",
      step3desc: "Docker Compose brings up the database, backend, and frontend.",
      readyLabel: "Ready at",
      readyUrl: "http://localhost:3000",
      ctaDocs: "View full documentation",
      ctaGithub: "View on GitHub"
    },
    usecases: {
      title: "For every team",
      subtitle: "Mattin AI adapts to teams of all sizes and use cases.",
      enterprise: {
        title: "Enterprise Teams",
        description: "Deploy a private AI workspace for your entire organization with corporate authentication and fine-grained access control.",
        feature1: "OIDC authentication with Azure Entra ID",
        feature2: "Per-workspace roles (OWNER, ADMIN, EDITOR, VIEWER)",
        feature3: "Support for Azure OpenAI and local Ollama models",
        feature4: "App configuration export and import"
      },
      developer: {
        title: "Developers",
        description: "Integrate AI capabilities into your applications via the public REST API or the reusable React library.",
        feature1: "Public API with API key authentication",
        feature2: "React library (@lksnext/ai-core-tools-base)",
        feature3: "Interactive Swagger documentation",
        feature4: "Single-command Docker deployment"
      },
      researcher: {
        title: "AI Researchers & Teams",
        description: "Experiment with different models, configure RAG pipelines over your data, and connect external tools via MCP.",
        feature1: "Multi-provider: OpenAI, Anthropic, Mistral, Ollama",
        feature2: "RAG over documents, websites, audio, and video",
        feature3: "MCP: connect with Claude Desktop and Cursor",
        feature4: "Reusable agent marketplace"
      }
    },
    licensing: {
      title: "Licensing",
      subtitle: "Mattin AI uses a dual-license model to balance community openness with project sustainability.",
      community: {
        title: "Community",
        badge: "AGPL 3.0 — Free",
        description: "Ideal for personal use, education, research, and open-source projects.",
        feature1: "Full platform access",
        feature2: "Free use in open-source projects",
        feature3: "Community support (GitHub Issues)",
        feature4: "Self-hosted",
        feature5: "Derivative code must be open-source (copyleft)",
        cta: "View on GitHub"
      },
      commercial: {
        title: "Commercial",
        badge: "Paid license",
        description: "For production use, service provision, and enterprise deployments without copyleft obligations.",
        feature1: "No copyleft obligations",
        feature2: "Use in commercial products and services",
        feature3: "SLA and priority support",
        feature4: "Professional services and integration",
        feature5: "Indemnification and warranty",
        cta: "Contact for license"
      },
      contact: "For commercial licensing inquiries, contact"
    },
    architecture: {
      title: "Agent Architecture",
      subtitle: "Technical architecture of Mattin AI agents, designed for flexibility, scalability, and observability.",
      configuration: {
        title: "Configuration",
        description: "Defines the agent's behavior and capabilities through modular components.",
        instructions: "System Instructions",
        instructions_desc: "Prompts and personality settings",
        memory: "Memory Configuration",
        memory_desc: "Strategy, context window, and persistence",
        tools: "Tool Registry",
        tools_desc: "MCP connectors and agent capabilities",
        data: "Data Schemas",
        data_desc: "JSON/Pydantic for data exchange",
        rag: "RAG Configuration",
        rag_desc: "Data sources and retrieval strategy"
      },
      runtime: {
        title: "Runtime & Orchestration",
        description: "Core execution engine powered by the ReAct pattern for intelligent decision-making.",
        gateway: "API Gateway & Security",
        gateway_desc: "Authentication and rate limiting",
        memory: "Memory & State Management",
        memory_desc: "Short-term and session history",
        orchestration: "Orchestration Engine",
        orchestration_desc: "ReAct loop for reasoning and action",
        tools: "Tool Execution",
        tools_desc: "External API and sub-agent calls",
        llm: "LLM Integration",
        llm_desc: "Multi-provider support (OpenAI, Anthropic, etc.)"
      },
      observability: {
        title: "Observability",
        description: "Comprehensive monitoring and tracking for debugging and optimization.",
        tracing: "Execution Tracing",
        tracing_desc: "Step-by-step agent workflow tracking",
        logs: "Log Registry",
        logs_desc: "System errors and events logging",
        metrics: "Performance Metrics",
        metrics_desc: "Latency, token usage, and cost tracking",
        feedback: "User Feedback",
        feedback_desc: "Response quality ratings and insights"
      },
      flow: {
        config: "Configuration",
        execution: "Execution",
        monitoring: "Monitoring",
        configDesc: "Define behavior",
        executionDesc: "Process and execute",
        monitoringDesc: "Track and optimize",
        title: "Workflow"
      }
    },
    footer: {
      sponsored: "Sponsored by",
      partner1: "AI Innovation Partner",
      partner2: "Basque Government Agency",
      copyright: "All rights reserved.",
      trademark: "MattinAI is a registered trademark and intellectual property of LKS Next. Unauthorized use or reproduction is prohibited.",
      description: "The open-source AI platform for teams building intelligent applications.",
      resources: "Resources",
      documentation: "Documentation",
      repository: "GitHub Repository",
      quickstart: "Quick Start",
      licensing: "Licensing",
      offices: "LKS NEXT OFFICES",
      headquarters: "SOCIAL HEADQUARTERS"
    }
  },
  eu: {
    nav: {
      about: "Honi buruz",
      features: "Ezaugarriak",
      quickstart: "Hasiera Azkarra",
      architecture: "Arkitektura",
      licensing: "Lizentziak"
    },
    hero: {
      introducing: "Aurkezten dugu Mattin AI",
      title1: "Eraiki AI Aplikazioak",
      title2: "Konplexutasunik Gabe",
      description: "Mattin AI plataforma open-source bat da LLMak, bektore-dendak, agenteak eta MCP tresnak konektatzen dituena — produkzio AI aplikazioak sortzeko behar duzun guztia.",
      getStarted: "Hasi orain",
      viewGithub: "GitHub-en ikusi",
      openSource: "Open Source",
      productionReady: "Produkzioan Prest",
      terminalTitle: "3 pausotan martxan",
      exploreFeatures: "Ezaugarriak esploratu",
      viewDocs: "Dokumentazioa ikusi"
    },
    features: {
      title: "Ezaugarri Nagusiak",
      benefitsTitle1: "AI-rekin eraikitzeko",
      benefitsTitle2: "behar duzun guztia",
      benefitsSubtitle: "LLM integraziotik produkzio-desploiegura doan plataforma osoa.",
      llm: {
        title: "LLM Integrazio Anitzak",
        description: "Konektatu OpenAI, Anthropic Claude, Azure OpenAI, Mistral AI, Google eta Ollama-rekin interfaze bateratu batetik. Aldatu hornitzailea kodea berridatzi gabe."
      },
      rag: {
        title: "RAG eta Bilaketa Semantikoa",
        description: "RAG aurreratua zure dokumentu, web eta multimedien gainean. pgvector eta Qdrant onartzen ditu bektore-backend gisa."
      },
      agents: {
        title: "AI Agenteak eta Automatizazioa",
        description: "Eraiki agenteak memoria, tresnak eta RAG testuinguruarekin. Agente konposaketa, JSON irteera egituratua eta fitxategi-eranskin prozesatzea."
      },
      modular: {
        title: "Arkitektura Modularra",
        description: "FastAPI backend + React frontend npm liburutegi gisa argitaratua. Inplementatu bezero-proiektu pertsonalizatuak minututan txantiloiarekin."
      },
      mcp: {
        title: "MCP Euskarri Natiboa",
        description: "MCP zerbitzari eta bezero gisa jarduten du (Model Context Protocol). Zure agenteak MCP tresna gisa esposatu Claude Desktop, Cursor eta edozein bezero bateragarrirekin."
      },
      marketplace: {
        title: "Agente Merkatua",
        description: "Aurkitu, argitaratu eta kudeatu agente berrerabilgarriak. Kuota-kudeaketa eta sarbide-kontrola agenteak taldeen artean banatzeko."
      },
      multitenancy: {
        title: "Multi-tenancy eta RBAC",
        description: "Lan-eremuak (Apps) rol fineekin: OWNER, ADMINISTRATOR, EDITOR, VIEWER. OIDC autentifikazioa Azure Entra ID-rekin enpresa-inplementazioetarako."
      },
      api: {
        title: "REST API Publikoa",
        description: "Sarbide programatiko osoa API gakoaren bidez. Tasa-mugaketa, Swagger dokumentazio interaktiboa eta SDK kanpoko integrazioetarako."
      },
      technical: {
        title: "Stack Teknikoa",
        backend: "Backend",
        frontend: "Frontend",
        database: "Datu-basea",
        framework: "Framework",
        license: "Lizentzia",
        commercial: "Komertziala"
      },
      cta: {
        repository: "Ikusi Biltegira",
        documentation: "Dokumentazioa"
      }
    },
    quickstart: {
      title: "Minutuetan martxan",
      subtitle: "Docker Compose komando bakar batek stack osoa abiarazten du: datu-basea, backend-a eta frontend-a.",
      step1title: "Klonatu biltegira",
      step1desc: "Deskargatu iturburu-kodea GitHub-etik.",
      step2title: "Konfiguratu ingurunea",
      step2desc: "Kopiatu adibide-fitxategia eta gehitu zure LLM API gakoa.",
      step3title: "Abiarazi zerbitzuak",
      step3desc: "Docker Compose-k datu-basea, backend-a eta frontend-a abiarazten ditu.",
      readyLabel: "Prest hemen",
      readyUrl: "http://localhost:3000",
      ctaDocs: "Ikusi dokumentazio osoa",
      ctaGithub: "GitHub-en ikusi"
    },
    usecases: {
      title: "Talde bakoitzarentzat",
      subtitle: "Mattin AI tamaina eta erabilera-kasu guztietako taldeei egokitzen zaie.",
      enterprise: {
        title: "Enpresa Taldeak",
        description: "Inplementatu erakunde osorako AI lan-eremu pribatu bat autentifikazio korporatiboarekin eta sarbide-kontrol finarekin.",
        feature1: "OIDC autentifikazioa Azure Entra ID-rekin",
        feature2: "Lan-eremuko rolak (OWNER, ADMIN, EDITOR, VIEWER)",
        feature3: "Azure OpenAI eta Ollama modelo lokalentzako euskarria",
        feature4: "App konfigurazio esportazioa eta inportazioa"
      },
      developer: {
        title: "Garatzaileak",
        description: "Integratu AI gaitasunak zure aplikazioetan REST API publikoaren edo React liburutegi berrerabilgarriaren bidez.",
        feature1: "API publikoa API gako autentifikazioarekin",
        feature2: "React liburutegia (@lksnext/ai-core-tools-base)",
        feature3: "Swagger dokumentazio interaktiboa",
        feature4: "Docker inplementazio komando bakarrarekin"
      },
      researcher: {
        title: "AI Ikerlariak eta Taldeak",
        description: "Esperimentatu modelo ezberdinekin, konfiguratu RAG pipeline-ak zure datuen gainean eta konektatu kanpoko tresnak MCP bidez.",
        feature1: "Hornitzaile anitzak: OpenAI, Anthropic, Mistral, Ollama",
        feature2: "RAG dokumentu, web, audio eta bideoaren gainean",
        feature3: "MCP: konektatu Claude Desktop eta Cursor-rekin",
        feature4: "Agente berrerabilgarrien merkatua"
      }
    },
    licensing: {
      title: "Lizentziak",
      subtitle: "Mattin AI-k lizentzia bikoitzeko eredua erabiltzen du komunitate irekitasuna eta proiektuaren iraunkortasuna orekatzeko.",
      community: {
        title: "Komunitatea",
        badge: "AGPL 3.0 — Doakoa",
        description: "Erabilera pertsonalerako, hezkuntzarako, ikerketarako eta kode irekiko proiektuetarako egokia.",
        feature1: "Plataformara sarbide osoa",
        feature2: "Erabilera librea kode irekiko proiektuetan",
        feature3: "Komunitate-laguntza (GitHub Issues)",
        feature4: "Norberak ostatatua",
        feature5: "Eratorritako kodea kode irekikoa izan behar da (copyleft)",
        cta: "GitHub-en ikusi"
      },
      commercial: {
        title: "Komertziala",
        badge: "Lizentzia ordaindua",
        description: "Produkzio erabilpenerako, zerbitzu-ematerako eta enpresa-inplementazioetarako copyleft betebeharrik gabe.",
        feature1: "Copyleft betebeharrik gabe",
        feature2: "Erabilpena merkataritzako produktu eta zerbitzuetan",
        feature3: "SLA eta lehentasunezko laguntza",
        feature4: "Zerbitzu profesionalak eta integrazioa",
        feature5: "Kalte-ordaina eta bermea",
        cta: "Lizentziaren aldeko kontaktua"
      },
      contact: "Merkataritzako lizentziei buruzko kontsultarako, jarri harremanetan"
    },
    architecture: {
      title: "Agente Arkitektura",
      subtitle: "Mattin AI agenteen arkitektura teknikoa, malgutasuna, eskalagarritasuna eta behaketa kontuan hartuta diseinatua.",
      configuration: {
        title: "Konfigurazioa",
        description: "Agentearen portaera eta gaitasunak definitzen ditu osagai modularen bidez.",
        instructions: "Sistema Jarraibideak",
        instructions_desc: "Galdekizunak eta nortasun ezarpenak",
        memory: "Memoria Konfigurazioa",
        memory_desc: "Estrategia, testuinguru leihoa eta iraunkortasuna",
        tools: "Tresna Erregistroa",
        tools_desc: "MCP konektoreak eta agente gaitasunak",
        data: "Datu Eskemak",
        data_desc: "JSON/Pydantic datuen trukaketa",
        rag: "RAG Konfigurazioa",
        rag_desc: "Datu iturriak eta berreskuratze estrategia"
      },
      runtime: {
        title: "Runtime eta Orkestraketa",
        description: "Erabaki adimentsuen exekuzio-motor nagusia ReAct ereduarekin indartuta.",
        gateway: "API Gateway eta Segurtasuna",
        gateway_desc: "Autentifikazioa eta tasa mugaketa",
        memory: "Memoria eta Egoera Kudeaketa",
        memory_desc: "Epe laburreko eta saio historia",
        orchestration: "Orkestrazio Motorra",
        orchestration_desc: "ReAct begizta arrazoitzeko eta ekintzarako",
        tools: "Tresna Exekuzioa",
        tools_desc: "Kanpoko API eta azpi-agente deiak",
        llm: "LLM Integrazioa",
        llm_desc: "Hornitzaile anitzeko euskarria (OpenAI, Anthropic, etab.)"
      },
      observability: {
        title: "Behaketa",
        description: "Monitorizazio eta jarraipen integrala arazketa eta optimizaziorako.",
        tracing: "Exekuzio Jarraipen",
        tracing_desc: "Agentearen lan-fluxuaren urrats-urratseko jarraipena",
        logs: "Log Erregistroa",
        logs_desc: "Sistemaren erroreen eta gertaeren erregistroa",
        metrics: "Errendimendu Metrikak",
        metrics_desc: "Latentzia, token erabilera eta kostu jarraipena",
        feedback: "Erabiltzaile Iritzia",
        feedback_desc: "Erantzun kalitatearen balorazioak eta ikuspegiak"
      },
      flow: {
        config: "Konfigurazioa",
        execution: "Exekuzioa",
        monitoring: "Jarraipena",
        configDesc: "Portaera definizioa",
        executionDesc: "Prozesatu eta exekutatu",
        monitoringDesc: "Jarraitu eta optimizatu",
        title: "Lan-fluxua"
      }
    },
    footer: {
      sponsored: "Babeslea",
      partner1: "AI Innovation Partner",
      partner2: "Basque Government Agency",
      copyright: "Eskubide guztiak gordeta.",
      trademark: "MattinAI marka erregistratua da eta LKS Next-en jabetza intelektuala. Baimenik gabeko erabilera edo erreprodukzioa debekatuta dago.",
      description: "Aplikazio adimendunak eraikitzen dituzten taldeen AI plataforma open-source-a.",
      resources: "Baliabideak",
      documentation: "Dokumentazioa",
      repository: "GitHub Biltegi",
      quickstart: "Hasiera Azkarra",
      licensing: "Lizentziak",
      offices: "LKS NEXT BULEGOAK",
      headquarters: "EGOITZA SOZIALA"
    }
  }
} as const;

export type Language = keyof typeof translations;
export type TranslationKey = typeof translations.en;
