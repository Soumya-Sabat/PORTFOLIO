import { certifications } from "@/data/portfolio";
import { SectionHeader } from "./SectionHeader";

export function CertificationsSection() {
  return (
    <section id="certifications" className="bg-[#1b1b1d] px-4 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1fr]">
          <SectionHeader
            eyebrow="Verifiable Credentials"
            title="Professional Certifications"
            description="Practical credentials across offensive security, cloud infrastructure, blockchain architecture, and machine learning."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {certifications.map((cert) => (
              <article
                key={cert.title}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
              >
                <p className="text-xs font-bold text-blue-300">
                  {cert.provider}
                </p>
                <h3 className="mt-3 min-h-12 text-sm font-bold leading-6 text-white">
                  {cert.title}
                </h3>
                <dl className="mt-5 space-y-2 text-xs text-zinc-400">
                  <div className="flex justify-between gap-4">
                    <dt>Issued</dt>
                    <dd className="text-zinc-200">{cert.date}</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt>Credential</dt>
                    <dd className="text-zinc-200">{cert.credential}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
