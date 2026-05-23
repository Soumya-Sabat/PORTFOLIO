import { profile } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="bg-[#242426] px-4 pb-10">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-zinc-500">
        <p>© 2026 {profile.name}. All rights reserved.</p>
        <div className="flex gap-4">
          <a className="transition hover:text-white" href={profile.github}>
            GitHub
          </a>
          <a className="transition hover:text-white" href={`mailto:${profile.email}`}>
            Email
          </a>
          <a className="transition hover:text-white" href="#hero">
            Top
          </a>
        </div>
      </div>
    </footer>
  );
}
