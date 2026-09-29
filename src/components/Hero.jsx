import { motion, useReducedMotion } from "motion/react";
import heroImage from "../assets/images/ultra_luxury_architectural_photography_of_a_modern_high_rise_penthouse_at_dusk..png";
import Metric from "./Metric";
import DealsDock from "./DealsDock";

const EASE = [0.16, 1, 0.3, 1];

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const animate = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-80px" },
        transition: { duration: 0.9, ease: EASE },
      };

  return (
    <section id="inicio" aria-label="Penthouses destacados" className="px-4 pt-24 sm:px-5">
      <motion.div
        {...animate}
        className="relative mx-auto min-h-[88svh] w-full max-w-[1440px] overflow-hidden rounded-hero"
      >
        <img
          src={heroImage}
          alt="Terraza de penthouse al atardecer con pileta infinita y skyline iluminado"
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover object-[68%_center]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-black/35"
        />
        <div
          aria-hidden="true"
          className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-black/45 via-black/10 to-transparent md:w-3/5"
        />

        <div className="relative flex min-h-[88svh] flex-col justify-end p-6 sm:p-10 lg:p-14">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.18em] text-white/70">
              ARQUITECTURA CURADA
            </p>
            <h1 className="mt-4 text-[2.75rem] leading-[1.02] font-semibold tracking-[-0.03em] text-white lg:text-[5rem] lg:tracking-[-0.035em]">
              Descubrí los
              <br />
              penthouses más
              <br />
              icónicos
            </h1>
            <p className="mt-5 max-w-md text-base leading-7 font-normal text-white/80 lg:text-lg">
              Una selección de residencias extraordinarias donde la
              arquitectura, las vistas y el diseño encuentran su máxima
              expresión.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-4">
              <a
                href="#propiedades"
                className="rounded-full bg-lime px-8 py-3.5 text-sm font-semibold text-carbon transition-all hover:scale-105 hover:bg-lime-hover"
              >
                Ver penthouses
              </a>
              <a
                href="#nosotros"
                className="rounded-full border border-white/30 bg-white/15 px-7 py-3 text-sm font-medium text-white backdrop-blur-md transition-colors hover:bg-white/25"
              >
                Conocer Pentco
              </a>
            </div>
          </div>

          <div className="mt-10 flex items-end justify-between gap-6 pb-1 md:pb-2">
            <Metric />
            <div className="hidden w-105 shrink-0 md:block" aria-hidden="true" />
          </div>
        </div>

        <DealsDock variant="overlay" />
      </motion.div>

      <div className="mx-auto mt-4 w-full max-w-[1440px]">
        <DealsDock variant="below" />
      </div>
    </section>
  );
}
