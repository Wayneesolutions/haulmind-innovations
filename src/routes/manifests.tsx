import { createFileRoute } from "@tanstack/react-router";
import { ClosingCall, SectionHeading, SiteShell, VideoBand } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import manifestDock from "@/assets/manifest-dock.jpg";
import depot from "@/assets/depot-aerial.jpg";
import dispatchRoom from "@/assets/dispatch-room.jpg";
import videoDepot from "@/assets/video-depot.mp4.asset.json";

export const Route = createFileRoute("/manifests")({
  head: () => ({
    meta: [
      { title: "Digital Manifests — HaulMind Freight Paperwork" },
      {
        name: "description",
        content:
          "Raise, sign and release freight notes in under a minute with HaulMind — stamped signatures, attached evidence and an unbroken audit trail.",
      },
      { property: "og:title", content: "Digital Manifests — HaulMind Freight Paperwork" },
      {
        property: "og:description",
        content:
          "Paperless freight notes with stamped signatures, attached evidence and a complete audit trail.",
      },
    ],
  }),
  component: Manifests,
});

const flow = [
  ["Raise", "Pull customer, stops and commodity from the load record — no retyping addresses."],
  ["Assign", "Push the note straight to the driver's screen with the trip sheet attached."],
  ["Sign", "Capture the receiver's signature on glass, with time, place and photos stamped in."],
  ["Settle", "Release to billing the moment the last stop closes, evidence already attached."],
];

const detail = [
  ["Template library", "Shape notes per customer or commodity and reuse them fleet-wide."],
  ["Damage evidence", "Photos taken at the dock attach to the note, not a lost group chat."],
  ["Exception notes", "Short refusals and overages recorded where a reviewer will find them."],
  ["Instant retrieval", "Search any note by unit, driver, customer or date in one field."],
  ["Billing handoff", "Signed notes queue for invoicing with reference numbers already matched."],
  ["Retention rules", "Keep records for as long as your jurisdiction expects, automatically."],
];

function Manifests() {
  return (
    <SiteShell>
      <section className="relative isolate -mt-20 overflow-hidden pt-40 pb-20">
        <img
          src={manifestDock}
          alt="Dock worker signing a digital freight note"
          width={1408}
          height={912}
          className="absolute inset-0 size-full object-cover opacity-55"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(115deg, oklch(0.23 0.036 236 / 96%), oklch(0.24 0.038 234 / 70%))",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal className="max-w-3xl">
            <p className="eyebrow">Freight paperwork</p>
            <h1 className="mt-5 text-4xl leading-[1.06] font-bold sm:text-5xl lg:text-6xl">
              Notes signed at the dock,{" "}
              <span className="text-brass-gradient">settled before the gate.</span>
            </h1>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Paper slows money down. HaulMind turns every freight note into a live record that
              travels with the load and closes itself when the last signature lands.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-border bg-surface/50 py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading eyebrow="The run" title="From raised to reconciled." />
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {flow.map(([h, c], i) => (
              <Reveal key={h} delay={i * 80}>
                <div className="h-full rounded-xl border border-border bg-background p-7">
                  <span className="font-display text-sm font-bold text-brass">
                    Step {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 text-lg font-bold">{h}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <VideoBand
        src={videoDepot.url}
        eyebrow="At the fence line"
        title="A record that keeps up with the yard."
        copy="Notes update as trailers move, so the office never chases a driver for a document that already exists."
        height="h-[58vh]"
      />

      <section className="py-24">
        <div className="mx-auto grid max-w-7xl items-start gap-12 px-5 lg:grid-cols-[1fr_0.9fr] lg:px-8">
          <div>
            <SectionHeading eyebrow="Details that matter" title="Small mechanics, large savings." />
            <div className="mt-12 grid gap-5 sm:grid-cols-2">
              {detail.map(([h, c], i) => (
                <Reveal key={h} delay={i * 60}>
                  <div className="h-full rounded-xl border border-border bg-surface/70 p-6">
                    <h3 className="text-sm font-bold text-brass">{h}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{c}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal delay={120}>
            <div className="surface-panel rounded-xl p-6">
              <p className="text-xs font-bold tracking-[0.18em] text-brass uppercase">
                Freight note HM-4471
              </p>
              <div className="mt-5 space-y-3 text-sm">
                {[
                  ["Shipper", "Northline Foods, Mississauga"],
                  ["Receiver", "Harbour Grocers, Kingston"],
                  ["Commodity", "Chilled produce · 18 pallets"],
                  ["Tractor / driver", "Unit 214 · R. Dhaliwal"],
                  ["Signed", "Today, 14:36 · on glass"],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between gap-4 border-b border-border pb-3">
                    <span className="text-muted-foreground">{k}</span>
                    <span className="text-right font-semibold">{v}</span>
                  </div>
                ))}
              </div>
              <div className="mt-5 flex items-center gap-3 rounded-lg border border-brass/30 bg-surface/70 p-4 text-xs text-muted-foreground">
                <span className="pulse-ring size-2 shrink-0 rounded-full bg-brass" />
                Released to billing automatically · 3 photos attached
              </div>
              <img
                src={dispatchRoom}
                alt="Planner reviewing signed freight notes"
                loading="lazy"
                className="mt-5 h-40 w-full rounded-lg object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <ClosingCall
        title="Stop letting paper hold your cash."
        copy="We will rebuild one of your existing note templates inside HaulMind so you can compare the two side by side."
        image={depot}
      />
    </SiteShell>
  );
}
