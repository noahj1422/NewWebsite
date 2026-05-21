import { ValidationError, useForm } from "@formspree/react";

export default function ContactPage() {
  const [state, handleSubmit] = useForm("xpqndlza");

  if (state.succeeded) {
    return (
      <section className="py-8 px-4">
        <div className="mx-auto max-w-3xl rounded-2xl border border-white/15 bg-black/30 p-6 sm:p-8 shadow-lg">
          <h2 className="text-2xl font-semibold text-white mb-2">Message Sent</h2>
          <p className="text-white/80">
            Thanks for reaching out. I received your message and will get back to you soon.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-8 px-4">
      <div className="mx-auto max-w-3xl rounded-2xl border border-white/15 bg-black/30 p-6 sm:p-8 shadow-lg">
        <h2 className="text-2xl font-semibold text-white mb-2">Contact Me</h2>
        <p className="text-white/80 mb-6">
          Have a project, role, or collaboration in mind? Send me a message and I will get back to you.
        </p>

        <form className="grid grid-cols-1 gap-4" onSubmit={handleSubmit}>
          <label className="text-left">
            <span className="mb-2 block text-sm font-medium text-white/90">Name</span>
            <input
              type="text"
              name="name"
              className="w-full rounded-lg border border-white/20 bg-black/40 px-4 py-3 text-white placeholder-white/40 outline-none transition-colors focus:border-blue-300"
              placeholder="Your name"
              required
            />
          </label>
          <ValidationError
            prefix="Name"
            field="name"
            errors={state.errors}
            className="-mt-2 text-sm text-red-300"
          />

          <label className="text-left">
            <span className="mb-2 block text-sm font-medium text-white/90">Email</span>
            <input
              type="email"
              name="email"
              className="w-full rounded-lg border border-white/20 bg-black/40 px-4 py-3 text-white placeholder-white/40 outline-none transition-colors focus:border-blue-300"
              placeholder="you@example.com"
              required
            />
          </label>
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
            className="-mt-2 text-sm text-red-300"
          />

          <label className="text-left">
            <span className="mb-2 block text-sm font-medium text-white/90">Subject</span>
            <input
              type="text"
              name="subject"
              className="w-full rounded-lg border border-white/20 bg-black/40 px-4 py-3 text-white placeholder-white/40 outline-none transition-colors focus:border-blue-300"
              placeholder="What is this about?"
            />
          </label>
          <ValidationError
            prefix="Subject"
            field="subject"
            errors={state.errors}
            className="-mt-2 text-sm text-red-300"
          />

          <label className="text-left">
            <span className="mb-2 block text-sm font-medium text-white/90">Message</span>
            <textarea
              name="message"
              rows={6}
              className="w-full rounded-lg border border-white/20 bg-black/40 px-4 py-3 text-white placeholder-white/40 outline-none transition-colors focus:border-blue-300"
              placeholder="Tell me a little about your project or opportunity"
              required
            />
          </label>
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
            className="-mt-2 text-sm text-red-300"
          />
          <ValidationError
            errors={state.errors}
            className="-mt-2 text-sm text-red-300"
          />

          <button
            type="submit"
            disabled={state.submitting}
            className="mt-2 inline-flex items-center justify-center rounded-lg border border-blue-200/30 bg-white/10 px-6 py-3 text-white font-semibold transition-all duration-300 hover:border-blue-200 hover:shadow-[0_0_22px_rgba(147,197,253,0.65)] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {state.submitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}
