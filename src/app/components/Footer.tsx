import { useLanguage } from '../i18n/LanguageContext';
import { Github, Mail, MapPin, Phone } from 'lucide-react';
import logo from 'figma:asset/2458237f843d769be541c33a0f4407ffe9d6cc61.png';
import lksNextLogo from 'figma:asset/29a87c8664540d150024bc9ce07f05798b11a9cf.png';
import grupoSpriLogo from 'figma:asset/5b19de8244f97af9768345901065838248715026.png';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#1a2332] text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8 pb-8 border-b border-gray-700">
            {/* Brand Section */}
            <div>
              <img src={logo} alt="MattinAI Logo" className="h-10 mb-4" />
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {t.footer.description}
              </p>
              <div className="flex gap-3">
                <a
                  href="https://github.com/lksnext-ai-lab/ai-core-tools"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-[#F26B3A] text-white w-10 h-10 rounded-lg flex items-center justify-center transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="mailto:info@lksnext.com"
                  className="bg-white/10 hover:bg-[#F26B3A] text-white w-10 h-10 rounded-lg flex items-center justify-center transition-colors"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-white font-bold mb-4">{t.footer.resources}</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="https://github.com/lksnext-ai-lab/ai-core-tools/blob/develop/docs/README.md" target="_blank" rel="noopener noreferrer" className="hover:text-[#F26B3A] transition-colors">
                    {t.footer.documentation}
                  </a>
                </li>
                <li>
                  <a href="https://github.com/lksnext-ai-lab/ai-core-tools" target="_blank" rel="noopener noreferrer" className="hover:text-[#F26B3A] transition-colors">
                    {t.footer.repository}
                  </a>
                </li>
                <li>
                  <a href="#features" className="hover:text-[#F26B3A] transition-colors">
                    {t.nav.features}
                  </a>
                </li>
                <li>
                  <a href="#architecture" className="hover:text-[#F26B3A] transition-colors">
                    {t.nav.architecture}
                  </a>
                </li>
              </ul>
            </div>

            {/* Offices & Headquarters */}
            <div>
              <h4 className="text-white font-bold mb-3 text-xs tracking-wider">{t.footer.offices}</h4>
              <p className="text-gray-400 text-xs mb-4 leading-relaxed">
                Arrasate-Mondragón • Bilbao • Zamudio • Donostia-San Sebastián • Vitoria-Gasteiz • Madrid • El Astillero • Bidart
              </p>
              
              <h4 className="text-white font-bold mb-3 text-xs tracking-wider">{t.footer.headquarters}</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#F26B3A] mt-0.5 flex-shrink-0" />
                  <div>
                    <p>Goiru, 7 Arrasate-Mondragón</p>
                    <p>CP 20500 GIPUZKOA – SPAIN</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Phone className="w-4 h-4 text-[#F26B3A] mt-0.5 flex-shrink-0" />
                  <a href="tel:+34900841414" className="hover:text-[#F26B3A] transition-colors">
                    +34 900 84 14 14
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <Mail className="w-4 h-4 text-[#F26B3A] mt-0.5 flex-shrink-0" />
                  <a href="mailto:info@lksnext.com" className="hover:text-[#F26B3A] transition-colors">
                    info@lksnext.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Sponsored By Section */}
          <div className="mb-8 pb-8 border-b border-gray-700">
            <p className="text-sm font-medium text-gray-400 mb-4 text-center">{t.footer.sponsored}</p>
            <div className="flex justify-center items-center gap-8 flex-wrap">
              <a 
                href="https://www.lksnext.com/es/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white rounded-lg px-8 py-6 flex items-center justify-center hover:shadow-lg transition-shadow"
              >
                <img src={lksNextLogo} alt="LKS Next" className="h-16" />
              </a>
              <div className="bg-white rounded-lg px-8 py-6 flex items-center justify-center">
                <img src={grupoSpriLogo} alt="Grupo SPRI" className="h-16" />
              </div>
            </div>
          </div>
          
          {/* Copyright Section */}
          <div className="text-center">
            <p className="text-sm text-gray-400 mb-2">
              &copy; 2026 LKS Next. {t.footer.copyright}
            </p>
            <p className="text-xs text-gray-500 max-w-2xl mx-auto">
              {t.footer.trademark}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}