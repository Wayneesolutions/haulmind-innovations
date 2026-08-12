import { createFileRoute } from "@tanstack/react-router";
import { ClosingCall, SectionHeading, SiteShell, VideoBand } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import aiNetwork from "@/assets/ai-network.jpg";
import dispatchRoom from "@/assets/dispatch-room.jpg";
import depot from "@/assets/depot-aerial.jpg";
import inspection from "@/assets/inspection.jpg";
import videoAi from "@/assets/video-ai.mp4.asset.json";
import videoHighway from "@/assets/video-highway.mp4.asset.json";

export const Route = createFileRoute("/ai-engine")({
  head: () => ({
    meta: [
      { title: "HaulMind AI Engine — Reasoning For Freight Desks" },
      {
        name: "description",
        content:
          "Inside the HaulMind engine: lane reasoning, failure forecasting, breach prevention and an ops copilot that answers in plain language.",
      },
      { property: "og:title", content: "HaulMind AI Engine — Reasoning For Freight Desks" },
      {
        property: "og:description",
        content:
          "Lane reasoning, failure forecasting and breach prevention for carriers, explained in plain language.",
      },
    ],
  }),
  component: AiEngine,
});

const layers = [
  {
    step: "01",
    title: "Signals gathered",
    copy: "Telemetry, duty records, freight notes, workshop history and customer commitments arrive as one continuous stream rather than four exports.",
  },
  {
    step: "02",
    title: "Patterns weighed",
    copy: "The engine compares today against the fleet's own history — the lanes that ran late, the components that failed early, the crews that ran clean.",
  },
  {
    step: "03",
    title: "Options proposed",
    copy: "Instead of a dashboard to interpret, planners receive a short list of moves with the reasoning attached and the trade-off spelled out.",
  },
  {
    step: "04",
    title: "Outcome learned",
    copy: "Whatever the desk decides feeds back in, so next week's suggestions reflect how your operation actually behaves.",
  },
];

const abilities = [
  ["Lane reasoning", "Ranks candidate pairings by margin, hours left and equipment fit."],
  ["Failure forecasting", "Reads wear signatures to name the part before it strands a load."],
  ["Breach prevention", "Watches duty cycles and stops a violation while it is still avoidable."],
  ["Document vigilance", "Tracks every expiry date and chases the renewal without reminders."],
  ["Deadhead reduction", "Finds backhauls that fit the return window instead of empty running."],
  ["Plain answers", "Ask in a sentence, receive the specifics — units, names, dates, numbers."],
];

function AiEngine() {
  return (
    <SiteShell>
      <section className="relative isolate -mt-20 overflow-hidden pt-40 pb-20">
        <img
          src={aiNetwork}
          alt="Freight intelligence network visualisation"
          width={1408}
          height={1008}
          className="absolute inset-0 size-full object-cover opacity-60"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(120deg, oklch(0.23 0.036 236 / 96%), oklch(0.24 0.038 234 / 72%))",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal className="max-w-3xl">
            <p className="eyebrow">The engine</p>
            <h1 className="mt-5 text-4xl leading-[1.06] font-bold sm:text-5xl lg:text-6xl">
              Reasoning that earns <span className="text-brass-gradient">its seat at the desk.</span>
            </h1>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Most fleet software reports what already happened. HaulMind spends its cycles on what
              happens next — and explains itself every time it speaks.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-border bg-surface/50 py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="How it works"
            title="Four movements, running all day."
            copy="No configuration marathon, no data science team — the loop starts producing useful answers within the first week."
          />
          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {layers.map((l, i) => (
              <Reveal key={l.step} delay={i * 80}>
                <article className="h-full rounded-xl border border-border bg-background p-8">
                  <p className="font-display text-3xl font-bold text-brass-gradient">{l.step}</p>
                  <h3 className="mt-4 text-lg font-bold">{l.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{l.copy}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <VideoBand
        src={videoAi.url}
        poster={aiNetwork}
        eyebrow="Always thinking"
        title="The quiet work between decisions."
        copy="While the desk sleeps, the engine reconciles duty records, checks certificates and rebuilds tomorrow's suggested plan."
        height="h-[60vh]"
      />

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading eyebrow="Capabilities" title="What it actually does for you." />
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {abilities.map(([h, c], i) => (
              <Reveal key={h} delay={i * 60}>
                <div className="h-full rounded-xl border border-border bg-surface/70 p-7 transition-colors hover:border-brass/60">
                  <h3 className="text-base font-bold text-brass">{h}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-surface/40 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <img
              src={dispatchRoom}
              alt="Planners working the live board in a freight control room"
              loading="lazy"
              width={1408}
              height={1008}
              className="w-full rounded-xl border border-border object-cover"
            />
          </Reveal>
          <Reveal delay={100}>
            <img
              src={inspection}
              alt="Technician logging a defect on a tablet"
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
        eyebrow="Result"
        title="Fewer surprises on the road."
        copy="Carriers running the engine report shorter empty legs, calmer weeks and far fewer late-night phone calls about paperwork."
        height="h-[56vh]"
      />

      <ClosingCall
        title="Put a thinking layer behind your planners."
        copy="We will run the engine against a slice of your own history so you can judge the reasoning on your freight, not a demo dataset."
        image={depot}
      />
    </SiteShell>
  );
}
