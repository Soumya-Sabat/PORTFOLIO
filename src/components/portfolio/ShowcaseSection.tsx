"use client";

import { projectDomains, projects } from "@/data/portfolio";
import { useMemo, useState } from "react";
import { SectionHeader } from "./SectionHeader";

export function ShowcaseSection() {
  const [activeDomain, setActiveDomain] = useState(projectDomains[0]);
  const [selectedTitle, setSelectedTitle] = useState(projects[0].title);

  const filteredProjects = useMemo(() => {
    if (activeDomain === "All") {
      return projects;
    }

    return projects.filter((project) => project.domain === activeDomain);
  }, [activeDomain]);

  const selectedProject =
    filteredProjects.find((project) => project.title === selectedTitle) ??
    filteredProjects[0] ??
    projects[0];

  function chooseDomain(domain: string) {
    const matchingProjects =
      domain === "All"
        ? projects
        : projects.filter((project) => project.domain === domain);

    setActiveDomain(domain);
    setSelectedTitle(matchingProjects[0]?.title ?? projects[0].title);
  }

  return (
    <section id="projects" className="bg-[#06251b] px-4 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Project Explorer"
          title="Selected Projects"
          description="Each card follows the same frame: problem, approach, and result."
          align="center"
        />

        <div className="mx-auto mb-10 flex max-w-5xl flex-wrap justify-center gap-2 rounded-2xl border border-[#d6aa45]/20 bg-black/20 p-2">
          {projectDomains.map((domain) => (
            <button
              key={domain}
              aria-pressed={activeDomain === domain}
              className={`rounded-full px-5 py-2.5 text-sm font-bold transition ${
                activeDomain === domain
                  ? "bg-[#d6aa45] text-[#03140f] shadow-lg shadow-[#d6aa45]/20"
                  : "text-[#cfc5aa] hover:bg-[#d6aa45]/12 hover:text-[#fff7df]"
              }`}
              onClick={() => chooseDomain(domain)}
              type="button"
            >
              {domain}
            </button>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-2xl border border-[#d6aa45]/20 bg-[#03140f]/55 p-5 shadow-xl shadow-black/15">
            <h3 className="mb-4 text-xl font-semibold text-[#f0d991]">
              {activeDomain === "All"
                ? "All Projects"
                : `${activeDomain} Projects`}
            </h3>
            <div className="space-y-3" aria-live="polite">
              {filteredProjects.map((project) => (
                <button
                  key={project.title}
                  className={`w-full rounded-xl border px-4 py-4 text-left transition ${
                    selectedProject.title === project.title
                      ? "border-[#d6aa45]/55 bg-[#d6aa45]/10"
                      : "border-[#d6aa45]/15 bg-[#f0d991]/[0.035] hover:border-[#d6aa45]/30 hover:bg-[#f0d991]/[0.06]"
                  }`}
                  onClick={() => setSelectedTitle(project.title)}
                  type="button"
                >
                  <span className="flex items-start justify-between gap-4">
                    <span className="text-base font-bold leading-6 text-[#fff7df]">
                      {project.title}
                    </span>
                    <span className="shrink-0 rounded-full bg-[#d6aa45]/12 px-2.5 py-1 text-xs font-bold text-[#f0d991]">
                      {project.status}
                    </span>
                  </span>
                  <span className="mt-3 line-clamp-3 block text-sm font-medium leading-6 text-[#cfc5aa]">
                    {project.description}
                  </span>
                </button>
              ))}
            </div>
            <p className="mt-5 rounded-xl border border-[#d6aa45]/15 bg-[#d6aa45]/[0.06] p-4 text-sm font-semibold leading-6 text-[#d9cfb2]">
              Each project is framed around what it proves: reliability,
              security posture, automation quality, or product architecture.
            </p>
          </div>

          <article className="rounded-2xl border border-[#d6aa45]/25 bg-[#03140f]/65 p-6 shadow-2xl shadow-black/20">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="text-sm font-bold uppercase tracking-[0.16em] text-[#37b487]">
                Project details
              </span>
              <span className="rounded-full border border-[#d6aa45]/30 bg-[#d6aa45]/10 px-3 py-1 text-sm font-bold text-[#f0d991]">
                {selectedProject.status}
              </span>
            </div>
            <h3 className="mt-5 text-3xl font-bold text-[#fff7df]">
              {selectedProject.title}
            </h3>
            <p className="mt-4 text-base font-medium leading-8 text-[#d9cfb2]">
              {selectedProject.description}
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-[#d6aa45]/10 bg-black/25 p-5">
                <p className="text-sm font-medium text-[#9f9376]">Impact</p>
                <p className="mt-1 text-lg font-bold text-[#fff7df]">
                  {selectedProject.impact}
                </p>
              </div>
              <div className="rounded-xl border border-[#d6aa45]/10 bg-black/25 p-5">
                <p className="text-sm font-medium text-[#9f9376]">Metric</p>
                <p className="mt-1 text-lg font-bold text-[#fff7df]">
                  {selectedProject.metric}
                </p>
              </div>
            </div>
            <div className="mt-6 rounded-2xl border border-[#37b487]/20 bg-[#37b487]/[0.055] p-5">
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#9be7bd]">
                Proof Points
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {selectedProject.proofPoints.map((point) => (
                  <div
                    key={point}
                    className="rounded-xl border border-[#37b487]/15 bg-black/20 p-3 text-sm font-semibold leading-5 text-[#dff8eb]"
                  >
                    {point}
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {selectedProject.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-[#d6aa45]/20 px-3.5 py-1.5 text-sm font-medium text-[#d9cfb2]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
