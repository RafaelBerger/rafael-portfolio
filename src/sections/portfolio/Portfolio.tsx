import Button from "../../components/button/Button";
import "./portfolio.scss";
import projectImage from "../../assets/a.png";

export default function Portfolio() {
  return (
    <>
      <section className="portfolio-container">
        <div className="all-content-container">
          <h1>Portfolio</h1>

          <main>
            <div className="image-container">
              <img src={projectImage} alt="Imagem de projeto" />
            </div>
            <div>
              <div className="information">
                <h2>Nome projeto</h2>
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dolorem voluptatem quasi eaque, quia at numquam repellat, esse
                  quo placeat deleniti nam praesentium blanditiis eos natus
                  laudantium. Nihil, illum. Perferendis, eaque.
                </p>
              </div>
              <div className="buttons">
                <Button>Abrir projeto</Button>
                <Button>Github</Button>
              </div>
            </div>
          </main>

          <main>
            <div className="image-container">
              <img src={projectImage} alt="Imagem de projeto" />
            </div>
            <div>
              <div className="information">
                <h2>Nome projeto</h2>
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dolorem voluptatem quasi eaque, quia at numquam repellat, esse
                  quo placeat deleniti nam praesentium blanditiis eos natus
                  laudantium. Nihil, illum. Perferendis, eaque.
                </p>
              </div>
              <div className="buttons">
                <Button>Abrir projeto</Button>
                <Button>Github</Button>
              </div>
            </div>
          </main>
          <main>
            <div className="image-container">
              <img src={projectImage} alt="Imagem de projeto" />
            </div>
            <div>
              <div className="information">
                <h2>Nome projeto</h2>
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dolorem voluptatem quasi eaque, quia at numquam repellat, esse
                  quo placeat deleniti nam praesentium blanditiis eos natus
                  laudantium. Nihil, illum. Perferendis, eaque.
                </p>
              </div>
              <div className="buttons">
                <Button>Abrir projeto</Button>
                <Button>Github</Button>
              </div>
            </div>
          </main>
          <main>
            <div className="image-container">
              <img src={projectImage} alt="Imagem de projeto" />
            </div>
            <div>
              <div className="information">
                <h2>Nome projeto</h2>
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dolorem voluptatem quasi eaque, quia at numquam repellat, esse
                  quo placeat deleniti nam praesentium blanditiis eos natus
                  laudantium. Nihil, illum. Perferendis, eaque.
                </p>
              </div>
              <div className="buttons">
                <Button>Abrir projeto</Button>
                <Button>Github</Button>
              </div>
            </div>
          </main>
        </div>
      </section>
    </>
  );
}
