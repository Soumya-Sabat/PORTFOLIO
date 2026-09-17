import { stats } from "@/data/portfolio";

export function AboutSection() {
  return (
    <section id="about" className="border-t border-[#d6aa45]/10 bg-[#081a13] px-4 py-24">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <span className="inline-flex rounded-full border border-[#d6aa45]/25 bg-[#d6aa45]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#f0d991]">
            Background
          </span>
          <h2 className="mt-5 max-w-xl text-3xl font-bold leading-tight text-[#fff7df] sm:text-4xl">
            Bridging the gap between code, trust, and infrastructure.
          </h2>
          <div className="mt-8 grid grid-cols-2 gap-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-[#d6aa45]/20 bg-[#f0d991]/[0.04] p-5"
              >
                <p className="text-3xl font-bold text-[#d6aa45]">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs font-medium text-[#cfc5aa]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-5 text-sm font-medium leading-7 text-[#d9cfb2] sm:text-base">
          <p>
            I am a backend engineer building adversarial-ready infrastructure at the intersection of distributed systems, blockchain, and security. My work combines pragmatic engineering with offensive thinking to deliver reliable, production-grade platforms.
          </p>
          <p>
            Today, I design backend APIs, distributed services, and smart contract-integrated systems that thrive under real pressure. My infrastructure is observable, failure-aware, and resilient by design.
          </p>
          <div className="rounded-2xl border border-[#d6aa45]/25 bg-gradient-to-r from-[#d6aa45]/12 to-[#0f6b4c]/20 p-5">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#f0d991]">
              Engineering philosophy
            </p>
            <p className="mt-2 text-sm font-medium text-[#d9cfb2]">
              Trust is earned. If a system automates risk, it should also make
              its reasoning inspectable, reversible, and measurable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
