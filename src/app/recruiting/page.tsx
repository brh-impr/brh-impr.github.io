import { getRecruitingPage } from "@/lib/content";

const recruitingHighlights = [
  "Competitive club-level schedule",
  "Clear expectations for travel, practices, and dues",
  "Direct communication with team leadership and recruiting contacts",
  "Opportunity to submit game film and player history",
];

export default function RecruitingPage() {
  const recruitingPage = getRecruitingPage();

  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-start">
        <div>
          <div className="text-sm font-bold uppercase tracking-[0.2em] text-brand">
            Recruiting
          </div>
          <h1 className="mt-2 text-4xl font-black tracking-tight">
            {recruitingPage?.hero_title ??
              "Interested in playing for CCSU Club Hockey?"}
          </h1>
          <div className="mt-4 max-w-2xl whitespace-pre-line text-slate-600">
            {recruitingPage?.body ??
              "We are looking for committed student-athletes who want a competitive club hockey experience, strong culture, and a serious team environment."}
          </div>

          <div className="mt-8 grid gap-4">
            {recruitingHighlights.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-200 bg-white px-5 py-4 font-medium shadow-soft"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
          <h2 className="text-2xl font-black">Recruiting Form</h2>
          <form className="mt-6 space-y-4">
            <p className="text-sm text-slate-500">
              This starter is static-export ready. Replace this form with
              Formspree, Basin, Tally, or another hosted form service before
              launch.
            </p>
            <input
              className="w-full rounded-2xl border border-slate-300 px-4 py-3"
              placeholder="Full Name"
            />
            <input
              className="w-full rounded-2xl border border-slate-300 px-4 py-3"
              placeholder="Email"
            />
            <input
              className="w-full rounded-2xl border border-slate-300 px-4 py-3"
              placeholder="Graduation Year"
            />
            <input
              className="w-full rounded-2xl border border-slate-300 px-4 py-3"
              placeholder="Position"
            />
            <input
              className="w-full rounded-2xl border border-slate-300 px-4 py-3"
              placeholder="Current Team / Previous Team"
            />
            <input
              className="w-full rounded-2xl border border-slate-300 px-4 py-3"
              placeholder="Video Link"
            />
            <textarea
              className="min-h-32 w-full rounded-2xl border border-slate-300 px-4 py-3"
              placeholder="Tell us about your playing experience"
            />
            <button className="rounded-2xl bg-brand px-5 py-3 font-semibold text-white">
              Submit Interest
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
