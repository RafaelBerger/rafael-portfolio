import "./home.scss";
import Button from "../../components/button/Button";
import Cv from "../../assets/rafaelberger-cv.pdf";

export default function Home() {
  return (
    <>
      <section className="home-container">
        <main>
          <div className="information-container">
            <div className="introduction">
              <p>Olá, meu nome é</p>
              <p className="nome">Rafael Berger</p>
              <p>Sou Desenvolvedor FullStack</p>
            </div>
            <div className="buttons">
              <Button href={Cv} isDownload={true}>
                Baixar CV
              </Button>
              <Button href="https://wa.me/5511999361076">Fale Comigo</Button>
            </div>
          </div>
          <div className="img-container">
            <img
              src="https://github.com/rafaelberger.png"
              alt="Foto do rafael"
            />
          </div>
        </main>
      </section>
    </>
  );
}
