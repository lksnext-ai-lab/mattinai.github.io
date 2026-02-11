import { motion } from 'motion/react';
import { useLanguage } from '../i18n/LanguageContext';
import { ArrowRight, Sparkles, Code, Zap } from 'lucide-react';

export function Hero() {
  const { t } = useLanguage();

  return (
    <section id="about" className="relative bg-[#0f1419] py-24 md:py-32 overflow-hidden">
      {/* Animated background gradients */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a2332] via-[#0f1419] to-[#1a2332]"></div>
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#F26B3A]/20 rounded-full blur-[120px]"
        ></motion.div>
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px]"
        ></motion.div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(#F26B3A 1px, transparent 1px), linear-gradient(90deg, #F26B3A 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }}></div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#F26B3A] rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
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
                href="#features"
                className="group bg-gradient-to-r from-[#F26B3A] to-[#d45a2f] text-white px-8 py-4 rounded-lg hover:shadow-[0_0_30px_rgba(242,107,58,0.4)] transition-all inline-flex items-center justify-center gap-2 font-medium"
              >
                {t.hero.exploreFeatures}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://github.com/lksnext-ai-lab/ai-core-tools"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-lg hover:bg-white/20 transition-all inline-flex items-center justify-center gap-2 font-medium"
              >
                {t.hero.viewDocs}
              </a>
            </motion.div>
          </div>

          {/* Right Content - Visual Elements */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block relative"
          >
            <div className="relative">
              {/* Main Card */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-8 shadow-2xl"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#F26B3A] to-[#d45a2f] rounded-lg flex items-center justify-center">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-bold">MattinAI Core</div>
                    <div className="text-gray-400 text-sm">v2.0.0</div>
                  </div>
                </div>
                
                {/* Features badges */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 bg-white/5 rounded-lg p-3">
                    <Zap className="w-5 h-5 text-[#F26B3A]" />
                    <span className="text-white text-sm">RAG & Semantic Search</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/5 rounded-lg p-3">
                    <Zap className="w-5 h-5 text-[#F26B3A]" />
                    <span className="text-white text-sm">Multi-LLM Integration</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/5 rounded-lg p-3">
                    <Zap className="w-5 h-5 text-[#F26B3A]" />
                    <span className="text-white text-sm">AI Agent Automation</span>
                  </div>
                </div>
              </motion.div>

              {/* Floating badge - Open Source */}
              <motion.div
                animate={{ y: [0, -5, 0], rotate: [0, 2, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 bg-gradient-to-br from-[#F26B3A] to-[#d45a2f] text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg"
              >
                {t.hero.openSource}
              </motion.div>

              {/* Floating badge - Production Ready */}
              <motion.div
                animate={{ y: [0, 5, 0], rotate: [0, -2, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-4 -left-4 bg-gradient-to-br from-blue-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg"
              >
                {t.hero.productionReady}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}