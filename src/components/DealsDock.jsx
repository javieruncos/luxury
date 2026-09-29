import villaSolarium from "../assets/images/luxury_architectural_photography_of_villa_solarium_in_geneva._sun_drenched.png";
import belAirCrown from "../assets/images/luxury_architectural_interior_photography_of_the_bel_air_crown_penthouse_living.png";
import nordicaGlasshouse from "../assets/images/modern_minimalist_architectural_photography_of_the_nordica_glasshouse_in.png";

const deals = [
  { name: "Villa Solarium", src: villaSolarium, alt: "Terraza con pileta de Villa Solarium en Ginebra" },
  { name: "Bel-Air Crown", src: belAirCrown, alt: "Living de doble altura de Bel-Air Crown" },
  { name: "Nordica", src: nordicaGlasshouse, alt: "Casa de vidrio Nordica iluminada al atardecer" },
];

export default function DealsDock({ variant = "overlay" }) {
  if (variant === "below") {
    return (
      <aside
        aria-label="Nuestras 3 propiedades destacadas"
        className="rounded-frame border border-black/[0.08] bg-coal p-4 lg:hidden"
      >
        <p className="px-1 text-[0.6875rem] font-semibold tracking-[0.14em] text-white/70">
          NUESTRAS 3 PROPIEDADES DESTACADAS
        </p>
        <ul className="mt-3 flex gap-3 pb-1 max-md:snap-x max-md:snap-mandatory max-md:overflow-x-auto md:grid md:grid-cols-3 md:pb-0">
          {deals.map((deal) => (
            <li key={deal.name} className="w-44 shrink-0 max-md:snap-start md:w-auto">
              <div className="h-24 overflow-hidden rounded-xl">
                <img
                  src={deal.src}
                  alt={deal.alt}
                  loading="lazy"
                  className="block h-full w-full object-cover"
                />
              </div>
              <p className="mt-2 px-0.5 text-xs font-medium text-white">
                {deal.name}
              </p>
            </li>
          ))}
        </ul>
      </aside>
    );
  }

  return (
    <aside
      aria-label="Nuestras 3 propiedades destacadas"
      className="absolute right-5 bottom-5 z-10 hidden w-[26rem] rounded-2xl border border-white/15 bg-black/55 p-4 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.25)] backdrop-blur-xl lg:block [@media(max-height:800px)]:w-[23rem]"
    >
      <p className="px-1 text-[0.6875rem] font-semibold tracking-[0.14em] text-white/70">
        NUESTRAS 3 PROPIEDADES DESTACADAS
      </p>
      <ul className="mt-3 grid grid-cols-3 gap-3">
        {deals.map((deal) => (
            <li key={deal.name}>
              <div className="h-20 overflow-hidden rounded-xl [@media(max-height:800px)]:h-16">
                <img
                  src={deal.src}
                  alt={deal.alt}
                  loading="lazy"
                  className="block h-full w-full object-cover"
                />
              </div>
            <p className="mt-2 px-0.5 text-xs font-medium text-white">
              {deal.name}
            </p>
          </li>
        ))}
      </ul>
    </aside>
  );
}
