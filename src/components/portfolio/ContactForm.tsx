"use client";

import { FormEvent, useState } from "react";

type FormState = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("loading");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
      }),
    });

    const payload = (await response.json()) as { message?: string };

    if (!response.ok) {
      setState("error");
      setMessage(payload.message ?? "Something went wrong. Try again.");
      return;
    }

    form.reset();
    setState("success");
    setMessage(payload.message ?? "Message received. I will reply soon.");
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-3 sm:grid-cols-2">
      <label className="grid gap-2 text-left text-xs font-bold text-[#d9cfb2]">
        Name
        <input
          required
          name="name"
          className="rounded-xl border border-[#d6aa45]/20 bg-black/25 px-4 py-3 text-sm text-[#fff7df] outline-none transition placeholder:text-[#8c8067] focus:border-[#d6aa45]"
          placeholder="Your Name"
        />
      </label>
      <label className="grid gap-2 text-left text-xs font-bold text-[#d9cfb2]">
        Email
        <input
          required
          name="email"
          type="email"
          className="rounded-xl border border-[#d6aa45]/20 bg-black/25 px-4 py-3 text-sm text-[#fff7df] outline-none transition placeholder:text-[#8c8067] focus:border-[#d6aa45]"
          placeholder="Your Email"
        />
      </label>
      <label className="grid gap-2 text-left text-xs font-bold text-[#d9cfb2] sm:col-span-2">
        Message
        <textarea
          required
          name="message"
          rows={4}
          minLength={10}
          className="resize-none rounded-xl border border-[#d6aa45]/20 bg-black/25 px-4 py-3 text-sm text-[#fff7df] outline-none transition placeholder:text-[#8c8067] focus:border-[#d6aa45]"
          placeholder="Tell me about the system, timeline, and what needs to be protected."
        />
      </label>
      <div className="flex flex-wrap items-center gap-3 sm:col-span-2">
        <button
          disabled={state === "loading"}
          className=" rounded-full bg-[#d6aa45] px-5 py-3 text-sm font-extrabold text-[#03140f] transition hover:bg-[#f0d991] disabled:cursor-not-allowed disabled:opacity-60"
          type="submit"
        >
          {state === "loading" ? "Sending..." : "Send Message"}
        </button>
        {message ? (
          <p
            className={`text-sm ${
              state === "error" ? "text-rose-300" : "text-[#37b487]"
            }`}
          >
            {message}
          </p>
        ) : null}
      </div>
    </form>
  );
}
