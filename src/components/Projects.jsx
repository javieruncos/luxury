import { motion, useReducedMotion } from "motion/react";
import villaSolarium from "../assets/images/luxury_architectural_photography_of_villa_solarium_in_geneva._sun_drenched.png";
import belAirCrown from "../assets/images/luxury_architectural_interior_photography_of_the_bel_air_crown_penthouse_living.png";
import nordicaGlasshouse from "../assets/images/modern_minimalist_architectural_photography_of_the_nordica_glasshouse_in.png";
import cannesRiviera from "../assets/images/ultra_luxury_coastal_penthouse_terrace_in_cannes_french_riviera._sleek_infinity.png";
import PropertyCard from "./PropertyCard";

const EASE = [0.16, 1, 0.3, 1];

const properties = [
  {
    name: "Villa Solarium",
    badge: "Ginebra",
    meta: "Rooftop",
    src: villaSolarium,
    alt: "Rooftop con pileta de Villa Solarium en Ginebra con vista al lago",
  },
  {
    name: "Bel-Air Crown",
    badge: "Bel-Air",
    meta: "Interior",
    src: belAirCrown,
    alt: "Living de doble altura de Bel-Air Crown con ventanales",
  },
  {
    name: "Nordica",
    badge: "Minimalista",
    meta: "Exterior",
    src: nordicaGlasshouse,
    alt: "Pabellón de vidrio Nordica iluminado al atardecer",
  },
  {
    name: "Cannes Riviera",
    badge: "Cannes",
    meta: "Terraza",
    src: cannesRiviera,
    alt: "Terraza costera con pileta infinita en Cannes al atardecer",
  },
];

export default function Projects() {
  const reduceMotion = useReducedMotion();
  const animate = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-60px" },
        transition: { duration: 0.8, ease: EASE },
      };

  return (
    <section
      id="propiedades"
      aria-label="Proyectos destacados"
      className="bg-white"
    >
      <div className="mx-auto w-full max-w-[1440px] px-4 py-20 sm:px-5 lg:py-28">
        <motion.div
          {...animate}
          className="grid gap-8 lg:grid-cols-12 lg:gap-6"
        >
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold tracking-[0.18em] text-muted">
              PORTAFOLIO CURADO
            </p>
            <h2 className="mt-4 text-[2.25rem] leading-[1.05] font-semibold tracking-[-0.025em] text-carbon lg:text-[3.5rem] lg:leading-[1.07] lg:tracking-[-0.03em]">
              Descubrí nuestros últimos
              <br />
              proyectos en curso
            </h2>
          </div>
        </motion.div>

        <div className="mt-12 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:mt-16 xl:grid-cols-4">
          {properties.map((property, index) => (
            <PropertyCard
              key={property.name}
              property={property}
              index={index}
              offset={index % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
