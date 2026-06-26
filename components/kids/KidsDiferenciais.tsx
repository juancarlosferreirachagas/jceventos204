import { KIDS } from "@/lib/site-copy";

export function KidsDiferenciais() {
  const { diferenciais } = KIDS;

  return (
    <section id="diferenciais" className="bg-kids-cyan py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-bold uppercase tracking-widest text-kids-yellow">{diferenciais.title}</p>
        <h2 className="mt-2 font-kids text-3xl font-bold text-white sm:text-4xl">{diferenciais.subtitle}</h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {diferenciais.items.map((item, i) => (
            <article
              key={item.title}
              className="rounded-2xl bg-white p-6 shadow-lg"
            >
              <span className="font-kids text-3xl font-bold text-kids-cyan/40">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-kids text-lg font-bold text-kids-blue-dark">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-kids-blue-dark/70">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
