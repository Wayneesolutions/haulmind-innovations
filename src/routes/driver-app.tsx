import { createFileRoute } from "@tanstack/react-router";
import { ClosingCall, SectionHeading, SiteShell, VideoBand } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import driverApp from "@/assets/driver-app.jpg";
import depot from "@/assets/depot-aerial.jpg";
import inspection from "@/assets/inspection.jpg";
import videoDriver from "@/assets/video-driver.mp4.asset.json";
import videoHighway from "@/assets/video-highway.mp4.asset.json";

export const Route = createFileRoute("/driver-app")({
  head: () => ({
    meta: [
      { title: "Driver App — HaulMind In The Cab" },
      {
        name: "description",
        content:
          "Trip sheets, duty status, walkaround checks and document uploads in one calm HaulMind screen built for gloves, glare and patchy signal.",
      },
      { property: "og:title", content: "Driver App — HaulMind In The Cab" },
      {
        property: "og:description",
        content:
          "Trip sheets, duty status, walkaround checks and uploads in one calm screen built for the cab.",
      },
    ],
  }),
  component: DriverAppPage,
});

const screens = [
  ["Today's run", "Stops, appointment windows and notes in the order they happen."],
  ["Duty status", "One tap between driving, on-duty, break and off — logged and synced."],
  ["Walkaround", "Guided checklist with photo capture and defect notes in plain language."],
  ["Documents", "Snap a receipt or note and it lands against the right load instantly."],
  ["Messages", "Short, threaded notes from the planner — no group chat archaeology."],
  ["Pay view", "Hours and stops as the office sees them, so pay day holds no surprises."],
];

function DriverAppPage() {
  return (
    <SiteShell>
      <section className="relative isolate -mt-20 overflow-hidden pt-40 pb-20">
        <img
          src={driverApp}
          alt="Driver using the HaulMind app in a truck cab at dusk"
          width={1200}
          height={1408}
          className="absolute inset-0 size-full object-cover opacity-55"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(105deg, oklch(0.23 0.036 236 / 96%), oklch(0.24 0.038 234 / 66%))",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal className="max-w-3xl">
            <p className="eyebrow">In the cab</p>
            <h1 className="mt-5 text-4xl leading-[1.06] font-bold sm:text-5xl lg:text-6xl">
              Built for gloves, glare{" "}
              <span className="text-brass-gradient">and patchy signal.</span>
            </h1>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Drivers do not need another dashboard. They need the next thing, clearly, on a screen
              that works when the bars drop to one.
            </p>
          </Reveal>
        </div>
      </section>

      <VideoBand
        src={videoDriver.url}
        poster={driverApp}
        eyebrow="First-hand"
        title="Two taps between the yard and the road."
        copy="Sign on, confirm the walkaround, accept the run. Everything else the office needs is captured as the day happens."
        height="h-[60vh]"
      />

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading eyebrow="Six screens" title="Nothing a driver will not use." />
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {screens.map(([h, c], i) => (
              <Reveal key={h} delay={i * 70}>
                <div className="h-full rounded-xl border border-border bg-surface/70 p-7 transition-colors hover:border-brass/60">
                  <h3 className="text-base font-bold text-brass">{h}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-surface/40 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <p className="eyebrow">Adoption</p>
            <h2 className="mt-4 text-3xl leading-tight font-bold sm:text-4xl">
              Handed over on Monday, habit by Friday.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Large type, forgiving targets, offline capture and no menu deeper than two levels. The
              crew learns it in a coffee break, and the office stops reminding them.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                ["96%", "Crews active in week one"],
                ["Offline", "Captures without signal"],
                ["2.6 min", "Median walkaround time"],
                ["No manual", "Zero training sessions run"],
              ].map(([v, l]) => (
                <div key={l} className="rounded-lg border border-border bg-background p-5">
                  <p className="font-display text-xl font-bold text-brass">{v}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{l}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={110}>
            <img
              src={inspection}
              alt="Driver completing a guided walkaround check"
              loading="lazy"
              width={1408}
              height={1008}
              className="w-full rounded-xl border border-border object-cover"
            />
          </Reveal>
        </div>
      </section>

      <VideoBand
        src={videoHighway.url}
        eyebrow="Long haul"
        title="Quiet on the road, complete at the desk."
        copy="The app asks little and records everything, so planners never phone a driver for a detail the phone already knew."
        height="h-[54vh]"
      />

      <ClosingCall
        title="Give your crew a screen they respect."
        copy="We will set up a pilot on three tractors and let the drivers tell you whether it belongs in the cab."
        image={depot}
      />
    </SiteShell>
  );
}
