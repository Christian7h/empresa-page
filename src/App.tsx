import { Navigation } from './components/molecules/Navigation';
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
    </div>
  );
}

export default App;