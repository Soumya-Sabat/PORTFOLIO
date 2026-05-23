import { ContactForm } from "./ContactForm";

export function ContactSection() {
  return (
    <section id="contact" className="bg-[#242426] px-4 py-24">
      <div className="mx-auto max-w-6xl rounded-2xl border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.1),rgba(255,255,255,0.035))] p-6 shadow-2xl shadow-black/25 sm:p-10">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto grid size-12 place-items-center rounded-full border border-white/10 bg-white/10 text-lg">
            @
          </div>
          <h2 className="mt-5 text-3xl font-black text-white sm:text-4xl">
            Let&apos;s Build Something Unbreakable
          </h2>
          <p className="mt-4 text-sm leading-7 text-zinc-300">
            Whether you need a comprehensive security audit, resilient
            infrastructure deployment, or a production-ready custom product, I
            am ready to design the right system.
          </p>
        </div>
        <div className="mx-auto mt-8 max-w-3xl">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
