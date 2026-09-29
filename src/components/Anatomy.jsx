import { motion, useReducedMotion } from "motion/react";
import grandLiving from "../assets/images/luxury_architectural_interior_photography_of_a_grand_luxury_penthouse_living.png";

const EASE = [0.16, 1, 0.3, 1];

const features = [
  {
    number: "01",
    label: "LUZ",
    title: "Horizontes curados",
    description:
      "Ventanales de piso a techo que enmarcan la ciudad y extienden la sensación de amplitud.",
  },
  {
    number: "02",
    label: "CALMA",
    title: "Santuario acústico",
    description:
      "La distribución en altura crea una transición natural entre las áreas sociales y los espacios de retiro.",
  },
  {
    number: "03",
    label: "MATERIA",
    title: "Materialidad honesta",
    description:
      "Madera, piedra y metal aparecen como elementos protagonistas dentro de una composición contenida.",
  },
];

export default function Anatomy() {
  const reduceMotion = useReducedMotion();
  const reveal = (delay = 0) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-60px" },
          transition: { duration: 0.8, ease: EASE, delay },
        };

  return (
    <section aria-labelledby="anatomy-title" className="bg-canvas">
      <div className="mx-auto w-full max-w-[1440px] px-4 py-20 sm:px-5 lg:py-28">
        <motion.div {...reveal()} className="lg:col-span-7">
          <p className="text-xs font-semibold tracking-[0.18em] text-muted">
            FILOSOFÍA ARQUITECTÓNICA
          </p>
          <h2
            id="anatomy-title"
            className="mt-4 text-[2.25rem] leading-[1.05] font-semibold tracking-[-0.025em] text-carbon lg:text-[3.5rem] lg:leading-[1.07] lg:tracking-[-0.03em]"
          >
            La anatomía de vivir
            <br />
            en las alturas
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-10 lg:mt-16 lg:grid-cols-12 lg:gap-6">
          <motion.figure
            {...reveal(0.08)}
            className="lg:col-span-7"
          >
            <div className="relative overflow-hidden rounded-[20px]">
              <img
                src={grandLiving}
                alt="Living de doble altura con vigas de madera, chandelier y ventanales con vista nocturna a la ciudad"
                loading="lazy"
                className="aspect-[4/3] w-full object-cover object-center lg:aspect-[16/10]"
              />
              <p className="absolute bottom-4 left-4 rounded-full bg-black/55 px-4 py-1.5 text-xs font-medium tracking-[0.04em] text-white backdrop-blur-md">
                Living de doble altura
              </p>
            </div>
          </motion.figure>

          <motion.div
            {...reveal(0.16)}
            className="lg:col-span-4 lg:col-start-9"
          >
            <ol>
              {features.map((feature, index) => (
                <li
                  key={feature.number}
                  className={
                    index === 0
                      ? "py-6 first:pt-0 lg:first:pt-0"
                      : "border-t border-black/10 py-6"
                  }
                >
                  <p className="text-xs font-semibold tracking-[0.18em] text-muted">
                    {feature.number} / {feature.label}
                  </p>
                  <h3 className="mt-3 text-xl font-semibold tracking-[-0.015em] text-carbon">
                    {feature.title}
                  </h3>
                  <p className="mt-2 max-w-md text-[0.9375rem] leading-6 text-muted">
                    {feature.description}
                  </p>
                </li>
              ))}
            </ol>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
