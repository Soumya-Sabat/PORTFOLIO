import { profile } from "@/data/portfolio";
import { SectionHeader } from "./SectionHeader";

const profileLinks = [
  {
    label: "Resume",
    href: profile.resume,
    detail: "Download my latest work datagram",
  },
  {
    label: "GitHub",
    href: profile.github,
    detail: "Explore projects and source code",
  },
  {
    label: "LinkedIn",
    href: profile.linkedin,
    detail: "Connect professionally",
  },
];

export function ProfileLinksSection() {
  return (
    <section className="border-t border-[#d6aa45]/10 bg-[#081a13] px-4 py-10 sm:px-6">
            <SectionHeader
                eyebrow="Connectivity"
                title="Socials"
                // description="Continuous theoretical and applied learning across premier institutions."
                align="center"
              />
      <div className="mx-auto grid max-w-7xl gap-3 sm:grid-cols-3">
        {profileLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="group rounded-xl border border-[#d6aa45]/20 bg-[#f0d991]/[0.04] p-5 transition hover:border-[#d6aa45]/45 hover:bg-[#f0d991]/[0.07]"
          >
            <div className="flex items-center justify-between gap-4">
              <div className="min-w-0">
                <p className="text-sm font-bold text-[#fff7df]">{link.label}</p>
                <p className="mt-1 text-xs font-medium leading-5 text-[#cfc5aa]">
                  {link.detail}
                </p>
              </div>
              <span className="grid size-9 shrink-0 place-items-center rounded-full border border-[#d6aa45]/25 text-sm font-bold text-[#f0d991] transition group-hover:border-[#d6aa45]/50 group-hover:bg-[#d6aa45]/10">
                -&gt;
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
