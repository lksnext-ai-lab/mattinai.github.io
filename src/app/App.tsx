import { LanguageProvider } from './i18n/LanguageContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { QuickStart } from './components/QuickStart';
import { UseCases } from './components/UseCases';
import { Architecture } from './components/Architecture';
import { Licensing } from './components/Licensing';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        <main>
          <Hero />
          <Features />
          <QuickStart />
          <UseCases />
          <Architecture />
          <Licensing />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
