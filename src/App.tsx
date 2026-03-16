import SmoothScroll from './components/animations/SmoothScroll';
import Header from './components/Header';
import BackOffice from './components/sections/BackOffice';
import Benefits from './components/sections/Benefits';
import Features from './components/sections/Features';
import Hero from './components/sections/Hero';
import HowItWorks from './components/sections/HowItWorks';

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

        <div className="h-dvh bg-purple-300"></div>
        <div className="h-dvh bg-orange-300"></div>
        <div className="h-dvh bg-green-300"></div>
        <div className="h-dvh bg-red-300"></div>
      </main>
    </SmoothScroll>
  );
}

export default App;
