import SmoothScroll from './Components/animations/SmoothScroll';
import Header from './Components/Header';

function App() {
  return (
    <>
      <Header />
      <SmoothScroll>
        <main>
          <div className="h-dvh"></div>
          <div className="h-dvh bg-purple-300"></div>
          <div className="h-dvh bg-orange-300"></div>
          <div className="h-dvh bg-green-300"></div>
          <div className="h-dvh bg-red-300"></div>
        </main>

        {/* <Footer /> */}
      </SmoothScroll>
    </>
  );
}

export default App;
