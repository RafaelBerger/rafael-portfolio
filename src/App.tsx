import { useEffect, useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./sections/Home";
import About from "./sections/About";
import Technologies from "./sections/Technologies";
import Portfolio from "./sections/Portfolio";
import Certificate from "./sections/Certificate";
import Footer from "./sections/Footer";
import { fallbackContent } from "./data/fallbackContent";
import { getPortfolioContent } from "./lib/hygraph";

function App() {
  const [content, setContent] = useState(fallbackContent);
  const [isLoadingCmsContent, setIsLoadingCmsContent] = useState(true);

  useEffect(() => {
    let isMounted = true;

    getPortfolioContent()
      .then((cmsContent) => {
        if (isMounted) {
          setContent(cmsContent);
        }
      })
      .finally(() => {
        if (isMounted) {
          setIsLoadingCmsContent(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <>
      <Navbar />
      <span className="sr-only" aria-live="polite">
        {isLoadingCmsContent
          ? "Carregando conteudo do portfolio"
          : "Conteudo do portfolio carregado"}
      </span>
      <div id="home">
        <Home profile={content.profile} />
      </div>
      <div id="about">
        <About profile={content.profile} />
      </div>
      <div id="tecnologies">
        <Technologies />
      </div>
      <div id="portfolio">
        <Portfolio projects={content.projects} />
      </div>
      <div id="certificate">
        <Certificate certificates={content.certificates} />
      </div>
      <Footer />
    </>
  );
}

export default App;
