import Home from "./sections/home/Home";
import Navbar from "./components/navbar/Navbar";
import "./sections/home/home.scss";
import About from "./sections/about/About";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
    </>
  );
}

export default App;
