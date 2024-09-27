import "./navbar.scss";

export default function Navbar() {
  return (
    <>
      <div className="navbar-container">
        <ul>
          <li>
            <a href="#home">Inicio</a>
          </li>
          <li>
            <a href="#about">Sobre mim</a>
          </li>
          <li>
            <a href="#tecnologies">Tecnologias</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#certificate">Certificados</a>
          </li>
        </ul>
      </div>
    </>
  );
}
