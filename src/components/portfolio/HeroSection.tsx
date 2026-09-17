import { expertise, profile } from "@/data/portfolio";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative isolate flex min-h-[100svh] items-center px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32 lg:pt-36"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_18%,rgba(19,111,78,0.38),transparent_31%),radial-gradient(circle_at_78%_22%,rgba(214,170,69,0.16),transparent_27%),linear-gradient(180deg,#03140f_0%,#06251b_58%,#081a13_100%)]" />
      <div className="absolute inset-0 -z-10 opacity-25 [background-image:linear-gradient(135deg,rgba(240,217,145,0.12)_1px,transparent_1px),linear-gradient(45deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:38px_38px]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-48 bg-gradient-to-t from-[#081a13] to-transparent" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-8 md:gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
        <div className="min-w-0">
          <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-[1.02] text-[#fff7df] sm:mt-6 sm:text-5xl md:text-6xl xl:text-7xl">
            Securing, Building, & Orchestrating{" "}
            <span className="bg-gradient-to-r from-[#f7e7a8] via-[#d6aa45] to-[#37b487] bg-clip-text text-transparent">
              The Future of Tech
            </span>
          </h1>
          <p className="mt-5 max-w-2xl text-base font-medium leading-7 text-[#cfc5aa] sm:mt-6 sm:text-lg sm:leading-8">
            {profile.summary}
          </p>
        </div>

        <div className="mx-auto w-full max-w-xl rounded-2xl border border-[#d6aa45]/25 bg-[#041811]/75 p-4 shadow-2xl shadow-black/40 backdrop-blur sm:p-5 lg:max-w-none">
          <div className="space-y-3">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#d6aa45]">
              Core Expertise
            </p>
            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-1">
              {expertise.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-[#d6aa45]/15 bg-[#f0d991]/[0.045] p-4"
                >
                  <div className="flex items-start gap-3">
                    <span
                      className={`mt-1 size-3 shrink-0 rounded-full bg-gradient-to-br ${item.accent}`}
                    />
                    <div className="min-w-0">
                      <h3 className="text-base font-semibold text-[#fff7df]">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-xs font-medium leading-5 text-[#cfc5aa]">
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
