import { motion, useReducedMotion } from "motion/react";
import manhattanView from "../assets/images/cinematic_ultra_luxury_penthouse_interior_overlooking_manhattan_central_park.png";
import skyPoolSpa from "../assets/images/ultra_luxury_indoor_heated_private_sky_pool_and_spa_wellness_suite_in_a.png";

const EASE = [0.16, 1, 0.3, 1];

const descriptors = [
  { number: "01", label: "VISTA", value: "Central Park" },
  { number: "02", label: "NIVEL", value: "Doble altura" },
  { number: "03", label: "AMBIENTE", value: "Chimenea" },
  { number: "04", label: "PILETA", value: "Climatizada" },
];

export default function CrownJewel() {
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
    <section aria-labelledby="crown-jewel-title" className="bg-canvas">
      <div className="mx-auto w-full max-w-[1440px] px-4 pb-20 sm:px-5 lg:pb-28">
        <motion.div
          {...reveal()}
          className="rounded-[24px] bg-carbon px-6 py-12 sm:px-10 sm:py-14 lg:px-14 lg:py-16"
        >
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-6">
            <div className="lg:col-span-8">
              <p className="text-xs font-semibold tracking-[0.18em] text-lime">
                PIEZA EXCEPCIONAL
              </p>
              <h2
                id="crown-jewel-title"
                className="mt-5 text-[2.25rem] leading-[1.05] font-semibold tracking-[-0.025em] text-white lg:text-[3.5rem] lg:leading-[1.07] lg:tracking-[-0.03em]"
              >
                La joya de la corona
              </h2>
              <p className="mt-3 text-2xl leading-snug font-normal text-white/60 lg:text-[2rem]">
                Penthouse frente a Central Park, Manhattan
              </p>
            </div>
            <div className="max-w-md lg:col-span-4 lg:self-center lg:text-right">
              <p className="text-3xl font-semibold tracking-[-0.02em] text-white">
                $18,500,000
              </p>
              <a
                href="#contacto"
                className="mt-4 inline-block rounded-full bg-lime px-8 py-3 text-sm font-semibold text-carbon transition-all hover:scale-105 hover:bg-lime-hover"
              >
                Consultar
              </a>
            </div>
          </div>

          <div className="mt-10 grid gap-10 lg:mt-12 lg:grid-cols-12 lg:gap-6">
            <motion.figure
              {...reveal(0.08)}
              className="lg:col-span-8 lg:h-full"
            >
              <div className="relative overflow-hidden rounded-[12px] lg:h-full">
                <img
                  src={manhattanView}
                  alt="Living de doble altura con ventanales, chimenea y vista nocturna al skyline de Manhattan"
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover object-center lg:aspect-auto lg:h-full"
                />
                <p className="absolute bottom-3 left-3 rounded-full bg-black/55 px-4 py-1.5 text-xs font-medium tracking-[0.04em] text-white backdrop-blur-md">
                  Living de doble altura con vista nocturna al skyline
                </p>
              </div>
            </motion.figure>

            <motion.div
              {...reveal(0.16)}
              className="lg:col-span-4"
            >
              <figure>
                <div className="relative overflow-hidden rounded-[12px]">
                  <img
                    src={skyPoolSpa}
                    alt="Sky pool climatizada y spa interior con vista nocturna a la ciudad"
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover object-center"
                  />
                  <p className="absolute bottom-3 left-3 rounded-full bg-black/55 px-4 py-1.5 text-xs font-medium tracking-[0.04em] text-white backdrop-blur-md">
                    Sky pool &amp; spa
                  </p>
                </div>
              </figure>

              <ol className="mt-8 grid grid-cols-2 max-sm:grid-cols-1">
                {descriptors.map((descriptor, index) => (
                  <li
                    key={descriptor.number}
                    className={
                      index === 0
                        ? "py-4 pt-0 sm:pr-6"
                        : index === 1
                          ? "border-t border-white/[0.07] py-4 sm:border-t-0 sm:border-l sm:pl-6 sm:pt-0"
                          : index === 2
                            ? "border-t border-white/[0.07] py-4 sm:pr-6"
                            : "border-t border-white/[0.07] py-4 sm:border-l sm:pl-6"
                    }
                  >
                    <p className="text-xs font-semibold tracking-[0.18em] text-white/50">
                      {descriptor.number} / {descriptor.label}
                    </p>
                    <p className="mt-2 text-2xl font-medium tracking-[-0.01em] text-white">
                      {descriptor.value}
                    </p>
                  </li>
                ))}
              </ol>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
