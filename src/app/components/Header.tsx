import { Menu, Github, BookOpen } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { Language } from '../i18n/translations';
import logo from 'figma:asset/2458237f843d769be541c33a0f4407ffe9d6cc61.png';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const languages: { code: Language; label: string }[] = [
    { code: 'en', label: 'EN' },
    { code: 'eu', label: 'EU' },
    { code: 'es', label: 'ES' }
  ];

  return (
    <>
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex justify-between items-center flex-wrap gap-4">
            <a className="flex items-center gap-3" href="#" aria-label="MattinAI Home">
              <img src={logo} alt="MattinAI Logo" className="h-8" />
            </a>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8 flex-1 justify-center">
              <a href="#about" className="text-[#222222] hover:text-[#F26B3A] transition-colors font-medium">
                {t.nav.about}
              </a>
              <a href="#features" className="text-[#222222] hover:text-[#F26B3A] transition-colors font-medium">
                {t.nav.features}
              </a>
              <a href="#architecture" className="text-[#222222] hover:text-[#F26B3A] transition-colors font-medium">
                {t.nav.architecture}
              </a>
            </div>
            
            {/* External Links & Language Switcher */}
            <div className="flex items-center gap-4">
              <a 
                href="https://github.com/lksnext-ai-lab/ai-core-tools" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#222222] hover:text-[#F26B3A] transition-colors"
                aria-label="GitHub Repository"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://github.com/lksnext-ai-lab/ai-core-tools/blob/develop/docs/README.md" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#222222] hover:text-[#F26B3A] transition-colors"
                aria-label="Documentation"
              >
                <BookOpen className="w-5 h-5" />
              </a>
              
              {/* Language Switcher */}
              <div className="flex items-center gap-0.5 bg-gray-100 rounded-md overflow-hidden p-0.5">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={`px-3 py-1.5 text-sm font-medium transition-all rounded ${
                      language === lang.code
                        ? 'bg-[#F26B3A] text-white shadow-sm'
                        : 'bg-transparent text-[#222222] hover:bg-white'
                    }`}
                    aria-label={`Switch to ${lang.label}`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-[#222222]"
              aria-label="Toggle menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </nav>
          
          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 flex flex-col gap-2 pb-4">
              <a href="#about" className="text-[#222222] hover:text-[#F26B3A] transition-colors py-2 font-medium">
                {t.nav.about}
              </a>
              <a href="#features" className="text-[#222222] hover:text-[#F26B3A] transition-colors py-2 font-medium">
                {t.nav.features}
              </a>
              <a href="#architecture" className="text-[#222222] hover:text-[#F26B3A] transition-colors py-2 font-medium">
                {t.nav.architecture}
              </a>
            </div>
          )}
        </div>
      </header>
    </>
  );
}