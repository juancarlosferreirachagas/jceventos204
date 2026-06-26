import { EVENTOS } from "@/lib/site-copy";

export function EventosDiferenciais() {
  const { diferenciais } = EVENTOS;

  return (
    <section id="diferenciais" className="border-y border-jc-gold/10 bg-[#111] py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-bold uppercase tracking-widest text-jc-gold">{diferenciais.title}</p>
        <h2 className="mt-2 font-display text-3xl font-bold text-white sm:text-4xl">{diferenciais.subtitle}</h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {diferenciais.items.map((item, i) => (
            <article
              key={item.title}
              className="rounded-xl border border-jc-gold/15 bg-jc-black p-6"
            >
              <span className="font-display text-3xl font-bold text-jc-gold/40">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-display text-lg font-bold text-jc-gold-light">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
