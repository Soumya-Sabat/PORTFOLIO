import { education } from "@/data/portfolio";
import { SectionHeader } from "./SectionHeader";

export function EducationSection() {
  return (
    <section id="education" className="bg-[#18181a] px-4 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Education"
          title="Academic Journey"
          description="Continuous theoretical and applied learning across premier institutions."
          align="center"
        />

        <div className="relative grid gap-5 pt-8 md:grid-cols-3">
          <div className="absolute left-0 right-0 top-2 hidden h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent md:block" />
          {education.map((item) => (
            <article
              key={item.title}
              className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center"
            >
              <span className="absolute left-1/2 top-0 hidden size-5 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-[#18181a] shadow-[0_0_0_6px_rgba(59,130,246,0.12)] md:block" />
              <p className="text-xs font-bold text-zinc-500">{item.period}</p>
              <h3 className="mt-4 text-lg font-bold text-white">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-zinc-400">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
