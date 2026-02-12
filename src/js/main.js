import { translations } from './translations.js';

// Estado global de la aplicación
const state = {
  currentLanguage: 'es'
};

// Funciones de utilidad
function t(path) {
  const keys = path.split('.');
  let value = translations[state.currentLanguage];
  for (const key of keys) {
    value = value[key];
  }
  return value;
}

function setLanguage(lang) {
  state.currentLanguage = lang;
  render();
}

// SVG Icons
const icons = {
  sparkles: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .962 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.582a.5.5 0 0 1 0 .962L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.962 0z"/></svg>`,
  arrowRight: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>`,
  code: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
  zap: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/></svg>`,
  cpu: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9" rx="1"/><path d="M15 2v2"/><path d="M15 20v2"/><path d="M2 15h2"/><path d="M2 9h2"/><path d="M20 15h2"/><path d="M20 9h2"/><path d="M9 2v2"/><path d="M9 20v2"/></svg>`,
  database: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/></svg>`,
  users: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  blocks: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="7" height="7" x="14" y="3" rx="1"/><path d="M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3"/></svg>`,
  globe: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>`,
  github: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>`
};

// Componentes
function Header() {
  return `
    <header class="header">
      <div class="container">
        <div class="header-content">
          <div class="logo">
            <div class="logo-icon">M</div>
            <span class="logo-text">MattinAI</span>
          </div>
          <nav class="nav">
            <a href="#about" class="nav-link">${t('nav.about')}</a>
            <a href="#features" class="nav-link">${t('nav.features')}</a>
            <a href="#architecture" class="nav-link">${t('nav.architecture')}</a>
          </nav>
          <div class="language-selector">
            <button class="lang-btn ${state.currentLanguage === 'es' ? 'active' : ''}" onclick="setLanguage('es')">ES</button>
            <button class="lang-btn ${state.currentLanguage === 'en' ? 'active' : ''}" onclick="setLanguage('en')">EN</button>
            <button class="lang-btn ${state.currentLanguage === 'eu' ? 'active' : ''}" onclick="setLanguage('eu')">EU</button>
          </div>
        </div>
      </div>
    </header>
  `;
}

function Hero() {
  return `
    <section id="about" class="hero">
      <div class="hero-bg">
        <div class="hero-gradient-base"></div>
        <div class="hero-gradient-1"></div>
        <div class="hero-gradient-2"></div>
      </div>
      <div class="hero-grid"></div>
      <div class="hero-particles">
        ${Array.from({length: 20}, () => `
          <div class="particle" style="left: ${Math.random() * 100}%; top: ${Math.random() * 100}%; animation-delay: ${Math.random() * 2}s;"></div>
        `).join('')}
      </div>
      
      <div class="container hero-container">
        <div class="hero-grid-layout">
          <div class="hero-content">
            <div class="hero-badge">
              ${icons.sparkles}
              <span>${t('hero.introducing')}</span>
            </div>
            <h1 class="hero-title">
              Tu plataforma de 
              <span class="gradient-text">IA definitiva</span>
            </h1>
            <p class="hero-description">${t('hero.description')}</p>
            <div class="hero-buttons">
              <a href="#features" class="btn btn-primary">
                Explorar características
                ${icons.arrowRight}
              </a>
              <a href="https://github.com/lksnext-ai-lab/ai-core-tools" target="_blank" class="btn btn-secondary">
                Ver documentación
              </a>
            </div>
          </div>

          <div class="hero-visual">
            <div class="hero-card">
              <div class="card-header">
                <div class="card-icon">
                  ${icons.code}
                </div>
                <div>
                  <div class="card-title">MattinAI Core</div>
                  <div class="card-version">v2.0.0</div>
                </div>
              </div>
              <div class="card-features">
                <div class="feature-item">
                  ${icons.zap}
                  <span>RAG & Semantic Search</span>
                </div>
                <div class="feature-item">
                  ${icons.zap}
                  <span>Multi-LLM Integration</span>
                </div>
                <div class="feature-item">
                  ${icons.zap}
                  <span>AI Agent Automation</span>
                </div>
              </div>
            </div>
            <div class="floating-badge badge-1">Open Source</div>
            <div class="floating-badge badge-2">Production Ready</div>
          </div>
        </div>
      </div>
    </section>
  `;
}

