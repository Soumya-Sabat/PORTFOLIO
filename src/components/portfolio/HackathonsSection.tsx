import { hackathons } from "@/data/portfolio";
import { SectionHeader } from "./SectionHeader";

export function HackathonsSection() {
  return (
    <section id="hackathons" className="bg-[#081f17] px-4 py-24">
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
                className="rounded-2xl border border-[#d6aa45]/20 bg-[#03140f]/45 p-6"
              >
                <div className="flex flex-wrap justify-between gap-3">
                  <p className="text-xs font-bold text-[#f0d991]">
                    {hackathon.category}
                  </p>
                  <p className="text-xs font-medium text-[#9f9376]">{hackathon.date}</p>
                </div>
                <h3 className="mt-3 text-2xl font-bold text-[#fff7df]">
                  {hackathon.title}
                </h3>
                <p className="mt-2 text-sm font-bold text-[#37b487]">
                  {hackathon.result}
                </p>
                <p className="mt-3 text-sm font-medium leading-7 text-[#cfc5aa]">
                  {hackathon.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {hackathon.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[#d6aa45]/20 px-3 py-1 text-xs font-medium text-[#d9cfb2]"
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
