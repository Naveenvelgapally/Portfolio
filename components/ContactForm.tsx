"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-white/10 bg-slate-900 p-6 shadow-xl shadow-black/10 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium text-slate-200">
          Name
          <input required name="name" autoComplete="name" className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2.5 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-300 focus:ring-2 focus:ring-cyan-300/20" placeholder="Your name" />
        </label>
        <label className="block text-sm font-medium text-slate-200">
          Email
          <input required name="email" type="email" autoComplete="email" className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2.5 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-300 focus:ring-2 focus:ring-cyan-300/20" placeholder="you@example.com" />
        </label>
      </div>
      <label className="mt-5 block text-sm font-medium text-slate-200">
        Subject
        <input required name="subject" className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2.5 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-300 focus:ring-2 focus:ring-cyan-300/20" placeholder="How can I help?" />
      </label>
      <label className="mt-5 block text-sm font-medium text-slate-200">
        Message
        <textarea required name="message" rows={5} className="mt-2 w-full resize-y rounded-lg border border-slate-700 bg-slate-950 px-3 py-2.5 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-300 focus:ring-2 focus:ring-cyan-300/20" placeholder="Tell me about your project or opportunity." />
      </label>
      <button type="submit" className="mt-6 inline-flex items-center justify-center rounded-lg bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 transition-transform hover:-translate-y-0.5 hover:bg-cyan-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300">Send message</button>
      {submitted && <p role="status" className="mt-4 text-sm text-cyan-200">Thanks for reaching out. Connect the form to your preferred form service to receive submissions.</p>}
    </form>
  );
}
