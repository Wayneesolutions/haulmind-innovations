import { createFileRoute } from "@tanstack/react-router";
import { ClosingCall, SectionHeading, SiteShell, VideoBand } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import inspection from "@/assets/inspection.jpg";
import depot from "@/assets/depot-aerial.jpg";
import manifestDock from "@/assets/manifest-dock.jpg";
import videoHighway from "@/assets/video-highway.mp4.asset.json";
import videoDepot from "@/assets/video-depot.mp4.asset.json";

export const Route = createFileRoute("/compliance")({
  head: () => ({
    meta: [
      { title: "Compliance Desk — HaulMind Roadworthiness & Hours" },
      {
        name: "description",
        content:
          "Walkaround checks, duty hours, certificate renewals and routed alerts — HaulMind keeps carriers inspection-ready without the folder work.",
      },
      { property: "og:title", content: "Compliance Desk — HaulMind Roadworthiness & Hours" },
      {
        property: "og:description",
        content:
          "Walkaround checks, duty hours, certificate renewals and routed alerts in one always-current desk.",
      },
    ],
  }),
  component: Compliance,
});

const pillars = [
  [
    "Walkaround checks",
    "Guided pre and post-trip forms with stamped photos, filed from any device the crew already carries.",
  ],
  [
    "Duty and hours",
    "Logbook records reconciled continuously, with a warning long before a cycle runs out of room.",
  ],
  [
    "Certificates and policies",
    "One register for insurance, permits, licences and training, each with its own countdown.",
  ],
  [
    "Routed alerts",
    "Rules decide who hears about what, so nothing waits in a shared inbox nobody owns.",
  ],
];

const board = [
  ["Needs attention", "Unit 38 · insurance", "Renewal falls due in 4 days"],
  ["Cleared", "Driver 07 · duty records", "Verified against telematics"],
  ["Scheduled", "Unit 21 · walkaround", "Pre-trip booked for 06:00"],
  ["Watching", "Unit 55 · brake wear", "Pad life projected at 9 days"],
];

function Compliance() {
  return (
    <SiteShell>
      <section className="relative isolate -mt-20 overflow-hidden pt-40 pb-20">
        <img
          src={inspection}
          alt="Inspector examining a tractor in a depot"
          width={1408}
          height={1008}
          className="absolute inset-0 size-full object-cover opacity-55"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(110deg, oklch(0.23 0.036 236 / 96%), oklch(0.24 0.038 234 / 68%))",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal className="max-w-3xl">
            <p className="eyebrow">Compliance desk</p>
            <h1 className="mt-5 text-4xl leading-[1.06] font-bold sm:text-5xl lg:text-6xl">
              Inspection-ready <span className="text-brass-gradient">without the folder work.</span>
            </h1>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              HaulMind holds the deadlines, the forms and the evidence, then tells one named person
              what to do about the few items that are actually at risk.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-border bg-surface/50 py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="Four pillars"
            title="Every vehicle, every document, one screen."
          />
          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {pillars.map(([h, c], i) => (
              <Reveal key={h} delay={i * 80}>
                <div className="h-full rounded-xl border border-border bg-background p-8">
                  <h3 className="text-lg font-bold">{h}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <div className="surface-panel rounded-xl p-6">
              <p className="text-xs font-bold tracking-[0.18em] text-brass uppercase">
                Live risk board
              </p>
              <div className="mt-5 space-y-3">
                {board.map(([state, subject, note]) => (
                  <div key={subject} className="rounded-lg bg-surface-2/70 p-4">
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-[0.65rem] font-bold tracking-[0.16em] text-brass uppercase">
                        {state}
                      </span>
                      <span className="text-xs text-muted-foreground">{note}</span>
                    </div>
                    <p className="mt-2 text-sm font-semibold">{subject}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={110}>
            <img
              src={manifestDock}
              alt="Driver filing paperwork at a loading dock"
              loading="lazy"
              width={1408}
              height={912}
              className="w-full rounded-xl border border-border object-cover"
            />
          </Reveal>
        </div>
      </section>

      <VideoBand
        src={videoHighway.url}
        eyebrow="On the road"
        title="Confidence at the scale house."
        copy="When an officer asks, the record is already complete — signed, timestamped and retrievable from a phone at the roadside."
        height="h-[58vh]"
      />

      <section className="border-y border-border bg-surface/40 py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="What changes"
            title="Less chasing, fewer findings."
            align="center"
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["11 hrs", "Admin hours returned weekly"],
              ["4 days", "Average early warning on renewals"],
              ["97%", "Forms filed inside the window"],
              ["0", "Findings from missing evidence"],
            ].map(([v, l], i) => (
              <Reveal key={l} delay={i * 70}>
                <div className="rounded-xl border border-border bg-background p-7">
                  <p className="font-display text-3xl font-bold text-brass-gradient">{v}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{l}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <VideoBand
        src={videoDepot.url}
        eyebrow="In the yard"
        title="Checks that finish before the shift does."
        copy="Guided walkarounds keep crews moving and give reviewers the photo evidence they always ask for later."
        height="h-[54vh]"
      />

      <ClosingCall
        title="Make the next audit uneventful."
        copy="Show us your current forms and deadlines — we will map them into HaulMind and hand back a live risk board."
        image={depot}
      />
    </SiteShell>
  );
}
