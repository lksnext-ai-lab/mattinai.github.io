import { motion } from 'motion/react';
import { GitBranch, Settings, Play, BookOpen, Github } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

const STEPS = [
  {
    id: 'clone',
    icon: GitBranch,
    titleKey: 'step1title' as const,
    descKey: 'step1desc' as const,
    code: 'git clone https://github.com/lksnext-ai-lab/ai-core-tools\ncd ai-core-tools',
  },
  {
    id: 'config',
    icon: Settings,
    titleKey: 'step2title' as const,
    descKey: 'step2desc' as const,
    code: 'cp .env.example .env\n# Add your LLM API key:\n# OPENAI_API_KEY=sk-...',
  },
  {
    id: 'run',
    icon: Play,
    titleKey: 'step3title' as const,
    descKey: 'step3desc' as const,
    code: 'docker-compose up -d',
  },
];

export function QuickStart() {
  const { t } = useLanguage();

  return (
    <section id="quickstart" className="bg-[#0f1419] py-20">
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
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              {t.quickstart.title}
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              {t.quickstart.subtitle}
            </p>
          </motion.div>

          {/* Steps */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {STEPS.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Connector line between steps */}
                  {index < STEPS.length - 1 && (
                    <div className="hidden md:block absolute top-7 left-full w-6 h-0.5 bg-gradient-to-r from-[#F26B3A]/50 to-[#F26B3A]/10 z-10" />
                  )}

                  <div className="bg-[#161b22] border border-white/10 rounded-xl overflow-hidden h-full">
                    {/* Step header */}
                    <div className="flex items-center gap-3 p-4 border-b border-white/10">
                      <div className="w-9 h-9 bg-gradient-to-br from-[#F26B3A] to-[#d45a2f] rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <div className="text-xs text-[#F26B3A] font-mono font-semibold">
                          0{index + 1}
                        </div>
                        <div className="text-white font-semibold text-sm">
                          {t.quickstart[step.titleKey]}
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-400 text-sm px-4 pt-3 pb-2">
                      {t.quickstart[step.descKey]}
                    </p>

                    {/* Code block */}
                    <div className="mx-4 mb-4 bg-[#0d1117] border border-white/5 rounded-lg p-3">
                      <pre className="text-green-400 text-xs font-mono whitespace-pre leading-relaxed">
                        {step.code}
                      </pre>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Ready indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-gradient-to-r from-[#F26B3A]/10 to-[#F26B3A]/5 border border-[#F26B3A]/20 rounded-xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 mb-10"
          >
            <div className="flex items-center gap-3">
              <div className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse" />
              <span className="text-white font-medium">
                {t.quickstart.readyLabel}{' '}
                <span className="text-[#F26B3A] font-mono">{t.quickstart.readyUrl}</span>
              </span>
            </div>
            <div className="text-gray-400 text-sm text-center sm:text-right">
              Python 3.11+ · Node 18+ · Docker
            </div>
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="https://github.com/lksnext-ai-lab/ai-core-tools/blob/develop/docs/README.md"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-[#F26B3A] to-[#d45a2f] text-white px-8 py-4 rounded-lg hover:shadow-[0_0_30px_rgba(242,107,58,0.3)] transition-all inline-flex items-center justify-center gap-2 font-medium"
            >
              <BookOpen className="w-5 h-5" />
              {t.quickstart.ctaDocs}
            </a>
            <a
              href="https://github.com/lksnext-ai-lab/ai-core-tools"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 border border-white/20 text-white px-8 py-4 rounded-lg hover:bg-white/20 transition-all inline-flex items-center justify-center gap-2 font-medium"
            >
              <Github className="w-5 h-5" />
              {t.quickstart.ctaGithub}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
