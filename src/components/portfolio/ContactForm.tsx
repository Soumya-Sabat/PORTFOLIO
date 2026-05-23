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
        projectType: formData.get("projectType"),
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
      <label className="grid gap-2 text-left text-xs font-bold text-zinc-300">
        Name
        <input
          required
          name="name"
          className="rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-blue-400"
          placeholder="Ada Lovelace"
        />
      </label>
      <label className="grid gap-2 text-left text-xs font-bold text-zinc-300">
        Email
        <input
          required
          name="email"
          type="email"
          className="rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-blue-400"
          placeholder="ada@example.com"
        />
      </label>
      <label className="grid gap-2 text-left text-xs font-bold text-zinc-300 sm:col-span-2">
        Project type
        <select
          name="projectType"
          className="rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none transition focus:border-blue-400"
          defaultValue="Security audit"
        >
          <option>Security audit</option>
          <option>Cloud platform</option>
          <option>Full-stack product</option>
          <option>AI workflow</option>
          <option>Smart contract review</option>
        </select>
      </label>
      <label className="grid gap-2 text-left text-xs font-bold text-zinc-300 sm:col-span-2">
        Message
        <textarea
          required
          name="message"
          rows={4}
          minLength={20}
          className="resize-none rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-blue-400"
          placeholder="Tell me about the system, timeline, and what needs to be protected."
        />
      </label>
      <div className="flex flex-wrap items-center gap-3 sm:col-span-2">
        <button
          disabled={state === "loading"}
          className="rounded-full bg-white px-5 py-3 text-sm font-black text-zinc-950 transition hover:bg-zinc-200 disabled:cursor-not-allowed disabled:opacity-60"
          type="submit"
        >
          {state === "loading" ? "Sending..." : "Schedule technical briefing"}
        </button>
        {message ? (
          <p
            className={`text-sm ${
              state === "error" ? "text-rose-300" : "text-emerald-300"
            }`}
          >
            {message}
          </p>
        ) : null}
      </div>
    </form>
  );
}
