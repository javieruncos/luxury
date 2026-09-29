const navigation = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Propiedades", href: "#propiedades" },
  { label: "Noticias", href: "#noticias" },
];

const properties = [
  { label: "Villa Solarium", href: "#propiedades" },
  { label: "Bel-Air Crown", href: "#propiedades" },
  { label: "Nordica Glasshouse", href: "#propiedades" },
  { label: "Cannes Riviera", href: "#propiedades" },
];

const focusRing =
  "focus-visible:outline-solid! focus-visible:outline-2! focus-visible:outline-offset-4! focus-visible:outline-white!";

export default function Footer() {
  return (
    <footer id="contacto" aria-label="Pie de página" className="bg-canvas">
      <div className="mx-auto w-full max-w-[1440px] px-4 pb-4 sm:px-5">
        <div className="rounded-[24px] bg-carbon px-6 py-12 sm:px-10 lg:px-14 lg:py-16">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-6">
            <div className="lg:col-span-4">
              <a
                href="#inicio"
                className={`inline-flex items-center gap-2 text-[15px] font-semibold tracking-[0.08em] text-white ${focusRing} rounded-sm`}
              >
                <span
                  aria-hidden="true"
                  className="inline-block h-2 w-2 rounded-full bg-lime"
                />
                PENTCO
              </a>
              <p className="mt-4 max-w-xs text-sm leading-6 text-white/60">
                Curaduría residencial de piezas excepcionales.
              </p>
              <a
                href="#propiedades"
                className={`mt-6 inline-block rounded-full bg-lime px-6 py-2.5 text-sm font-semibold text-carbon transition-all hover:scale-105 hover:bg-lime-hover ${focusRing}`}
              >
                Explorar propiedades
              </a>
            </div>

            <nav
              aria-label="Navegación del pie de página"
              className="grid grid-cols-2 gap-8 sm:gap-6 lg:col-span-7 lg:col-start-6"
            >
              <div>
                <p className="text-[11px] font-semibold tracking-[0.18em] text-white/40">
                  NAVEGACIÓN
                </p>
                <ul className="mt-4 space-y-3">
                  {navigation.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className={`text-sm text-white/70 transition-colors hover:text-white ${focusRing} rounded-sm`}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-[11px] font-semibold tracking-[0.18em] text-white/40">
                  PROPIEDADES
                </p>
                <ul className="mt-4 space-y-3">
                  {properties.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className={`text-sm text-white/70 transition-colors hover:text-white ${focusRing} rounded-sm`}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>
          </div>

          <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-white/40">
              © 2026 Pentco. Todos los derechos reservados.
            </p>
            <p className="text-xs text-white/40">
              Privacidad · Términos
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
