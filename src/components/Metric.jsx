export default function Metric() {
  return (
    <div aria-label="Valoración visual de referencia: 4.9 sobre 5">
      <p className="flex items-baseline gap-1">
        <span className="text-4xl font-medium tracking-[-0.04em] text-white [@media(max-height:800px)]:text-3xl [@media(min-height:851px)]:text-5xl">
          4.9
        </span>
        <span className="text-lg text-white/60">/5.0</span>
      </p>
      <p className="mt-2 max-w-55 text-xs leading-5 text-white/70">
        Composición visual de referencia
      </p>
    </div>
  );
}
