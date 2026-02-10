import { motion } from 'motion/react';
import { Settings, Activity, BarChart3, ChevronRight } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export function Architecture() {
  const { t } = useLanguage();

  const architectureComponents = [
    {
      icon: Settings,
      title: t.architecture.configuration.title,
      description: t.architecture.configuration.description,
      items: [
        { title: t.architecture.configuration.instructions, desc: t.architecture.configuration.instructions_desc },
        { title: t.architecture.configuration.memory, desc: t.architecture.configuration.memory_desc },
        { title: t.architecture.configuration.tools, desc: t.architecture.configuration.tools_desc },
        { title: t.architecture.configuration.data, desc: t.architecture.configuration.data_desc },
        { title: t.architecture.configuration.rag, desc: t.architecture.configuration.rag_desc }
      ]
    },
    {
      icon: Activity,
      title: t.architecture.runtime.title,
      description: t.architecture.runtime.description,
      items: [
        { title: t.architecture.runtime.gateway, desc: t.architecture.runtime.gateway_desc },
        { title: t.architecture.runtime.memory, desc: t.architecture.runtime.memory_desc },
        { title: t.architecture.runtime.orchestration, desc: t.architecture.runtime.orchestration_desc },
        { title: t.architecture.runtime.tools, desc: t.architecture.runtime.tools_desc },
        { title: t.architecture.runtime.llm, desc: t.architecture.runtime.llm_desc }
      ]
    },
    {
      icon: BarChart3,
      title: t.architecture.observability.title,
      description: t.architecture.observability.description,
      items: [
        { title: t.architecture.observability.tracing, desc: t.architecture.observability.tracing_desc },
        { title: t.architecture.observability.logs, desc: t.architecture.observability.logs_desc },
        { title: t.architecture.observability.metrics, desc: t.architecture.observability.metrics_desc },
        { title: t.architecture.observability.feedback, desc: t.architecture.observability.feedback_desc }
      ]
    }
  ];

  return (
    <section id="architecture" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="text-[#F26B3A]">{t.architecture.title}</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t.architecture.subtitle}
            </p>
          </motion.div>

          {/* Architecture Components Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {architectureComponents.map((component, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-lg"
              >
                <div className="flex items-center mb-4">
                  <div className="text-[#F26B3A] mr-3">
                    <component.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#222222]">
                    {component.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-4 text-sm">
                  {component.description}
                </p>
                <ul className="space-y-2">
                  {component.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start text-sm">
                      <ChevronRight className="w-4 h-4 text-[#F26B3A] mr-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-medium text-[#222222]">{item.title}:</span>{' '}
                        <span className="text-gray-600">{item.desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Architecture Flow Visualization */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-16 bg-gradient-to-br from-[#F26B3A]/10 to-[#F26B3A]/5 p-8 rounded-lg"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#F26B3A] rounded-full flex items-center justify-center mx-auto mb-3">
                  <Settings className="w-8 h-8 text-white" />
                </div>
                <p className="font-medium text-[#222222]">{t.architecture.flow.config}</p>
              </div>
              <div className="hidden md:block text-[#F26B3A]">→</div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#F26B3A] rounded-full flex items-center justify-center mx-auto mb-3">
                  <Activity className="w-8 h-8 text-white" />
                </div>
                <p className="font-medium text-[#222222]">{t.architecture.flow.execution}</p>
              </div>
              <div className="hidden md:block text-[#F26B3A]">→</div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#F26B3A] rounded-full flex items-center justify-center mx-auto mb-3">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <p className="font-medium text-[#222222]">{t.architecture.flow.monitoring}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}