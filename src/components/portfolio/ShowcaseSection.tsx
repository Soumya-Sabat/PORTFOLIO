"use client";

import { projectTags, projects } from "@/data/portfolio";
import { useMemo, useState } from "react";
import { SectionHeader } from "./SectionHeader";

export function ShowcaseSection() {
  const [activeTag, setActiveTag] = useState(projectTags[0]);
  const [selectedTitle, setSelectedTitle] = useState(projects[0].title);

  const filteredProjects = useMemo(() => {
    if (activeTag === "All") {
      return projects;
    }

    return projects.filter((project) => project.tags.includes(activeTag));
  }, [activeTag]);

  const selectedProject =
    filteredProjects.find((project) => project.title === selectedTitle) ??
    filteredProjects[0] ??
    projects[0];

  function chooseTag(tag: string) {
    const matchingProjects =
      tag === "All"
        ? projects
        : projects.filter((project) => project.tags.includes(tag));

    setActiveTag(tag);
    setSelectedTitle(matchingProjects[0]?.title ?? projects[0].title);
  }

  return (
    <section id="projects" className="bg-[#151517] px-4 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Project Explorer"
          title="Selected Projects"
          description="Security, cloud, blockchain, full-stack, and AI systems delivered as production-grade builds."
          align="center"
        />

        <div className="mx-auto mb-10 flex max-w-5xl flex-wrap justify-center gap-2 rounded-2xl border border-white/10 bg-black/25 p-2">
          {projectTags.map((domain) => (
            <button
              key={domain}
              aria-pressed={activeTag === domain}
              className={`rounded-full px-5 py-2.5 text-sm font-bold transition ${
                activeTag === domain
                  ? "bg-blue-500 text-white shadow-lg shadow-blue-500/25"
                  : "text-zinc-400 hover:bg-white/10 hover:text-white"
              }`}
              onClick={() => chooseTag(domain)}
              type="button"
            >
              {domain}
            </button>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-2xl border border-white/10 bg-zinc-950/45 p-5">
            <h3 className="mb-4 text-lg font-bold text-blue-300">
              {activeTag === "All" ? "All Projects" : `${activeTag} Projects`}
            </h3>
            <div className="space-y-3" aria-live="polite">
              {filteredProjects.map((project) => (
                <button
                  key={project.title}
                  className={`w-full rounded-xl border px-4 py-4 text-left transition ${
                    selectedProject.title === project.title
                      ? "border-blue-400/50 bg-blue-500/10"
                      : "border-white/10 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.06]"
                  }`}
                  onClick={() => setSelectedTitle(project.title)}
                  type="button"
                >
                  <span className="flex items-start justify-between gap-4">
                    <span className="text-base font-bold text-white">
                      {project.title}
                    </span>
                    <span className="shrink-0 rounded-full bg-white/10 px-2.5 py-1 text-xs font-bold text-zinc-300">
                      {project.status}
                    </span>
                  </span>
                  <span className="mt-3 line-clamp-2 block text-sm leading-6 text-zinc-400">
                    {project.description}
                  </span>
                </button>
              ))}
            </div>
            <p className="mt-5 rounded-xl border border-white/10 bg-white/[0.035] p-4 text-sm leading-6 text-zinc-400">
              A focused selection of systems built for measurable reliability,
              stronger security posture, and production impact.
            </p>
          </div>

          <article className="rounded-2xl border border-white/10 bg-zinc-950/55 p-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="text-sm font-bold uppercase tracking-[0.16em] text-emerald-300">
                Project detail
              </span>
              <span className="rounded-full border border-rose-400/30 bg-rose-400/10 px-3 py-1 text-sm font-bold text-rose-200">
                {selectedProject.status}
              </span>
            </div>
            <h3 className="mt-5 text-3xl font-black text-white">
              {selectedProject.title}
            </h3>
            <p className="mt-4 text-base leading-8 text-zinc-400">
              {selectedProject.description}
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl bg-black/35 p-5">
                <p className="text-sm text-zinc-500">Impact</p>
                <p className="mt-1 text-lg font-bold text-white">
                  {selectedProject.impact}
                </p>
              </div>
              <div className="rounded-xl bg-black/35 p-5">
                <p className="text-sm text-zinc-500">Metric</p>
                <p className="mt-1 text-lg font-bold text-white">
                  {selectedProject.metric}
                </p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {selectedProject.tags.map((tag) => (
                <button
                  key={tag}
                  className={`rounded-full border px-3.5 py-1.5 text-sm transition ${
                    activeTag === tag
                      ? "border-blue-400/50 bg-blue-500/15 text-blue-100"
                      : "border-white/10 text-zinc-300 hover:bg-white/10 hover:text-white"
                  }`}
                  onClick={() => chooseTag(tag)}
                  type="button"
                >
                  {tag}
                </button>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
