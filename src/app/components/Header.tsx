import { Menu, Github, BookOpen } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { Language } from '../i18n/translations';

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
      <div className="w-full h-1 bg-gradient-to-r from-[#F26B3A] via-[#F26B3A]/70 to-[#F26B3A]"></div>
      <header className="container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center flex-wrap gap-4">
          <a className="flex items-center gap-3" href="#" aria-label="MattinAI Home">
            <div className="text-4xl font-bold">
              <span className="text-[#222222]">Mattin</span>
              <span className="text-[#F26B3A]">AI</span>
            </div>
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 flex-1 justify-center">
            <a href="#about" className="text-[#222222] hover:text-[#F26B3A] transition-colors">
              {t.nav.about}
            </a>
            <a href="#features" className="text-[#222222] hover:text-[#F26B3A] transition-colors">
              {t.nav.features}
            </a>
            <a href="#architecture" className="text-[#222222] hover:text-[#F26B3A] transition-colors">
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
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://github.com/lksnext-ai-lab/ai-core-tools/blob/develop/docs/README.md" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#222222] hover:text-[#F26B3A] transition-colors"
              aria-label="Documentation"
            >
              <BookOpen className="w-6 h-6" />
            </a>
            
            {/* Language Switcher */}
            <div className="flex items-center gap-1 border border-gray-300 rounded-md overflow-hidden">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className={`px-3 py-1 text-sm font-medium transition-colors ${
                    language === lang.code
                      ? 'bg-[#F26B3A] text-white'
                      : 'bg-white text-[#222222] hover:bg-gray-100'
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
          <div className="md:hidden mt-4 flex flex-col gap-2">
            <a href="#about" className="text-[#222222] hover:text-[#F26B3A] transition-colors py-2">
              {t.nav.about}
            </a>
            <a href="#features" className="text-[#222222] hover:text-[#F26B3A] transition-colors py-2">
              {t.nav.features}
            </a>
            <a href="#architecture" className="text-[#222222] hover:text-[#F26B3A] transition-colors py-2">
              {t.nav.architecture}
            </a>
          </div>
        )}
      </header>
    </>
  );
}