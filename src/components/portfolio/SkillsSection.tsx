import {
  capabilityGroups,
  workingPrinciples,
  workflowSteps,
} from "@/data/portfolio";

export function SkillsSection() {
  return (
    <section id="skills" className="bg-[#041811] px-4 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <span className="inline-flex rounded-full border border-[#d6aa45]/25 bg-[#d6aa45]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#f0d991]">
              How I Work
            </span>
            <h2 className="mt-4 max-w-xl text-3xl font-bold leading-tight text-[#fff7df] sm:text-4xl">
              I do not just stack tools. I turn systems into something I can
              reason about, ship, observe, and attack.
            </h2>
            <p className="mt-4 max-w-2xl text-base font-medium leading-8 text-[#d9cfb2]">
              My throughline is backend reliability under adversarial pressure:
              build the service, define its trust boundaries, instrument its
              behavior, then test where it bends.
            </p>

            <div className="mt-8 rounded-2xl border border-[#d6aa45]/20 bg-[#f0d991]/[0.035] p-5">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#f0d991]">
                Working loop
              </p>
              <div className="mt-5 grid gap-3">
                {workflowSteps.map((step, index) => (
                  <div
                    key={step}
                    className="grid grid-cols-[2.25rem_1fr] items-center gap-3"
                  >
                    <span className="grid size-9 place-items-center rounded-full border border-[#d6aa45]/30 bg-[#d6aa45]/10 text-sm font-extrabold text-[#f0d991]">
                      {index + 1}
                    </span>
                    <p className="text-sm font-semibold leading-6 text-[#fff7df]">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            {workingPrinciples.map((principle) => (
              <article
                key={principle.title}
                className="rounded-2xl border border-[#d6aa45]/20 bg-[#06251b] p-5 shadow-xl shadow-black/10"
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <h3 className="text-2xl font-semibold leading-7 text-[#fff7df]">
                    {principle.title}
                  </h3>
                  <span className="rounded-full bg-[#d6aa45]/10 px-3 py-1 text-xs font-bold text-[#f0d991]">
                    {principle.signal}
                  </span>
                </div>
                <p className="mt-3 text-sm font-medium leading-7 text-[#cfc5aa]">
                  {principle.body}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {capabilityGroups.map((group) => (
            <article
              key={group.title}
              className="rounded-2xl border border-[#d6aa45]/15 bg-[#03140f]/55 p-5"
            >
              <h3 className="text-xl font-semibold text-[#fff7df]">
                {group.title}
              </h3>
              <p className="mt-2 min-h-14 text-sm font-medium leading-6 text-[#cfc5aa]">
                {group.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-[#d6aa45]/20 bg-[#f0d991]/[0.035] px-3 py-1.5 text-xs font-semibold text-[#d9cfb2]"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
