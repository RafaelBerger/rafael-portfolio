export default function Navbar() {
  return (
    <>
      <div className="w-full bg-dark-purple-900 fixed top-0 z-50 hidden md:flex justify-center items-center py-6">
        <ul className="flex gap-10 lg:gap-12 list-none m-0 p-0">
          <li>
            <a
              href="#home"
              className="text-white no-underline text-lg lg:text-xl font-medium hover:text-cyan-accent active:text-cyan-accent focus-visible:text-cyan-accent transition-colors duration-300"
            >
              Inicio
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="text-white no-underline text-lg lg:text-xl font-medium hover:text-cyan-accent active:text-cyan-accent focus-visible:text-cyan-accent transition-colors duration-300"
            >
              Sobre mim
            </a>
          </li>
          <li>
            <a
              href="#tecnologies"
              className="text-white no-underline text-lg lg:text-xl font-medium hover:text-cyan-accent active:text-cyan-accent focus-visible:text-cyan-accent transition-colors duration-300"
            >
              Tecnologias
            </a>
          </li>
          <li>
            <a
              href="#portfolio"
              className="text-white no-underline text-lg lg:text-xl font-medium hover:text-cyan-accent active:text-cyan-accent focus-visible:text-cyan-accent transition-colors duration-300"
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              href="#certificate"
              className="text-white no-underline text-lg lg:text-xl font-medium hover:text-cyan-accent active:text-cyan-accent focus-visible:text-cyan-accent transition-colors duration-300"
            >
              Certificados
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
