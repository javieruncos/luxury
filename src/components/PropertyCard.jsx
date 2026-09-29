import { motion, useReducedMotion } from "motion/react";

const EASE = [0.16, 1, 0.3, 1];

export default function PropertyCard({ property, index, offset }) {
  const reduceMotion = useReducedMotion();
  const animate = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-60px" },
        transition: { duration: 0.8, ease: EASE, delay: index * 0.08 },
      };

  return (
    <motion.article
      {...animate}
      className={offset ? "xl:mt-12" : undefined}
    >
      <div className="group relative overflow-hidden rounded-[20px]">
        <img
          src={property.src}
          alt={property.alt}
          loading="lazy"
          className="aspect-[4/5] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <p className="absolute top-3 left-3 rounded-full bg-white/85 px-3 py-1 text-[11px] font-medium tracking-[0.08em] text-carbon backdrop-blur-md">
          {property.badge}
        </p>
      </div>
      <div className="mt-4 flex items-baseline justify-between gap-3 px-1">
        <h3 className="text-base font-medium tracking-[-0.01em] text-carbon">
          {property.name}
        </h3>
        <p className="shrink-0 text-sm text-muted">{property.meta}</p>
      </div>
    </motion.article>
  );
}
