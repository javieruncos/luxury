import { motion, useReducedMotion } from "motion/react";
import { Search } from "lucide-react";
import nightTower from "../assets/images/cinematic_ultra_luxury_architectural_night_photography_of_a_glass_penthouse.png";

const EASE = [0.16, 1, 0.3, 1];

export default function FinalCTA() {
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
    <section aria-labelledby="final-cta-title" className="bg-canvas">
      <div className="mx-auto w-full max-w-[1440px] px-4 pb-20 sm:px-5 lg:pb-28">
        <motion.div
          {...reveal()}
          className="relative overflow-hidden rounded-[24px] bg-carbon px-6 py-16 text-center sm:px-10 lg:py-20"
        >
          <img
            src={nightTower}
            alt=""
            loading="lazy"
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-black/55"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30"
          />
          <div className="relative z-10 mx-auto w-full max-w-2xl">
            <motion.p
              {...reveal(0.08)}
              className="text-[11px] font-semibold tracking-[0.18em] text-lime"
            >
              ASESORÍA CONFIDENCIAL
            </motion.p>
            <motion.h2
              {...reveal(0.12)}
              id="final-cta-title"
              className="mt-4 text-4xl leading-[1.1] font-semibold tracking-[-0.03em] text-white max-sm:text-[1.9rem] lg:text-5xl"
            >
              Tu santuario privado en el cielo te espera
            </motion.h2>
            <motion.p
              {...reveal(0.16)}
              className="mx-auto mt-4 max-w-md text-base leading-7 text-white/60"
            >
              Contanos qué estás buscando y coordinemos una visita
              privada.
            </motion.p>

            <motion.form
              {...reveal(0.2)}
              action="#contacto"
              className="mx-auto mt-8 flex w-full max-w-[500px] items-center gap-2 rounded-full border border-white/15 bg-white/10 p-2 pl-5 backdrop-blur-md transition-colors focus-within:border-white/40 max-sm:flex-col max-sm:items-stretch max-sm:gap-4 max-sm:rounded-[24px] max-sm:p-5"
            >
              <label htmlFor="cta-search" className="sr-only">
                ¿Qué tipo de residencia buscás?
              </label>
              <Search
                size={18}
                className="shrink-0 text-white/50 max-sm:hidden"
                aria-hidden="true"
              />
              <input
                id="cta-search"
                name="busqueda"
                type="text"
                autoComplete="off"
                placeholder="¿Qué tipo de residencia buscás?"
                className="min-w-0 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-white/40 focus-visible:outline-none! max-sm:py-2"
              />
              <button
                type="submit"
                className="shrink-0 rounded-full bg-lime px-6 py-3 text-sm font-semibold text-carbon transition-all hover:scale-105 hover:bg-lime-hover focus-visible:outline-solid! focus-visible:outline-2! focus-visible:outline-offset-2! focus-visible:outline-white! max-sm:w-full"
              >
                Agendar consulta
              </button>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
