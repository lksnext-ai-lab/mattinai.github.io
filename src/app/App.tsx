import { LanguageProvider } from './i18n/LanguageContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Architecture } from './components/Architecture';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        <main>
          <Hero />
          <Features />
          <Architecture />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}