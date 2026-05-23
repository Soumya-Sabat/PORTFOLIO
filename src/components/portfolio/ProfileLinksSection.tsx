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
    <section className="border-t border-white/5 bg-[#121214] px-4 py-10 sm:px-6">
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
            className="group rounded-xl border border-white/10 bg-white/[0.035] p-5 transition hover:border-blue-400/40 hover:bg-white/[0.06]"
          >
            <div className="flex items-center justify-between gap-4">
              <div className="min-w-0">
                <p className="text-sm font-bold text-white">{link.label}</p>
                <p className="mt-1 text-xs leading-5 text-zinc-400">
                  {link.detail}
                </p>
              </div>
              <span className="grid size-9 shrink-0 place-items-center rounded-full border border-white/10 text-sm font-bold text-blue-200 transition group-hover:border-blue-400/40 group-hover:bg-blue-400/10">
                -&gt;
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
