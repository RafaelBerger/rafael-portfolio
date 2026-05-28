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
        <div className="text-white font-bold">R.</div>

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
            className="md:hidden text-white text-2xl"
            onClick={() => setOpen((s) => !s)}
          >
            {open ? "✕" : "☰"}
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
