export function ContactForm() {
  return (
    <form className="premium-panel p-6 md:p-8">
      <div className="mb-7">
        <p className="eyebrow">Conversation Brief</p>
        <h2 className="brand-heading mt-3 text-3xl text-ivory">
          Prepare your enquiry
        </h2>
        <p className="mt-3 text-sm leading-7 text-[color:var(--text-secondary)]">
          This form is currently a preparation aid. Please send enquiries
          through the listed email addresses.
        </p>
      </div>
      <div className="grid gap-5">
        <label className="grid gap-2 text-sm text-stone-300">
          Name
          <input
            type="text"
            name="name"
            className="border border-[color:var(--line)] bg-black/50 px-4 py-3 text-ivory outline-none transition focus:border-[color:var(--gold)] focus:shadow-[0_0_0_3px_var(--glow)]"
            placeholder="Your name"
          />
        </label>
        <label className="grid gap-2 text-sm text-stone-300">
          Email
          <input
            type="email"
            name="email"
            className="border border-[color:var(--line)] bg-black/50 px-4 py-3 text-ivory outline-none transition focus:border-[color:var(--gold)] focus:shadow-[0_0_0_3px_var(--glow)]"
            placeholder="you@example.com"
          />
        </label>
        <label className="grid gap-2 text-sm text-stone-300">
          Enquiry Type
          <select
            name="type"
            className="border border-[color:var(--line)] bg-black/50 px-4 py-3 text-ivory outline-none transition focus:border-[color:var(--gold)] focus:shadow-[0_0_0_3px_var(--glow)]"
            defaultValue="licensing"
          >
            <option value="licensing">Licensing Discussion</option>
            <option value="publishing">Publishing</option>
            <option value="sync">Sync</option>
            <option value="general">General</option>
            <option value="catalogue">Catalogue Context</option>
            <option value="royalty-admin">Royalty/Admin Preparation</option>
          </select>
        </label>
        <label className="grid gap-2 text-sm text-stone-300">
          Message
          <textarea
            name="message"
            rows={6}
            className="resize-none border border-[color:var(--line)] bg-black/50 px-4 py-3 text-ivory outline-none transition focus:border-[color:var(--gold)] focus:shadow-[0_0_0_3px_var(--glow)]"
            placeholder="Note the work, project, territory, intended use, timeline, and any known rights details."
          />
        </label>
        <button
          type="button"
          className="border border-[color:var(--gold)] bg-[linear-gradient(135deg,var(--gold-accent),var(--gold))] px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-black shadow-[0_18px_55px_var(--glow)] transition duration-300 hover:-translate-y-0.5"
        >
          Prepare Discussion
        </button>
      </div>
    </form>
  );
}
