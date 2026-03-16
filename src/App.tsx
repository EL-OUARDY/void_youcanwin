import SmoothScroll from './components/animations/SmoothScroll';
import Header from './components/Header';
import BackOffice from './components/sections/BackOffice';
import Benefits from './components/sections/Benefits';
import Features from './components/sections/Features';
import Hero from './components/sections/Hero';
import HowItWorks from './components/sections/HowItWorks';
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

        <div className="h-dvh"></div>
      </main>
    </SmoothScroll>
  );
}

export default App;
