import { profile } from "@/data/portfolio";

const navItems = [
  { label: "Hero", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Certifications", href: "#certifications" },
];

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <nav className="mx-auto flex max-w-[92rem] items-center justify-between gap-4 rounded-2xl border border-white/10 bg-zinc-950/75 px-5 py-4 shadow-2xl shadow-black/30 backdrop-blur-xl sm:px-6 sm:py-5">
        <a href="#hero" className="flex items-center gap-4">
          <span className="grid size-12 place-items-center rounded-xl border border-white/10 bg-white/10 text-base font-black text-white">
            SS
          </span>
          <span className="leading-tight">
            <span className="block text-lg font-bold text-white">
              {profile.name}
            </span>
            <span className="block text-sm text-zinc-400">
              {profile.role}
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] p-1.5 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-5 py-3 text-sm font-semibold text-zinc-300 transition hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="hidden rounded-full border border-emerald-400/30 bg-emerald-400/10 px-5 py-3 text-sm font-semibold text-emerald-300 transition hover:bg-emerald-400/15 sm:inline-flex"
          >
            Open for projects
          </a>
          <a
            href="#contact"
            className="rounded-full bg-white px-5 py-3 text-sm font-bold text-zinc-950 transition hover:bg-zinc-200"
          >
            Let&apos;s chat
          </a>
        </div>
      </nav>
    </header>
  );
}
