import { expertise, profile } from "@/data/portfolio";


export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative isolate flex min-h-[760px] items-center px-4 pt-28 sm:pt-36"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_18%,rgba(37,99,235,0.22),transparent_30%),radial-gradient(circle_at_78%_22%,rgba(20,184,166,0.14),transparent_26%),linear-gradient(180deg,#050607_0%,#0a0b0d_62%,#121214_100%)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-48 bg-gradient-to-t from-[#121214] to-transparent" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1 text-xs font-medium text-blue-200">
            <span className="size-1.5 rounded-full bg-blue-400" />
            {profile.tagline}
          </span>
          <h1 className="mt-6 max-w-4xl text-5xl font-black leading-[1.02] text-white sm:text-6xl lg:text-7xl">
            Securing, Building, & Orchestrating{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-fuchsia-400 bg-clip-text text-transparent">
              The Future of Tech
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
            {profile.summary}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={profile.resume}
              className="rounded-full bg-blue-500 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-blue-500/25 transition hover:bg-blue-400"
            >
              View resume
            </a>
            <a
              href={profile.github}
              className="rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10"
            >
              GitHub profile
            </a>
          </div>
        </div>

        <div className="mx-auto w-full max-w-xl rounded-2xl border border-white/10 bg-zinc-950/55 p-5 shadow-2xl shadow-black/40 backdrop-blur">
          <div className="flex items-center gap-4 border-b border-white/10 pb-5">
            <div className="grid size-16 place-items-center rounded-full bg-gradient-to-br from-sky-400 via-blue-500 to-fuchsia-500 text-xl font-black text-white">
              SS
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">{profile.name}</h2>
              <p className="text-sm text-zinc-400">
                Lead Solutions Architect & Advisor
              </p>
              <p className="mt-1 text-xs text-emerald-300">
                0 critical incidents / 99.98% uptime
              </p>
            </div>
          </div>

          <div className="mt-5 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
              Core Expertise
            </p>
            {expertise.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-white/10 bg-white/[0.035] p-4"
              >
                <div className="flex items-start gap-3">
                  <span
                    className={`mt-1 size-3 rounded-full bg-gradient-to-br ${item.accent}`}
                  />
                  <div>
                    <h3 className="text-sm font-bold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs leading-5 text-zinc-400">
                      {item.detail}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
