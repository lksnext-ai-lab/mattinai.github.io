import { motion } from 'motion/react';
import { useLanguage } from '../i18n/LanguageContext';
import { ArrowRight, Sparkles, Terminal, Check } from 'lucide-react';

const TERMINAL_LINES = [
  { id: 'clone',    prompt: true,  text: 'git clone github.com/lksnext-ai-lab/ai-core-tools' },
  { id: 'cloneout', prompt: false, text: "Cloning into 'ai-core-tools'... done.", dim: true },
  { id: 'cp',       prompt: true,  text: 'cp .env.example .env' },
  { id: 'up',       prompt: true,  text: 'docker-compose up -d' },
  { id: 'db',       prompt: false, text: '✓  db        started', green: true },
  { id: 'backend',  prompt: false, text: '✓  backend   started', green: true },
  { id: 'frontend', prompt: false, text: '✓  frontend  started', green: true },
  { id: 'ready',    prompt: false, text: '→  Ready at http://localhost:3000', orange: true },
];

function terminalLineClass(line: typeof TERMINAL_LINES[number]): string {
  if (line.green) return 'text-green-400';
  if (line.orange) return 'text-[#F26B3A] font-semibold';
  if (line.dim) return 'text-gray-600';
  if (line.prompt) return 'text-gray-200';
  return 'text-gray-400';
}

export function Hero() {
  const { t } = useLanguage();

  return (
    <section id="about" className="relative bg-[#0f1419] py-24 md:py-32 overflow-hidden">
      {/* Animated background gradients */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a2332] via-[#0f1419] to-[#1a2332]"></div>
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#F26B3A]/20 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px]"
        />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(#F26B3A 1px, transparent 1px), linear-gradient(90deg, #F26B3A 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }} />

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#F26B3A] rounded-full"
            style={{ left: `${5 + (i * 4.7) % 90}%`, top: `${10 + (i * 7.3) % 80}%` }}
            animate={{ y: [0, -30, 0], opacity: [0, 1, 0] }}
            transition={{ duration: 3 + (i % 3), repeat: Infinity, delay: (i * 0.3) % 2 }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#F26B3A]/20 to-[#F26B3A]/10 border border-[#F26B3A]/30 text-[#F26B3A] px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm"
            >
              <Sparkles className="w-4 h-4" />
              {t.hero.introducing}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            >
              {t.hero.title1}{' '}
              <span className="bg-gradient-to-r from-[#F26B3A] to-[#ff8c5a] bg-clip-text text-transparent">
                {t.hero.title2}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-300 max-w-2xl mb-8 leading-relaxed"
            >
              {t.hero.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <a
                href="#quickstart"
                className="group bg-gradient-to-r from-[#F26B3A] to-[#d45a2f] text-white px-8 py-4 rounded-lg hover:shadow-[0_0_30px_rgba(242,107,58,0.4)] transition-all inline-flex items-center justify-center gap-2 font-medium"
              >
                {t.hero.getStarted}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://github.com/lksnext-ai-lab/ai-core-tools"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-lg hover:bg-white/20 transition-all inline-flex items-center justify-center gap-2 font-medium"
              >
                {t.hero.viewGithub}
              </a>
            </motion.div>

            {/* Badges row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-3"
            >
              {['FastAPI + React', 'pgvector', 'MCP', 'Docker'].map((badge) => (
                <span key={badge} className="flex items-center gap-1.5 bg-white/5 border border-white/10 text-gray-400 text-xs px-3 py-1.5 rounded-full">
                  <Check className="w-3 h-3 text-[#F26B3A]" />
                  {badge}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right Content — Terminal Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block relative"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="bg-[#0d1117] border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
            >
              {/* Terminal title bar */}
              <div className="flex items-center gap-2 px-4 py-3 bg-[#161b22] border-b border-white/10">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                  <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                </div>
                <div className="flex items-center gap-2 mx-auto pr-8">
                  <Terminal className="w-3.5 h-3.5 text-gray-500" />
                  <span className="text-gray-400 text-xs font-mono">{t.hero.terminalTitle}</span>
                </div>
              </div>

              {/* Terminal body */}
              <div className="p-5 font-mono text-sm space-y-2">
                {TERMINAL_LINES.map((line, i) => (
                  <motion.div
                    key={line.id}
                    initial={{ opacity: 0, x: -4 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.8 + i * 0.15 }}
                    className="flex items-start gap-2"
                  >
                    {line.prompt
                      ? <span className="text-[#F26B3A] select-none flex-shrink-0">$</span>
                      : <span className="w-3 flex-shrink-0" />
                    }
                    <span className={terminalLineClass(line)}>
                      {line.text}
                    </span>
                  </motion.div>
                ))}

                {/* Blinking cursor */}
                <motion.div
                  className="flex items-center gap-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.5 }}
                >
                  <span className="text-[#F26B3A]">$</span>
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="w-2 h-4 bg-gray-400 inline-block"
                  />
                </motion.div>
              </div>
            </motion.div>

            {/* Floating badge — Open Source */}
            <motion.div
              animate={{ y: [0, -5, 0], rotate: [0, 2, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 bg-gradient-to-br from-[#F26B3A] to-[#d45a2f] text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg"
            >
              {t.hero.openSource}
            </motion.div>

            {/* Floating badge — Production Ready */}
            <motion.div
              animate={{ y: [0, 5, 0], rotate: [0, -2, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-4 -left-4 bg-gradient-to-br from-blue-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg"
            >
              {t.hero.productionReady}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
