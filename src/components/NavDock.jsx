import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Propiedades", href: "#propiedades" },
];

export default function NavDock({ variant = "fixed" }) {
  const [open, setOpen] = useState(false);
  const position =
    variant === "absolute"
      ? "absolute inset-x-0 top-4 z-20 flex justify-center"
      : "fixed inset-x-0 top-5 z-50 flex justify-center px-5";

  return (
    <header className={position}>
      <div className="w-[min(calc(100%-2.5rem),82.5rem)]">
        <nav
          aria-label="Navegación principal"
          className="flex items-center justify-between gap-4 rounded-full border border-black/[0.08] bg-white/95 py-2.5 pr-2.5 pl-6 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.25)] backdrop-blur-xl"
        >
          <a
            href="#inicio"
            className="flex items-center gap-2 text-sm font-semibold tracking-[0.08em]"
          >
            <span
              aria-hidden="true"
              className="inline-block h-2 w-2 rounded-full bg-lime"
            />
            PENTCO
          </a>

          <ul className="hidden items-center gap-7 lg:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-carbon transition-colors hover:text-black"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-5 lg:flex">
            <a
              href="#contacto"
              className="hidden text-sm text-muted transition-colors hover:text-carbon xl:block"
            >
              Contacto
            </a>
            <a
              href="#propiedades"
              className="rounded-full bg-lime px-6 py-2.5 text-sm font-semibold text-carbon transition-all hover:scale-105 hover:bg-lime-hover"
            >
              Explorar propiedades
            </a>
          </div>

          <div className="flex items-center lg:hidden">
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-carbon"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>

        {open && (
          <div className="mt-2 rounded-3xl border border-black/[0.08] bg-white/95 p-3 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.25)] backdrop-blur-xl lg:hidden">
            <ul className="flex flex-col">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-2xl px-4 py-3 text-sm font-medium text-carbon hover:bg-black/[0.04]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contacto"
                  onClick={() => setOpen(false)}
                  className="block rounded-2xl px-4 py-3 text-sm text-muted hover:bg-black/[0.04]"
                >
                  Contacto
                </a>
              </li>
              <li className="mt-1 border-t border-black/[0.06] pt-3">
                <a
                  href="#propiedades"
                  onClick={() => setOpen(false)}
                  className="block rounded-full bg-lime px-6 py-3.5 text-center text-sm font-semibold text-carbon transition-colors hover:bg-lime-hover"
                >
                  Explorar
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
