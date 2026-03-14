import { motion } from 'motion/react';
import { Check, X, Github, Mail } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

const COMMUNITY_FEATURES = ['feature1', 'feature2', 'feature3', 'feature4'] as const;
const COMMERCIAL_FEATURES = ['feature1', 'feature2', 'feature3', 'feature4', 'feature5'] as const;

function FeatureRow({ text, included }: { text: string; included: boolean }) {
  return (
    <li className="flex items-start gap-3">
      {included
        ? <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
        : <X className="w-5 h-5 text-gray-300 flex-shrink-0 mt-0.5" />
      }
      <span className={included ? 'text-gray-700' : 'text-gray-400'}>
        {text}
      </span>
    </li>
  );
}

export function Licensing() {
  const { t } = useLanguage();

  return (
    <section id="licensing" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-[#222222] mb-4">
              {t.licensing.title}
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              {t.licensing.subtitle}
            </p>
          </motion.div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            {/* Community */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="border-2 border-gray-200 rounded-2xl p-8 flex flex-col"
            >
              <div className="mb-6">
                <span className="inline-block bg-gray-100 text-gray-600 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                  {t.licensing.community.badge}
                </span>
                <h3 className="text-2xl font-bold text-[#222222]">
                  {t.licensing.community.title}
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  {t.licensing.community.description}
                </p>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {COMMUNITY_FEATURES.map((key) => (
                  <FeatureRow key={key} text={t.licensing.community[key]} included />
                ))}
                <FeatureRow text={t.licensing.community.feature5} included={false} />
              </ul>

              <a
                href="https://github.com/lksnext-ai-lab/ai-core-tools"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-[#222222] text-[#222222] px-6 py-3 rounded-lg hover:bg-[#222222] hover:text-white transition-all inline-flex items-center justify-center gap-2 font-medium"
              >
                <Github className="w-5 h-5" />
                {t.licensing.community.cta}
              </a>
            </motion.div>

            {/* Commercial */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="border-2 border-[#F26B3A] rounded-2xl p-8 flex flex-col relative overflow-hidden"
            >
              {/* Subtle background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#F26B3A]/5 to-transparent pointer-events-none" />

              <div className="mb-6 relative">
                <span className="inline-block bg-[#F26B3A] text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">
                  {t.licensing.commercial.badge}
                </span>
                <h3 className="text-2xl font-bold text-[#222222]">
                  {t.licensing.commercial.title}
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  {t.licensing.commercial.description}
                </p>
              </div>

              <ul className="space-y-3 mb-8 flex-1 relative">
                {COMMERCIAL_FEATURES.map((key) => (
                  <FeatureRow key={key} text={t.licensing.commercial[key]} included />
                ))}
              </ul>

              <a
                href="mailto:mattin-ai@lksnext.com"
                className="bg-gradient-to-r from-[#F26B3A] to-[#d45a2f] text-white px-6 py-3 rounded-lg hover:shadow-[0_0_20px_rgba(242,107,58,0.4)] transition-all inline-flex items-center justify-center gap-2 font-medium relative"
              >
                <Mail className="w-5 h-5" />
                {t.licensing.commercial.cta}
              </a>
            </motion.div>
          </div>

          {/* Contact note */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center text-gray-500 text-sm"
          >
            {t.licensing.contact}{' '}
            <a href="mailto:mattin-ai@lksnext.com" className="text-[#F26B3A] hover:underline font-medium">
              mattin-ai@lksnext.com
            </a>
          </motion.p>
        </div>
      </div>
    </section>
  );
}
