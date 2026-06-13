const foundationStatus = [
  "Private portal boundary established",
  "Clerk authentication boundary prepared",
  "Workspace-scoped data foundation prepared",
  "Evidence, audit, and event-first engineering direction active",
];

export default function PortalPage() {
  return (
    <section className="space-y-8">
      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c7a55b]">
          Creative Operations Portal
        </p>
        <h1 className="max-w-3xl text-3xl font-semibold text-white md:text-5xl">
          Chronicle Creative Operations
        </h1>
        <p className="max-w-2xl text-sm leading-7 text-[#d7d0c3] md:text-base">
          Private operational foundation for Creative Operations Intelligence.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {foundationStatus.map((item) => (
          <div key={item} className="border border-white/10 bg-white/[0.03] p-5">
            <p className="text-sm text-[#f5f0e8]">{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
