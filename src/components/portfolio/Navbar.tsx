"use client";

import { profile } from "@/data/portfolio";
import Image from "next/image";
import { useState } from "react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Certifications", href: "#certifications" },
  { label: "Hackathons", href: "#hackathons" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = [...navItems, { label: "Contact", href: "#contact" }];

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <nav className="relative mx-auto max-w-[92rem] rounded-2xl border border-white/10 bg-zinc-950/85 px-4 py-3 shadow-2xl shadow-black/30 backdrop-blur-xl sm:px-5 lg:px-6">
        <div className="flex items-center justify-between gap-3">
          <a href="#hero" className="flex min-w-0 items-center gap-3">
            <span className="hidden size-11 overflow-hidden rounded-xl border border-white/10 bg-white/10 sm:grid">
              <Image
                src="/files/pic.png"
                alt="Profile picture"
                width={88}
                height={88}
                className="h-full w-full object-cover"
                priority
              />
            </span>
            <span className="min-w-0 leading-tight">
              <span className="block truncate text-base font-bold text-white sm:text-lg">
                {profile.name}
              </span>
              <span className="hidden truncate text-sm text-zinc-400 md:block">
                {profile.role}
              </span>
            </span>
          </a>

          <div className="hidden items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] p-1.5 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2.5 text-sm font-semibold text-zinc-300 transition hover:bg-white/10 hover:text-white xl:px-5"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="#contact"
              className="hidden rounded-full bg-white px-4 py-2.5 text-sm font-bold text-zinc-950 transition hover:bg-zinc-200 sm:inline-flex xl:px-5"
            >
              Let&apos;s chat
            </a>
            <button
              aria-expanded={isOpen}
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              className="grid size-11 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-white transition hover:bg-white/10 lg:hidden"
              onClick={() => setIsOpen((open) => !open)}
              type="button"
            >
              <span className="flex w-5 flex-col gap-1.5">
                <span
                  className={`h-0.5 rounded-full bg-current transition ${
                    isOpen ? "translate-y-2 rotate-45" : ""
                  }`}
                />
                <span
                  className={`h-0.5 rounded-full bg-current transition ${
                    isOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`h-0.5 rounded-full bg-current transition ${
                    isOpen ? "-translate-y-2 -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </div>

        <div
          className={`lg:hidden ${
            isOpen
              ? "pointer-events-auto mt-4 max-h-[calc(100vh-7rem)] opacity-100"
              : "pointer-events-none max-h-0 opacity-0"
          } overflow-hidden transition-all duration-300`}
        >
          <div className="rounded-2xl border border-white/10 bg-zinc-950/95 p-4 shadow-2xl shadow-black/40">
            <div className="flex items-center gap-4 border-b border-white/10 pb-4">
              <span className="grid size-16 shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-white/10">
                <Image
                  src="/files/pic.png"
                  alt="Profile picture"
                  width={96}
                  height={96}
                  className="h-full w-full object-cover"
                  priority
                />
              </span>
              <span className="min-w-0">
                <span className="block truncate text-lg font-black text-white">
                  {profile.name}
                </span>
                <span className="mt-1 block text-sm leading-5 text-zinc-400">
                  {profile.role}
                </span>
              </span>
            </div>

            <div className="mt-3 grid gap-1">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-xl px-4 py-3 text-sm font-semibold text-zinc-200 transition hover:bg-white/10 hover:text-white"
                  onClick={closeMenu}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
