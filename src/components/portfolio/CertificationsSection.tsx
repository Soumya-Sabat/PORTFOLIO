import { certifications } from "@/data/portfolio";
import { SectionHeader } from "./SectionHeader";

export function CertificationsSection() {
  return (
    <section id="certifications" className="bg-[#06251b] px-4 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1fr]">
          <SectionHeader
            eyebrow="Verifiable Credentials"
            title="Professional Certifications"
            description="Credential names are written conservatively from issuer wording to avoid unclear abbreviations."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {certifications.map((cert) => (
              <article
                key={cert.title}
                className="rounded-2xl border border-[#d6aa45]/20 bg-[#f0d991]/[0.035] p-5"
              >
                <p className="text-xs font-bold text-[#f0d991]">
                  {cert.provider}
                </p>
                <h3 className="mt-3 min-h-12 text-lg font-semibold leading-6 text-[#fff7df]">
                  {cert.title}
                </h3>
                <dl className="mt-5 space-y-2 text-xs font-medium text-[#cfc5aa]">
                  <div className="flex justify-between gap-4">
                    <dt>Issued</dt>
                    <dd className="text-[#fff7df]">{cert.date}</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt>Credential</dt>
                    <dd className="break-all text-right text-[#fff7df]">
                      {cert.credential}
                    </dd>
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
