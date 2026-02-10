import { useLanguage } from '../i18n/LanguageContext';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="p-8 text-center text-gray-500 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        {/* Sponsored By Section */}
        <div className="mb-6 pb-6 border-b border-gray-300">
          <p className="text-sm font-medium text-gray-600 mb-4">{t.footer.sponsored}</p>
          <div className="flex justify-center items-center gap-8 flex-wrap">
            <div className="bg-white px-6 py-3 rounded-lg shadow-sm">
              <p className="font-semibold text-[#222222]">LKS Next</p>
              <p className="text-xs text-gray-500">{t.footer.partner1}</p>
            </div>
            <div className="bg-white px-6 py-3 rounded-lg shadow-sm">
              <p className="font-semibold text-[#222222]">Grupo SPRI</p>
              <p className="text-xs text-gray-500">{t.footer.partner2}</p>
            </div>
          </div>
        </div>
        
        {/* Copyright Section */}
        <div className="max-w-md mx-auto">
          <p className="text-sm">&copy; 2025 LKS Next. {t.footer.copyright}</p>
          <p className="text-xs mt-1">
            {t.footer.trademark}
          </p>
        </div>
      </div>
    </footer>
  );
}