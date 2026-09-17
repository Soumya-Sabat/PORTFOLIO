import { ContactForm } from "./ContactForm";

export function ContactSection() {
  return (
    <section id="contact" className="bg-[#03140f] px-4 py-24">
      <div className="mx-auto max-w-6xl rounded-2xl border border-[#d6aa45]/25 bg-[linear-gradient(135deg,rgba(214,170,69,0.13),rgba(15,107,76,0.16))] p-6 shadow-2xl shadow-black/25 sm:p-10">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto grid size-12 place-items-center rounded-full border border-[#d6aa45]/30 bg-[#d6aa45]/10 text-lg font-bold text-[#f0d991]">
            @
          </div>
          <h2 className="mt-5 text-3xl font-bold text-[#fff7df] sm:text-4xl">
            Let&apos;s Build Something Unbreakable
          </h2>
          <p className="mt-4 text-sm font-medium leading-7 text-[#d9cfb2]">
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
