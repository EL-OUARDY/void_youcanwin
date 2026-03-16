import SmoothScroll from './components/animations/SmoothScroll';
import Header from './components/Header';
import BackOffice from './components/sections/BackOffice';
import Benefits from './components/sections/Benefits';
import Catalog from './components/sections/Catalog';
import CTA from './components/sections/CTA';
import Features from './components/sections/Features';
import Hero from './components/sections/Hero';
import HowItWorks from './components/sections/HowItWorks';
import PricingTable from './components/sections/PricingTable';
import SocialProof from './components/sections/SocialProof';
import Stats from './components/sections/Stats';

function App() {
  return (
    <SmoothScroll>
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Benefits />
        <BackOffice />
        <Stats />
        <div className="to-muted/30 border-muted border-b bg-linear-to-br from-white from-30%">
          <PricingTable />
          <Catalog />
        </div>
        <SocialProof />
        <CTA />

        <div className="h-dvh"></div>
      </main>
    </SmoothScroll>
  );
}

export default App;