function Features() {
  const features = [
    { icon: 'cpu', key: 'llm' },
    { icon: 'database', key: 'rag' },
    { icon: 'users', key: 'agents' },
    { icon: 'blocks', key: 'modular' }
  ];

  return `
    <section id="features" class="features">
      <div class="container">
        <h2 class="section-title">${t('features.title')}</h2>
        <div class="features-grid">
          ${features.map((feature, index) => `
            <div class="feature-card">
              <div class="feature-number">${String(index + 1).padStart(2, '0')}</div>
              <div class="feature-icon">${icons[feature.icon]}</div>
              <h3 class="feature-title">${t(`features.${feature.key}.title`)}</h3>
              <p class="feature-description">${t(`features.${feature.key}.description`)}</p>
            </div>
          `).join('')}
        </div>

        <div class="technical-section">
          <h3 class="technical-title">${t('features.technical.title')}</h3>
          <div class="technical-grid">
            <div class="tech-item">
              <strong>${t('features.technical.backend')}:</strong> Python 3.11+
            </div>
            <div class="tech-item">
              <strong>${t('features.technical.frontend')}:</strong> Node.js 18+
            </div>
            <div class="tech-item">
              <strong>${t('features.technical.database')}:</strong> PostgreSQL + pgvector
            </div>
            <div class="tech-item">
              <strong>${t('features.technical.framework')}:</strong> FastAPI + React
            </div>
            <div class="tech-item">
              <strong>${t('features.technical.license')}:</strong> AGPL 3.0
            </div>
            <div class="tech-item">
              <strong>${t('features.technical.commercial')}:</strong> Available
            </div>
          </div>
        </div>

        <div class="cta-buttons">
          <a href="https://github.com/lksnext-ai-lab/ai-core-tools" target="_blank" class="btn btn-primary">
            ${icons.github}
            ${t('features.cta.repository')}
          </a>
          <a href="https://github.com/lksnext-ai-lab/ai-core-tools/docs" target="_blank" class="btn btn-secondary">
            ${t('features.cta.documentation')}
          </a>
        </div>
      </div>
    </section>
  `;
}

