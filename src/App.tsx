import Navbar from "./components/navbar/Navbar";
import Home from "./sections/Home";
import About from "./sections/About";
import Technologies from "./sections/Technologies";
import Portfolio from "./sections/Portfolio";
import Certificate from "./sections/Certificate";
import Footer from "./sections/Footer";

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
