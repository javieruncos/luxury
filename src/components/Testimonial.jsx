import { motion, useReducedMotion } from "motion/react";
import { Quote } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1];

export default function Testimonial() {
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
    <section aria-label="Manifiesto Pentco" className="bg-canvas">
      <div className="mx-auto w-full max-w-5xl px-6 py-24 text-center max-sm:max-w-xl lg:py-32">
        <motion.div {...reveal()}>
          <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-lime max-sm:h-10 max-sm:w-10">
            <Quote size={20} className="text-carbon" aria-hidden="true" />
          </span>
        </motion.div>

        <motion.p
          {...reveal(0.08)}
          className="mt-10 text-3xl leading-[1.2] font-medium tracking-[-0.02em] text-carbon max-sm:text-2xl max-sm:leading-[1.25] lg:text-4xl xl:text-[2.75rem]"
        >
          No vendemos metros cuadrados. Diseñamos y curamos espacios
          extraordinarios para quienes entienden que vivir en las alturas
          es mucho más que una dirección.
        </motion.p>

        <motion.div {...reveal(0.16)} className="mt-8">
          <p className="text-sm font-semibold tracking-[0.14em] text-carbon">
            PENTCO
          </p>
          <p className="mt-2 text-[11px] font-medium tracking-[0.18em] text-muted">
            CURADURÍA RESIDENCIAL
          </p>
        </motion.div>
      </div>
    </section>
  );
}