function Architecture() {
  return `
    <section id="architecture" class="architecture">
      <div class="container">
        <div class="arch-header">
          <h2 class="section-title">${t('architecture.title')}</h2>
          <p class="arch-subtitle">${t('architecture.subtitle')}</p>
        </div>

        <div class="arch-grid">
          <div class="arch-column">
            <div class="arch-card">
              <div class="arch-card-header">
                <span class="arch-badge">${t('architecture.flow.config')}</span>
                <h3>${t('architecture.configuration.title')}</h3>
              </div>
              <p class="arch-description">${t('architecture.configuration.description')}</p>
              <ul class="arch-list">
                <li>
                  <strong>${t('architecture.configuration.instructions')}</strong>
                  <span>${t('architecture.configuration.instructions_desc')}</span>
                </li>
                <li>
                  <strong>${t('architecture.configuration.memory')}</strong>
                  <span>${t('architecture.configuration.memory_desc')}</span>
                </li>
                <li>
                  <strong>${t('architecture.configuration.tools')}</strong>
                  <span>${t('architecture.configuration.tools_desc')}</span>
                </li>
                <li>
                  <strong>${t('architecture.configuration.data')}</strong>
                  <span>${t('architecture.configuration.data_desc')}</span>
                </li>
                <li>
                  <strong>${t('architecture.configuration.rag')}</strong>
                  <span>${t('architecture.configuration.rag_desc')}</span>
                </li>
              </ul>
            </div>
          </div>

          <div class="arch-column">
            <div class="arch-card">
              <div class="arch-card-header">
                <span class="arch-badge">${t('architecture.flow.execution')}</span>
                <h3>${t('architecture.runtime.title')}</h3>
              </div>
              <p class="arch-description">${t('architecture.runtime.description')}</p>
              <ul class="arch-list">
                <li>
                  <strong>${t('architecture.runtime.gateway')}</strong>
                  <span>${t('architecture.runtime.gateway_desc')}</span>
                </li>
                <li>
                  <strong>${t('architecture.runtime.memory')}</strong>
                  <span>${t('architecture.runtime.memory_desc')}</span>
                </li>
                <li>
                  <strong>${t('architecture.runtime.orchestration')}</strong>
                  <span>${t('architecture.runtime.orchestration_desc')}</span>
                </li>
                <li>
                  <strong>${t('architecture.runtime.tools')}</strong>
                  <span>${t('architecture.runtime.tools_desc')}</span>
                </li>
                <li>
                  <strong>${t('architecture.runtime.llm')}</strong>
                  <span>${t('architecture.runtime.llm_desc')}</span>
                </li>
              </ul>
            </div>
          </div>

          <div class="arch-column">
            <div class="arch-card">
              <div class="arch-card-header">
                <span class="arch-badge">${t('architecture.flow.monitoring')}</span>
                <h3>${t('architecture.observability.title')}</h3>
              </div>
              <p class="arch-description">${t('architecture.observability.description')}</p>
              <ul class="arch-list">
                <li>
                  <strong>${t('architecture.observability.tracing')}</strong>
                  <span>${t('architecture.observability.tracing_desc')}</span>
                </li>
                <li>
                  <strong>${t('architecture.observability.logs')}</strong>
                  <span>${t('architecture.observability.logs_desc')}</span>
                </li>
                <li>
                  <strong>${t('architecture.observability.metrics')}</strong>
                  <span>${t('architecture.observability.metrics_desc')}</span>
                </li>
                <li>
                  <strong>${t('architecture.observability.feedback')}</strong>
                  <span>${t('architecture.observability.feedback_desc')}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

function Footer() {
  return `
    <footer class="footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <div class="footer-logo">
              <div class="logo-icon">M</div>
              <span class="logo-text">MattinAI</span>
            </div>
            <p class="footer-copyright">© 2025 LKS Next. ${t('footer.copyright')}</p>
            <p class="footer-trademark">${t('footer.trademark')}</p>
          </div>

          <div class="footer-section">
            <h4 class="footer-heading">${t('footer.sponsored')}</h4>
            <div class="footer-partners">
              <div class="partner-item">
                ${icons.globe}
                <span>${t('footer.partner1')}</span>
              </div>
              <div class="partner-item">
                ${icons.globe}
                <span>${t('footer.partner2')}</span>
              </div>
            </div>
          </div>

          <div class="footer-section">
            <h4 class="footer-heading">Links</h4>
            <div class="footer-links">
              <a href="https://github.com/lksnext-ai-lab/ai-core-tools" target="_blank">GitHub</a>
              <a href="https://github.com/lksnext-ai-lab/ai-core-tools/docs" target="_blank">Documentation</a>
              <a href="https://lksnext.com" target="_blank">LKS Next</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  `;
}

// Render principal
function render() {
  const app = document.getElementById('app');
  app.innerHTML = `
    ${Header()}
    <main>
      ${Hero()}
      ${Features()}
      ${Architecture()}
    </main>
    ${Footer()}
  `;
}

// Hacer disponible setLanguage globalmente
window.setLanguage = setLanguage;

// Inicializar la aplicación
document.addEventListener('DOMContentLoaded', () => {
  render();
  
  // Smooth scroll para los enlaces
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
