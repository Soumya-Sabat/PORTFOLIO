import { expertise, profile } from "@/data/portfolio";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative isolate flex min-h-[100svh] items-center px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32 lg:pt-36"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_18%,rgba(37,99,235,0.22),transparent_30%),radial-gradient(circle_at_78%_22%,rgba(20,184,166,0.14),transparent_26%),linear-gradient(180deg,#050607_0%,#0a0b0d_62%,#121214_100%)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-48 bg-gradient-to-t from-[#121214] to-transparent" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-8 md:gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
        <div className="min-w-0">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1 text-xs font-medium text-blue-200">
            <span className="size-1.5 rounded-full bg-blue-400" />
            {profile.tagline}
          </span>
          <h1 className="mt-5 max-w-4xl text-4xl font-black leading-[1.05] text-white sm:mt-6 sm:text-5xl md:text-6xl xl:text-7xl">
            Securing, Building, & Orchestrating{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-fuchsia-400 bg-clip-text text-transparent">
              The Future of Tech
            </span>
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-400 sm:mt-6 sm:text-lg sm:leading-8">
            {profile.summary}
          </p>
        </div>

        <div className="mx-auto w-full max-w-xl rounded-2xl border border-white/10 bg-zinc-950/55 p-4 shadow-2xl shadow-black/40 backdrop-blur sm:p-5 lg:max-w-none">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
              Core Expertise
            </p>
            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-1">
              {expertise.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-white/10 bg-white/[0.035] p-4"
                >
                  <div className="flex items-start gap-3">
                    <span
                      className={`mt-1 size-3 shrink-0 rounded-full bg-gradient-to-br ${item.accent}`}
                    />
                    <div className="min-w-0">
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
      </div>
    </section>
  );
}
