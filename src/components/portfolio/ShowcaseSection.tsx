import { domains, projects, securitySkills } from "@/data/portfolio";
import { SectionHeader } from "./SectionHeader";

export function ShowcaseSection() {
  const featured = projects[0];
  const rest = projects.slice(1);

  return (
    <section id="domains" className="bg-[#151517] px-4 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Skills & Work Explorer"
          title="Interactive Domain Showcases"
          description="A modular view of specialized domains, project results, and technical skill clusters."
          align="center"
        />

        <div className="mx-auto mb-10 flex max-w-4xl flex-wrap justify-center gap-2 rounded-2xl border border-white/10 bg-black/25 p-2">
          {domains.map((domain, index) => (
            <button
              key={domain}
              className={`rounded-full px-4 py-2 text-xs font-bold transition ${
                index === 0
                  ? "bg-blue-500 text-white shadow-lg shadow-blue-500/25"
                  : "text-zinc-400 hover:bg-white/10 hover:text-white"
              }`}
              type="button"
            >
              {domain}
            </button>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-2xl border border-white/10 bg-zinc-950/45 p-5">
            <h3 className="mb-4 text-sm font-bold text-blue-300">
              Offensive Security Skills
            </h3>
            <div className="space-y-3">
              {securitySkills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3"
                >
                  <span className="text-sm text-zinc-200">{skill.name}</span>
                  <span className="rounded-full bg-white/10 px-2 py-1 text-[10px] font-bold text-zinc-300">
                    {skill.level}
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-5 rounded-xl border border-white/10 bg-white/[0.035] p-4 text-xs leading-5 text-zinc-400">
              Security work spans discovery, validation, exploit safety,
              remediation guidance, and durable prevention controls.
            </p>
          </div>

          <div className="space-y-5">
            <article className="rounded-2xl border border-white/10 bg-zinc-950/55 p-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-300">
                  Featured project
                </span>
                <span className="rounded-full border border-rose-400/30 bg-rose-400/10 px-3 py-1 text-xs font-bold text-rose-200">
                  {featured.status}
                </span>
              </div>
              <h3 className="mt-5 text-2xl font-black text-white">
                {featured.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-zinc-400">
                {featured.description}
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl bg-black/35 p-4">
                  <p className="text-xs text-zinc-500">Scan speed</p>
                  <p className="mt-1 font-bold text-white">{featured.impact}</p>
                </div>
                <div className="rounded-xl bg-black/35 p-4">
                  <p className="text-xs text-zinc-500">False positives</p>
                  <p className="mt-1 font-bold text-white">{featured.metric}</p>
                </div>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {featured.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>

            <div className="grid gap-4 sm:grid-cols-2">
              {rest.map((project) => (
                <article
                  key={project.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.025] p-5"
                >
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-sm font-bold text-white">
                      {project.title}
                    </h3>
                    <span className="text-xs text-zinc-500">
                      {project.status}
                    </span>
                  </div>
                  <p className="mt-3 text-xs leading-6 text-zinc-400">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-white/10 px-2 py-1 text-[10px] text-zinc-300"
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
      </div>
    </section>
  );
}
