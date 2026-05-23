import { hackathons } from "@/data/portfolio";
import { SectionHeader } from "./SectionHeader";

export function HackathonsSection() {
  return (
    <section id="hackathons" className="bg-[#202022] px-4 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeader
            eyebrow="Competitions"
            title="Hackathon Track Record"
            description="Competitive builds across intense 24 to 48 hour constraints, with practical outcomes and validated demos."
          />
          <div className="grid gap-5">
            {hackathons.map((hackathon) => (
              <article
                key={hackathon.title}
                className="rounded-2xl border border-white/10 bg-zinc-950/35 p-6"
              >
                <div className="flex flex-wrap justify-between gap-3">
                  <p className="text-xs font-bold text-blue-300">
                    {hackathon.category}
                  </p>
                  <p className="text-xs text-zinc-500">{hackathon.date}</p>
                </div>
                <h3 className="mt-3 text-xl font-black text-white">
                  {hackathon.title}
                </h3>
                <p className="mt-2 text-sm font-bold text-emerald-300">
                  {hackathon.result}
                </p>
                <p className="mt-3 text-sm leading-7 text-zinc-400">
                  {hackathon.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {hackathon.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
