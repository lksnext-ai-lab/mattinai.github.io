import { Menu, Github, BookOpen, X } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { Language } from '../i18n/translations';
import logo from '@/assets/2458237f843d769be541c33a0f4407ffe9d6cc61.png';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const languages: { code: Language; label: string }[] = [
    { code: 'en', label: 'EN' },
    { code: 'eu', label: 'EU' },
    { code: 'es', label: 'ES' }
  ];

  const navLinks = [
    { href: '#features', label: t.nav.features },
    { href: '#quickstart', label: t.nav.quickstart },
    { href: '#architecture', label: t.nav.architecture },
    { href: '#licensing', label: t.nav.licensing },
  ];

  return (
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex justify-between items-center gap-4">
            <a className="flex items-center gap-3 flex-shrink-0" href="#about" aria-label="MattinAI Home">
              <img src={logo} alt="MattinAI Logo" className="h-8" />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6 flex-1 justify-center">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[#222222] hover:text-[#F26B3A] transition-colors font-medium text-sm"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Right side: icons + language + CTA */}
            <div className="hidden lg:flex items-center gap-3">
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
                    className={`px-2.5 py-1.5 text-xs font-medium transition-all rounded ${
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

              {/* Get Started CTA */}
              <a
                href="#quickstart"
                className="bg-[#F26B3A] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#d45a2f] transition-colors"
              >
                {t.hero.getStarted}
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-[#222222]"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </nav>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden mt-4 flex flex-col gap-2 pb-4 border-t border-gray-100 pt-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-[#222222] hover:text-[#F26B3A] transition-colors py-2 font-medium"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex items-center gap-3 pt-2">
                <a
                  href="https://github.com/lksnext-ai-lab/ai-core-tools"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#222222] hover:text-[#F26B3A] transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com/lksnext-ai-lab/ai-core-tools/blob/develop/docs/README.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#222222] hover:text-[#F26B3A] transition-colors"
                >
                  <BookOpen className="w-5 h-5" />
                </a>
                <div className="flex items-center gap-0.5 bg-gray-100 rounded-md overflow-hidden p-0.5 ml-auto">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => setLanguage(lang.code)}
                      className={`px-2.5 py-1.5 text-xs font-medium transition-all rounded ${
                        language === lang.code
                          ? 'bg-[#F26B3A] text-white shadow-sm'
                          : 'bg-transparent text-[#222222] hover:bg-white'
                      }`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              </div>
              <a
                href="#quickstart"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-[#F26B3A] text-white px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-[#d45a2f] transition-colors text-center mt-2"
              >
                {t.hero.getStarted}
              </a>
            </div>
          )}
        </div>
      </header>
  );
}
