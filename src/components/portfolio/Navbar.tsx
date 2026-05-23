import { profile } from "@/data/portfolio";

const navItems = ["Hero", "About", "Domains", "Education", "Certifications"];

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-xl border border-white/10 bg-zinc-950/70 px-4 py-3 shadow-2xl shadow-black/30 backdrop-blur-xl">
        <a href="#hero" className="flex items-center gap-3">
          <span className="grid size-9 place-items-center rounded-lg border border-white/10 bg-white/10 text-sm font-black text-white">
            DV
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-bold text-white">
              {profile.name}
            </span>
            <span className="block text-[11px] text-zinc-400">
              {profile.role}
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] p-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="rounded-full px-4 py-2 text-xs font-medium text-zinc-300 transition hover:bg-white/10 hover:text-white"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={`mailto:${profile.email}`}
            className="hidden rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-xs font-semibold text-emerald-300 transition hover:bg-emerald-400/15 sm:inline-flex"
          >
            Open for projects
          </a>
          <a
            href="#contact"
            className="rounded-full bg-white px-4 py-2 text-xs font-bold text-zinc-950 transition hover:bg-zinc-200"
          >
            Let&apos;s chat
          </a>
        </div>
      </nav>
    </header>
  );
}
