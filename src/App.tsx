import SmoothScroll from './components/animations/SmoothScroll';
import Header from './components/Header';
import Hero from './components/Hero';

function App() {
  return (
    <SmoothScroll>
      <Header />
      <main>
        <Hero />

        <div className="h-dvh bg-purple-300"></div>
        <div className="h-dvh bg-orange-300"></div>
        <div className="h-dvh bg-green-300"></div>
        <div className="h-dvh bg-red-300"></div>
      </main>
    </SmoothScroll>
  );
}

export default App;
