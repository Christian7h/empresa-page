import { Navigation } from './components/molecules/Navigation';
import { ScrollToTop } from './components/molecules/ScrollToTop';
import { ScrollProgress } from './components/molecules/ScrollProgress';
import { WhatsAppButton } from './components/molecules/WhatsAppButton';
// import { NewsletterBanner } from './components/molecules/NewsletterBanner';
import { Hero } from './components/organisms/Hero';
import { Services } from './components/organisms/Services';
import { Pricing } from './components/organisms/Pricing';
import { Portfolio } from './components/organisms/Portfolio';
import { Blog } from './components/organisms/Blog';
import { Newsletter } from './components/organisms/Newsletter';
import { About } from './components/organisms/About';
import { Contact } from './components/organisms/Contact';
import { Footer } from './components/organisms/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Barra de progreso de scroll */}
      <ScrollProgress />
      
      {/* <NewsletterBanner /> */}
      <Navigation /> 
      <Hero />
      <Services />
      <Pricing />
      <Portfolio />
      <Blog />
      <Newsletter />
      <About />
      <Contact />
      <Footer />
      
      {/* Botones flotantes */}
      <ScrollToTop />
      <WhatsAppButton />
    </div>
  );
}

export default App;