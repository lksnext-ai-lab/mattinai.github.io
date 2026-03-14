import { motion } from 'motion/react';
import { Building2, Code2, FlaskConical, Check } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

const USE_CASES = [
  {
    id: 'enterprise',
    icon: Building2,
    color: 'from-blue-500 to-blue-600',
    featureKeys: ['feature1', 'feature2', 'feature3', 'feature4'] as const,
  },
  {
    id: 'developer',
    icon: Code2,
    color: 'from-[#F26B3A] to-[#d45a2f]',
    featureKeys: ['feature1', 'feature2', 'feature3', 'feature4'] as const,
  },
  {
    id: 'researcher',
    icon: FlaskConical,
    color: 'from-purple-500 to-purple-600',
    featureKeys: ['feature1', 'feature2', 'feature3', 'feature4'] as const,
  },
];

export function UseCases() {
  const { t } = useLanguage();

  return (
    <section id="usecases" className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-[#222222] mb-4">
              {t.usecases.title}
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              {t.usecases.subtitle}
            </p>
          </motion.div>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {USE_CASES.map((useCase, index) => {
              const Icon = useCase.icon;
              const data = t.usecases[useCase.id as keyof typeof t.usecases];
              if (typeof data === 'string') return null;

              return (
                <motion.div
                  key={useCase.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-all group"
                >
                  {/* Icon */}
                  <div className={`w-14 h-14 bg-gradient-to-br ${useCase.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Title & description */}
                  <h3 className="text-xl font-bold text-[#222222] mb-3">
                    {'title' in data ? data.title : ''}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {'description' in data ? data.description : ''}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2.5">
                    {useCase.featureKeys.map((key) => (
                      <li key={key} className="flex items-start gap-2.5">
                        <div className={`w-5 h-5 bg-gradient-to-br ${useCase.color} rounded-full flex items-center justify-center flex-shrink-0 mt-0.5`}>
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-gray-700 text-sm">
                          {key in data ? (data as Record<string, string>)[key] : ''}
                        </span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
