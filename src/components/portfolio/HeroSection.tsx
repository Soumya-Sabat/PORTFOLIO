import { expertise, profile, proofHighlights } from "@/data/portfolio";
import Image from "next/image";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative isolate flex min-h-[100svh] items-center px-4 pb-12 pt-24 sm:px-6 sm:pb-14 sm:pt-28 lg:h-[100svh] lg:overflow-hidden lg:pb-8 lg:pt-24"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_18%,rgba(19,111,78,0.38),transparent_31%),radial-gradient(circle_at_78%_22%,rgba(214,170,69,0.16),transparent_27%),linear-gradient(180deg,#03140f_0%,#06251b_58%,#081a13_100%)]" />
      <div className="absolute inset-0 -z-10 opacity-25 [background-image:linear-gradient(135deg,rgba(240,217,145,0.12)_1px,transparent_1px),linear-gradient(45deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:38px_38px]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-48 bg-gradient-to-t from-[#081a13] to-transparent" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-7 md:gap-8 lg:grid-cols-[0.92fr_0.88fr] lg:gap-10">
        <div className="min-w-0">
          <h1 className="max-w-3xl text-4xl font-bold leading-[1.02] text-[#fff7df] sm:text-5xl md:text-6xl lg:text-[4.4rem] xl:text-[5.1rem]">
            Secure Backend Systems{" "}
            <span className="bg-gradient-to-r from-[#f7e7a8] via-[#d6aa45] to-[#37b487] bg-clip-text text-transparent">
              Built To Survive Pressure
            </span>
          </h1>
          <p className="mt-5 max-w-2xl text-base font-semibold leading-7 text-[#e0d4b8] lg:max-w-xl">
            {profile.summary}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-full bg-[#d6aa45] px-5 py-3 text-sm font-extrabold text-[#03140f] shadow-lg shadow-[#d6aa45]/20 transition hover:bg-[#f0d991]"
            >
              View Projects
            </a>
            <a
              href={profile.resume}
              className="rounded-full border border-[#d6aa45]/35 bg-[#f0d991]/[0.06] px-5 py-3 text-sm font-bold text-[#fff7df] transition hover:border-[#d6aa45]/60 hover:bg-[#d6aa45]/12"
            >
              Download Resume
            </a>
            <a
              href="#contact"
              className="rounded-full border border-[#37b487]/35 bg-[#37b487]/10 px-5 py-3 text-sm font-bold text-[#dff8eb] transition hover:border-[#37b487]/60 hover:bg-[#37b487]/15"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-6 flex max-w-2xl flex-wrap gap-2">
            {proofHighlights.map((item) => (
              <p
                key={item}
                className="rounded-full border border-[#d6aa45]/18 bg-[#f0d991]/[0.045] px-3.5 py-2 text-xs font-semibold leading-5 text-[#cfc5aa]"
              >
                {item}
              </p>
            ))}
          </div>
        </div>

        <div className="mx-auto w-full max-w-xl overflow-hidden rounded-2xl border border-[#d6aa45]/25 bg-[#041811]/75 shadow-2xl shadow-black/40 backdrop-blur lg:max-w-none">
          <div className="relative border-b border-[#d6aa45]/20 bg-[radial-gradient(circle_at_50%_15%,rgba(214,170,69,0.18),transparent_32%),linear-gradient(145deg,rgba(15,107,76,0.6),rgba(3,20,15,0.95))] p-4">
            <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(135deg,rgba(240,217,145,0.16)_1px,transparent_1px)] [background-size:24px_24px]" />
            <div className="relative mx-auto grid size-40 overflow-hidden rounded-2xl border border-[#d6aa45]/35 bg-[#f0d991]/10 shadow-2xl shadow-black/30 sm:size-44">
              <Image
                src="/files/pic.png"
                alt={`${profile.name} portrait`}
                width={420}
                height={420}
                className="h-full w-full scale-110 object-cover object-center saturate-[0.65]"
                priority
              />
            </div>
            <div className="relative mt-4 text-center">
              <p className="text-xl font-bold text-[#fff7df] sm:text-2xl">
                {profile.name}
              </p>
              <p className="mx-auto mt-1.5 max-w-sm text-sm font-semibold leading-5 text-[#d9cfb2]">
                Shipping reliable APIs and validating their failure paths before attackers do.
              </p>
            </div>
          </div>
          <div className="space-y-3 p-4">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#d6aa45]">
              Operating Thesis
            </p>
            <div className="grid gap-2 md:grid-cols-3 lg:grid-cols-1">
              {expertise.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-[#d6aa45]/15 bg-[#f0d991]/[0.045] p-3"
                >
                  <div className="flex items-start gap-3">
                    <span
                      className={`mt-1 size-3 shrink-0 rounded-full bg-gradient-to-br ${item.accent}`}
                    />
                    <div className="min-w-0">
                      <h3 className="text-base font-semibold leading-5 text-[#fff7df]">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-xs font-medium leading-4 text-[#cfc5aa]">
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
