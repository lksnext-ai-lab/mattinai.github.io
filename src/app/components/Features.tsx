import { motion } from 'motion/react';
import { Bot, Database, Cog, Puzzle, Github, BookOpen } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export function Features() {
  const { t } = useLanguage();

  const features = [
    {
      icon: Bot,
      title: t.features.llm.title,
      description: t.features.llm.description
    },
    {
      icon: Database,
      title: t.features.rag.title,
      description: t.features.rag.description
    },
    {
      icon: Cog,
      title: t.features.agents.title,
      description: t.features.agents.description
    },
    {
      icon: Puzzle,
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
    <section id="features" className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start mb-4">
                  <div className="text-[#F26B3A] mr-4 mt-1">
                    <feature.icon className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#222222] mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">
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
            className="bg-white p-8 rounded-lg shadow-sm mb-8"
          >
            <h3 className="text-2xl font-semibold text-[#222222] mb-6">
              {t.features.technical.title}
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {techSpecs.map((spec, index) => (
                <div key={index}>
                  <p className="text-gray-600">
                    <span className="font-medium text-[#222222]">{spec.label}:</span>{' '}
                    {spec.value}
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
              className="bg-[#F26B3A] text-white px-8 py-3 rounded-md hover:bg-[#d45a2f] transition-colors inline-flex items-center justify-center gap-2"
            >
              <Github className="w-5 h-5" />
              {t.features.cta.repository}
            </a>
            <a
              href="https://github.com/lksnext-ai-lab/ai-core-tools/blob/develop/docs/README.md"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-[#F26B3A] text-[#F26B3A] px-8 py-3 rounded-md hover:bg-[#F26B3A] hover:text-white transition-colors inline-flex items-center justify-center gap-2"
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