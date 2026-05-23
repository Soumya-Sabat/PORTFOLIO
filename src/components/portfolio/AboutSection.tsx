import { stats } from "@/data/portfolio";

export function AboutSection() {
  return (
    <section id="about" className="border-t border-white/5 bg-[#121214] px-4 py-24">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <span className="inline-flex rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-400">
            Background
          </span>
          <h2 className="mt-5 max-w-xl text-3xl font-black leading-tight text-white sm:text-4xl">
            Bridging the gap between code, trust, and infrastructure.
          </h2>
          <div className="mt-8 grid grid-cols-2 gap-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-white/10 bg-white/[0.035] p-5"
              >
                <p className="text-3xl font-black text-blue-400">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs text-zinc-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-5 text-sm leading-7 text-zinc-300 sm:text-base">
          <p>
            I am a backend engineer building adversarial-ready infrastructure at the intersection of distributed systems, blockchain, and security. My work combines pragmatic engineering with offensive thinking to deliver reliable, production-grade platforms.
          </p>
          <p>
            Today, I design backend APIs, distributed services, and smart contract-integrated systems that thrive under real pressure. My infrastructure is observable, failure-aware, and resilient by design.
          </p>
          <div className="rounded-2xl border border-violet-400/20 bg-gradient-to-r from-violet-500/12 to-blue-500/12 p-5">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-violet-200">
              Engineering philosophy
            </p>
            <p className="mt-2 text-sm text-zinc-300">
              Trust is earned. If a system automates risk, it should also make
              its reasoning inspectable, reversible, and measurable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
