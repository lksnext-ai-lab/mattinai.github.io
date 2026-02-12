import { motion } from 'motion/react';
import { Bot, Database, Cog, Puzzle, Github, BookOpen } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export function Features() {
  const { t } = useLanguage();

  const features = [
    {
      icon: Bot,
      number: "01",
      title: t.features.llm.title,
      description: t.features.llm.description
    },
    {
      icon: Database,
      number: "02",
      title: t.features.rag.title,
      description: t.features.rag.description
    },
    {
      icon: Cog,
      number: "03",
      title: t.features.agents.title,
      description: t.features.agents.description
    },
    {
      icon: Puzzle,
      number: "04",
      title: t.features.modular.title,
      description: t.features.modular.description
    }
  ];

  const techSpecs = [
    { label: t.features.technical.backend, value: "Python 3.11+" },
    { label: t.features.technical.frontend, value: "Node.js 18+" },
    { label: t.features.technical.database, value: "PostgreSQL + pgvector" },
    { label: t.features.technical.framework, value: "FastAPI + React" },
    { label: t.features.technical.license, value: "AGPL 3.0 (Open Source)" },
    { label: t.features.technical.commercial, value: "Licencia Comercial Disponible" }
  ];

  return (
    <section id="features" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-[#222222] mb-4">
              {t.features.benefitsTitle1} <span className="text-[#F26B3A]">{t.features.benefitsTitle2}</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              {t.features.benefitsSubtitle}
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white border border-gray-200 p-8 rounded-xl hover:shadow-lg transition-all hover:border-[#F26B3A]/30"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-[#F26B3A] text-white w-12 h-12 rounded-lg flex items-center justify-center font-bold text-lg flex-shrink-0 group-hover:scale-110 transition-transform">
                    {feature.number}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[#222222] mb-3 group-hover:text-[#F26B3A] transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Technical Requirements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 p-8 rounded-xl mb-12"
          >
            <h3 className="text-2xl font-bold text-[#222222] mb-6 flex items-center gap-2">
              <div className="w-1 h-8 bg-[#F26B3A] rounded"></div>
              {t.features.technical.title}
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {techSpecs.map((spec, index) => (
                <div key={index} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-[#F26B3A] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">
                    <span className="font-semibold text-[#222222]">{spec.label}:</span>{' '}
                    <span className="text-gray-600">{spec.value}</span>
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="https://github.com/lksnext-ai-lab/ai-core-tools"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#F26B3A] text-white px-8 py-4 rounded-lg hover:bg-[#d45a2f] transition-all shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2 font-medium"
            >
              <Github className="w-5 h-5" />
              {t.features.cta.repository}
            </a>
            <a
              href="https://github.com/lksnext-ai-lab/ai-core-tools/blob/develop/docs/README.md"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-[#F26B3A] text-[#F26B3A] px-8 py-4 rounded-lg hover:bg-[#F26B3A] hover:text-white transition-all inline-flex items-center justify-center gap-2 font-medium"
            >
              <BookOpen className="w-5 h-5" />
              {t.features.cta.documentation}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}