import SmoothScroll from './Components/animations/SmoothScroll';
import Header from './Components/Header';
import Hero from './Components/Hero';

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
