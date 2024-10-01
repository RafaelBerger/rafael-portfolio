import Navbar from "./components/navbar/Navbar";
import Home from "./sections/home/Home";
import About from "./sections/about/About";
import Technologies from "./sections/technologies/Technologies";
import Portfolio from "./sections/portfolio/Portfolio";
import Certificate from "./sections/certificate/Certificate";
import Footer from "./sections/footer/Footer";

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
      <div id="certificate">
        <Certificate />
      </div>
      <Footer />
    </>
  );
}

export default App;
