import { profile } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="bg-[#03140f] px-4 pb-10">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 border-t border-[#d6aa45]/20 pt-8 text-xs font-medium text-[#9f9376]">
        <p>&copy; 2026 {profile.name}. All rights reserved.</p>
        <div className="flex gap-4">
          <a className="transition hover:text-[#f0d991]" href={profile.github}>
            GitHub
          </a>
          <a
            className="transition hover:text-[#f0d991]"
            href={`mailto:${profile.email}`}
          >
            Email
          </a>
          <a className="transition hover:text-[#f0d991]" href="#hero">
            Top
          </a>
        </div>
      </div>
    </footer>
  );
}
