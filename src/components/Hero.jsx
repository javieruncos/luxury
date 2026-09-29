import { motion, useReducedMotion } from "motion/react";
import heroImage from "../assets/images/ultra_luxury_architectural_photography_of_a_modern_high_rise_penthouse_at_dusk..png";
import NavDock from "./NavDock";
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
    <section
      id="inicio"
      aria-label="Penthouses destacados"
      className="min-h-svh px-4 py-4 sm:px-5 lg:h-svh lg:min-h-[640px]"
    >
      <motion.div
        {...animate}
        className="relative mx-auto h-[86svh] min-h-[560px] w-full max-w-[1440px] overflow-hidden rounded-hero lg:h-full lg:min-h-0 [@media(max-height:500px)]:min-h-[360px]"
      >
        <img
          src={heroImage}
          alt="Terraza de penthouse al atardecer con pileta infinita y skyline iluminado"
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover object-[62%_center] max-lg:object-[55%_center] max-lg:[@media(max-height:500px)]:object-[40%_center]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-black/35"
        />
        <div
          aria-hidden="true"
          className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-black/45 via-black/10 to-transparent md:w-3/5"
        />

        <NavDock variant="absolute" />

        <div className="absolute inset-x-0 top-[104px] bottom-0 z-10 flex min-h-0 flex-col justify-end p-6 pb-5 sm:p-8 sm:pb-6 lg:px-12 lg:pb-7">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.18em] text-white/70">
              ARQUITECTURA CURADA
            </p>
            <h1 className="mt-3 text-[clamp(2.75rem,6.5vw,4.75rem)] leading-[1.02] font-semibold tracking-[-0.03em] text-white max-[400px]:text-[2.1rem] max-sm:leading-[1.05] min-[401px]:max-sm:text-[2.55rem] min-[401px]:[@media(max-height:800px)]:mt-2 min-[401px]:[@media(max-height:800px)]:text-[clamp(2.375rem,5vw,3.5rem)] min-[640px]:[@media(min-height:850px)]:text-[5.25rem] lg:tracking-[-0.035em]">
              Descubrí los
              <br />
              penthouses más
              <br />
              icónicos
            </h1>
            <p className="mt-4 max-w-md text-[1.0625rem] leading-7 font-normal text-white/80 lg:text-[1.1875rem] [@media(max-height:800px)]:mt-3 [@media(max-height:800px)]:text-[0.9375rem] [@media(max-height:800px)]:leading-6 [@media(max-height:500px)]:hidden">
              Una selección de residencias extraordinarias donde la
              arquitectura, las vistas y el diseño encuentran su máxima
              expresión.
            </p>
            <div className="mt-5 [@media(max-height:800px)]:mt-4">
              <a
                href="#propiedades"
                className="inline-block rounded-full bg-lime px-8 py-3.5 text-sm font-semibold text-carbon transition-all hover:scale-105 hover:bg-lime-hover [@media(max-height:800px)]:py-2.5"
              >
                Ver penthouses
              </a>
            </div>
          </div>

          <div className="mt-6 [@media(max-height:500px)]:hidden [@media(max-height:800px)]:mt-4 [@media(min-height:801px)]:mt-6">
            <Metric />
          </div>
        </div>

        <DealsDock variant="overlay" />
      </motion.div>

      <div className="mx-auto mt-4 w-full max-w-[1440px] lg:hidden">
        <DealsDock variant="below" />
      </div>
    </section>
  );
}
