import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#home", label: "Inicio" },
    { href: "#about", label: "Sobre mim" },
    { href: "#tecnologies", label: "Tecnologias" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#certificate", label: "Certificados" },
  ];

  return (
    <header className="w-full bg-dark-purple-900 fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <a
          href="#home"
          className="text-white font-bold no-underline"
          onClick={() => setOpen(false)}
        >
          Rafael
        </a>

        <nav>
          <ul className="hidden md:flex gap-10 lg:gap-12 list-none m-0 p-0">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-white no-underline text-lg lg:text-xl font-medium hover:text-cyan-accent transition-colors duration-300"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            aria-label="Abrir menu"
            aria-expanded={open}
            className="md:hidden p-2 bg-transparent border-0 focus:outline-none focus:ring-0 active:outline-none overflow-visible"
            onClick={() => setOpen((s) => !s)}
          >
            <span className="relative block w-9 h-9 overflow-visible">
              <span
                className={`block absolute left-1/2 top-1/2 w-9 h-0.5 bg-white transform -translate-x-1/2 transition duration-300 ease-in-out origin-center ${open ? "rotate-45" : "-translate-y-3"}`}
              />
              <span
                className={`block absolute left-1/2 top-1/2 w-9 h-0.5 bg-white transform -translate-x-1/2 transition duration-300 ease-in-out origin-center ${open ? "opacity-0" : "translate-y-0"}`}
              />
              <span
                className={`block absolute left-1/2 top-1/2 w-9 h-0.5 bg-white transform -translate-x-1/2 transition duration-300 ease-in-out origin-center ${open ? "-rotate-45" : "translate-y-3"}`}
              />
            </span>
          </button>
        </nav>
      </div>

      {open && (
        <div className="md:hidden w-full bg-dark-purple-900 border-t border-dark-purple-700">
          <ul className="flex flex-col items-center gap-4 py-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-white no-underline text-lg font-medium hover:text-cyan-accent transition-colors duration-300"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
