import Navbar from "./components/navbar/Navbar";
import Home from "./sections/home/Home";
import About from "./sections/about/About";
import Technologies from "./sections/technologies/Technologies";
import Portfolio from "./sections/portfolio/Portfolio";

function App() {
  return (
    <>
      <Navbar />
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="tecnologies">
        <Technologies />
      </div>
      <div id="portfolio">
        <Portfolio />
      </div>
    </>
  );
}

export default App;
