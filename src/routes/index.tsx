import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Activity,
  BrainCircuit,
  ClipboardCheck,
  FileSignature,
  Radar,
  ShieldCheck,
  Users,
  Wrench,
} from "lucide-react";
import { ClosingCall, SectionHeading, SiteShell, VideoBand } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import hero from "@/assets/hero-highway.jpg";
import dispatchRoom from "@/assets/dispatch-room.jpg";
import inspection from "@/assets/inspection.jpg";
import depot from "@/assets/depot-aerial.jpg";
import aiNetwork from "@/assets/ai-network.jpg";
import manifestDock from "@/assets/manifest-dock.jpg";
import driverApp from "@/assets/driver-app.jpg";
import person1 from "@/assets/person-1.jpg";
import person2 from "@/assets/person-2.jpg";
import person3 from "@/assets/person-3.jpg";
import videoHighway from "@/assets/video-highway.mp4.asset.json";
import videoAi from "@/assets/video-ai.mp4.asset.json";
import videoDepot from "@/assets/video-depot.mp4.asset.json";
import videoDriver from "@/assets/video-driver.mp4.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "HaulMind — AI Fleet Intelligence For Road Freight" },
      {
        name: "description",
        content:
          "HaulMind unites dispatch reasoning, live tracking, digital manifests, roadworthiness and driver hours in one AI workspace built for carriers.",
      },
      { property: "og:title", content: "HaulMind — AI Fleet Intelligence For Road Freight" },
      {
        property: "og:description",
        content:
          "One AI workspace for dispatch, tracking, manifests, compliance, maintenance and driver management.",
      },
    ],
  }),
  component: Home,
});

const capabilities = [
  {
    icon: BrainCircuit,
    title: "Reasoned Dispatch",
    copy: "HaulMind weighs hours remaining, lane history and equipment fit, then proposes the pairing that keeps empty kilometres off your ledger.",
  },
  {
    icon: Radar,
    title: "Live Positioning",
    copy: "Continuous vehicle telemetry with corridor fencing, arrival forecasting and a behaviour index calculated per driver, per trip.",
  },
  {
    icon: FileSignature,
    title: "Paperless Manifests",
    copy: "Raise, countersign and release freight paperwork in under a minute, with an immutable trail that satisfies any later review.",
  },
  {
    icon: ShieldCheck,
    title: "Roadworthiness Desk",
    copy: "Logbook synchronisation, defect reports and certificate lifecycles handled quietly in the background, ahead of every deadline.",
  },
  {
    icon: Wrench,
    title: "Workshop Planning",
    copy: "Forecasted service windows and digital job cards keep trucks earning instead of waiting for an unplanned repair bay.",
  },
  {
    icon: Users,
    title: "Crew Operations",
    copy: "Hiring paperwork, certification refreshers and pay-ready hour capture live beside the fleet they belong to.",
  },
];

const stats = [
  { value: "1,240", label: "Carriers Running Daily", note: "Across Canada and the US Midwest" },
  { value: "97.4%", label: "Roadworthiness Score", note: "Fleet average on the platform" },
  { value: "42%", label: "Desk Work Removed", note: "Measured across first six weeks" },
  { value: "24/7", label: "Autonomous Watch", note: "The engine never signs off" },
];

const panels = [
  {
    tag: "Lane Economics",
    title: "See which corridors actually pay",
    copy: "Margin per lane, per customer and per tractor — recalculated nightly so pricing conversations start from evidence instead of instinct.",
    image: dispatchRoom,
    alt: "Fleet dispatch operators reviewing live route maps",
  },
  {
    tag: "Risk Watch",
    title: "Warnings that arrive early",
    copy: "Expiring insurance, a logbook drifting toward a breach, a missed pre-trip check — surfaced while there is still time to act.",
    image: inspection,
    alt: "Technician completing a digital truck inspection",
  },
  {
    tag: "Yard Truth",
    title: "Know every unit's real state",
    copy: "Loaded, rolling, parked, or in the workshop — one board reconciles yard reality with what dispatch believes is happening.",
    image: depot,
    alt: "Aerial view of a trailer yard at first light",
  },
  {
    tag: "Spend Control",
    title: "Hold maintenance to a number",
    copy: "Budget ceilings per unit or class, live burn-down against them, and a nudge before a category runs past its allowance.",
    image: manifestDock,
    alt: "Dock worker signing freight paperwork on a tablet",
  },
];

const metricsLeft = [
  { label: "Documents current", value: 96, note: "Licences, permits and certificates" },
  { label: "Defect reports filed on time", value: 94, note: "Pre and post-trip submissions" },
  { label: "Trips without incident", value: 99, note: "Rolling ninety-day window" },
  { label: "Audit readiness", value: 97, note: "Evidence attached and indexed" },
];

const metricsRight = [
  { label: "Tractor utilisation", value: 85, note: "Earning hours against available" },
  { label: "Appointments met", value: 92, note: "Delivered inside the promised window" },
  { label: "Planned service completed", value: 81, note: "Work orders closed on schedule" },
  { label: "Driver continuity", value: 93, note: "Crew retained year over year" },
];

const voices = [
  {
    quote:
      "Our back office shrank two desks of paperwork in a month, and the engine caught a lapsing certificate none of us had flagged.",
    name: "Priya Anand",
    role: "Operations Lead · 92 tractors",
    image: person1,
  },
  {
    quote:
      "We retired four subscriptions. Planners now open one board in the morning and never leave it — that alone changed our day.",
    name: "Sahil Grewal",
    role: "Dispatch Manager · regional carrier",
    image: person2,
  },
  {
    quote:
      "The drivers took to the app without a training session. I finally see the yard the same way my planners do.",
    name: "Marcus Whitfield",
    role: "Owner · family freight business",
    image: person3,
  },
];

function Bar({ label, value, note }: { label: string; value: number; note: string }) {
  return (
    <div>
      <div className="flex items-baseline justify-between gap-4">
        <p className="text-sm font-semibold">{label}</p>
        <p className="font-display text-lg font-bold text-brass">{value}%</p>
      </div>
      <p className="mt-1 text-xs text-muted-foreground">{note}</p>
      <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-surface-2">
        <div
          className="h-full rounded-full"
          style={{ width: `${value}%`, backgroundImage: "var(--gradient-brass)" }}
        />
      </div>
    </div>
  );
}

function Home() {
  return (
    <SiteShell>
      {/* Hero */}
      <section className="relative isolate -mt-20 overflow-hidden pt-36 pb-20 lg:pt-44">
        <img
          src={hero}
          alt="Connected freight fleet travelling a highway at dusk"
          width={1920}
          height={1088}
          className="absolute inset-0 size-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(105deg, oklch(0.23 0.036 236 / 96%) 0%, oklch(0.24 0.038 234 / 74%) 55%, oklch(0.24 0.038 234 / 92%) 100%)",
          }}
        />
        <div className="grid-veil absolute inset-0 opacity-40" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <Reveal>
            <p className="eyebrow">Engineered for carriers who run tight</p>
            <h1 className="mt-5 text-4xl leading-[1.05] font-bold sm:text-5xl lg:text-6xl">
              The thinking layer <br />
              <span className="text-brass-gradient">behind your fleet.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              HaulMind gathers planning, positioning, paperwork and crew records into a single
              reasoning workspace — so your team stops reconciling systems and starts moving freight
              with certainty.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="rounded-md px-6 py-3 text-sm font-bold text-primary-foreground transition-transform hover:-translate-y-0.5"
                style={{
                  backgroundImage: "var(--gradient-brass)",
                  boxShadow: "var(--shadow-brass)",
                }}
              >
                Book A Walkthrough
              </Link>
              <Link
                to="/driver-app"
                className="rounded-md border border-border px-6 py-3 text-sm font-bold transition-colors hover:border-brass hover:text-brass"
              >
                See The Driver App
              </Link>
            </div>
          </Reveal>

          <Reveal delay={140}>
            <div className="surface-panel float-slow rounded-xl p-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground">
                  <span className="pulse-ring size-2 rounded-full bg-brass" />
                  Live board · 268 units signed on
                </div>
                <Activity className="size-4 text-brass" />
              </div>

              <div className="mt-5 grid grid-cols-3 gap-3">
                {[
                  ["Rolling", "196"],
                  ["At dock", "48"],
                  ["Parked", "24"],
                ].map(([k, v]) => (
                  <div key={k} className="rounded-lg bg-surface-2/70 p-3">
                    <p className="text-[0.65rem] tracking-[0.16em] text-muted-foreground uppercase">
                      {k}
                    </p>
                    <p className="font-display mt-1 text-2xl font-bold">{v}</p>
                  </div>
                ))}
              </div>

              <div className="mt-4 rounded-lg bg-surface-2/70 p-4">
                <div className="flex items-baseline justify-between">
                  <p className="text-xs tracking-[0.16em] text-muted-foreground uppercase">
                    Earning hours
                  </p>
                  <p className="font-display text-xl font-bold text-brass">85%</p>
                </div>
                <div className="mt-3 flex items-end gap-1.5">
                  {[38, 52, 44, 61, 57, 72, 66, 84, 78, 91, 86, 95].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t-sm"
                      style={{ height: `${h * 0.6}px`, backgroundImage: "var(--gradient-brass)" }}
                    />
                  ))}
                </div>
              </div>

              <div className="mt-4 space-y-2.5">
                {[
                  ["Unit 214 cleared the Windsor scale", "2m"],
                  ["Defect report closed by R. Dhaliwal", "8m"],
                  ["Freight note HM-4471 countersigned", "14m"],
                ].map(([t, at]) => (
                  <div key={t} className="flex items-center justify-between gap-3 text-xs">
                    <span className="flex items-center gap-2 text-muted-foreground">
                      <ClipboardCheck className="size-3.5 text-brass" />
                      {t}
                    </span>
                    <span className="text-muted-foreground/70">{at}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border bg-surface/50 py-14">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 90}>
              <p className="font-display text-4xl font-bold text-brass-gradient">{s.value}</p>
              <p className="mt-2 text-sm font-bold">{s.label}</p>
              <p className="mt-1 text-xs text-muted-foreground">{s.note}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <VideoBand
        src={videoHighway.url}
        eyebrow="Freight in motion"
        title="Every kilometre accounted for."
        copy="From the moment a load is accepted to the signature at the receiving dock, HaulMind keeps one honest record of what happened and when."
      />

      {/* Capabilities */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="One workspace, no gaps"
            title={
              <>
                Everything a carrier runs on, <span className="text-brass">held together.</span>
              </>
            }
            copy="Disconnected tools create quiet gaps between them. HaulMind removes the gaps by keeping planning, evidence and people in the same place."
          />

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((c, i) => (
              <Reveal key={c.title} delay={i * 70}>
                <article className="group h-full rounded-xl border border-border bg-surface/70 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brass/60">
                  <span
                    className="inline-flex size-11 items-center justify-center rounded-lg"
                    style={{ backgroundImage: "var(--gradient-brass)" }}
                  >
                    <c.icon className="size-5 text-primary-foreground" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold">{c.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.copy}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Panels */}
      <section className="border-t border-border bg-surface/40 py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="Platform up close"
            title="Built around the calls your planners make."
            copy="Four working surfaces that carry most of the day — each shaped by how freight desks actually operate."
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {panels.map((p, i) => (
              <Reveal key={p.title} delay={i * 80}>
                <article className="group h-full overflow-hidden rounded-xl border border-border bg-background">
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.alt}
                      loading="lazy"
                      className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(to top, oklch(0.24 0.038 234 / 92%), transparent 65%)",
                      }}
                    />
                    <span className="absolute top-4 left-4 rounded-full border border-brass/40 bg-background/70 px-3 py-1 text-[0.65rem] font-bold tracking-[0.18em] text-brass uppercase backdrop-blur">
                      {p.tag}
                    </span>
                  </div>
                  <div className="p-7">
                    <h3 className="text-xl font-bold">{p.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.copy}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* AI core */}
      <section className="relative overflow-hidden py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <p className="eyebrow">Intelligence at the centre</p>
            <h2 className="mt-4 text-3xl leading-tight font-bold sm:text-4xl">
              Judgement wired into the daily run.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              The engine reads across planning, evidence and workshop history without being asked,
              raising the few things worth your attention and quietly handling the rest.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "Flags certificates and inspections before they lapse",
                "Predicts component failures from telemetry patterns",
                "Suggests load pairings that respect hours and equipment",
                "Detects regulatory drift the moment it appears",
              ].map((t) => (
                <li key={t} className="flex gap-3 text-sm text-muted-foreground">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brass" />
                  {t}
                </li>
              ))}
            </ul>
            <Link
              to="/ai-engine"
              className="mt-9 inline-flex rounded-md border border-brass/50 px-5 py-3 text-sm font-bold text-brass transition-colors hover:bg-brass hover:text-primary-foreground"
            >
              Explore the engine
            </Link>
          </Reveal>

          <Reveal delay={120}>
            <div className="surface-panel overflow-hidden rounded-xl">
              <video
                src={videoAi.url}
                poster={aiNetwork}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="h-64 w-full object-cover sm:h-80"
              />
              <div className="space-y-3 p-6">
                <div className="flex items-center gap-2 text-xs font-bold tracking-[0.18em] text-brass uppercase">
                  <span className="pulse-ring size-2 rounded-full bg-brass" /> Ops copilot
                </div>
                <div className="rounded-lg bg-surface-2/70 p-4 text-sm">
                  Which units are at risk of a compliance breach this week?
                </div>
                <div className="rounded-lg border border-brass/30 bg-surface/70 p-4 text-sm leading-relaxed text-muted-foreground">
                  Three units need attention. Unit 38 has an insurance certificate expiring in four
                  days, unit 21 is missing a pre-trip record from Tuesday, and driver 07 will hit the
                  cycle limit before the Thunder Bay leg. Reassign or extend?
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Metrics */}
      <section className="border-y border-border bg-surface/40 py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="Numbers that hold up"
            title="Performance you can defend in a review."
            copy="Safety, currency, utilisation and continuity tracked continuously — never assembled the night before an audit."
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {[
              { head: "Safety & Currency", rows: metricsLeft },
              { head: "Operating Efficiency", rows: metricsRight },
            ].map((group, gi) => (
              <Reveal key={group.head} delay={gi * 100}>
                <div className="surface-panel h-full rounded-xl p-7">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold">{group.head}</h3>
                    <span className="text-xs text-muted-foreground">Refreshed moments ago</span>
                  </div>
                  <div className="mt-7 space-y-6">
                    {group.rows.map((r) => (
                      <Bar key={r.label} {...r} />
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <VideoBand
        src={videoDepot.url}
        eyebrow="Yard to highway"
        title="Total sight. Nothing guessed."
        copy="Positions, duty states and document status move together in real time, whether your desk is in the office or on a phone at the fence line."
        height="h-[62vh]"
      />

      {/* Compliance teaser */}
      <section className="py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <Reveal>
            <div className="overflow-hidden rounded-xl border border-border">
              <img
                src={inspection}
                alt="Inspector reviewing a truck with a tablet in a depot"
                loading="lazy"
                width={1408}
                height={1008}
                className="size-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <p className="eyebrow">Regulation without the strain</p>
            <h2 className="mt-4 text-3xl leading-tight font-bold sm:text-4xl">
              Ready for inspection, any morning.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              HaulMind carries the deadlines, forms and evidence on your behalf, so your team spends
              its hours on freight rather than folders.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                ["Vehicle checks", "Digital walkarounds with stamped photo evidence."],
                ["Duty & hours", "Logbook sync with breach alerts before they land."],
                ["Certificates", "Central policy register with early renewal notices."],
                ["Routed alerts", "The right issue reaches the right person first."],
              ].map(([h, c]) => (
                <div key={h} className="rounded-lg border border-border bg-surface/60 p-5">
                  <h3 className="text-sm font-bold">{h}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{c}</p>
                </div>
              ))}
            </div>
            <Link
              to="/compliance"
              className="mt-8 inline-flex rounded-md border border-border px-5 py-3 text-sm font-bold transition-colors hover:border-brass hover:text-brass"
            >
              Open the compliance desk
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Driver app */}
      <section className="border-t border-border bg-surface/40 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <p className="eyebrow">In the cab</p>
            <h2 className="mt-4 text-3xl leading-tight font-bold sm:text-4xl">
              Give the crew something they will actually open.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Trip sheets, duty status, walkaround checks and photo uploads in one calm screen —
              light on data, usable with gloves on, honest about what is required next.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                ["Under 3 min", "Average pre-trip completion"],
                ["Offline first", "Syncs when signal returns"],
                ["1 tap", "Duty status changes"],
                ["Zero training", "Adopted on day one"],
              ].map(([v, l]) => (
                <div key={l} className="rounded-lg border border-border bg-background p-5">
                  <p className="font-display text-xl font-bold text-brass">{v}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{l}</p>
                </div>
              ))}
            </div>
            <Link
              to="/driver-app"
              className="mt-8 inline-flex rounded-md px-5 py-3 text-sm font-bold text-primary-foreground"
              style={{ backgroundImage: "var(--gradient-brass)" }}
            >
              See the driver app
            </Link>
          </Reveal>
          <Reveal delay={120}>
            <div className="grid gap-4 sm:grid-cols-2">
              <video
                src={videoDriver.url}
                poster={driverApp}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="h-72 w-full rounded-xl border border-border object-cover sm:h-[26rem]"
              />
              <img
                src={driverApp}
                alt="Driver checking the HaulMind app inside a truck cab"
                loading="lazy"
                width={1200}
                height={1408}
                className="hidden h-[26rem] w-full rounded-xl border border-border object-cover sm:block"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Voices */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="Operators on record"
            title="What carriers tell us after a season."
            align="center"
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {voices.map((v, i) => (
              <Reveal key={v.name} delay={i * 90}>
                <figure className="h-full rounded-xl border border-border bg-surface/70 p-7">
                  <blockquote className="text-sm leading-relaxed text-muted-foreground">
                    “{v.quote}”
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-4 border-t border-border pt-6">
                    <img
                      src={v.image}
                      alt={v.name}
                      loading="lazy"
                      width={1008}
                      height={1200}
                      className="size-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-sm font-bold">{v.name}</p>
                      <p className="text-xs text-muted-foreground">{v.role}</p>
                    </div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ClosingCall
        title="Your fleet deserves a sharper spine."
        copy="Join the carriers who replaced a stack of half-connected tools with one workspace that reasons about the whole operation."
        image={depot}
      />
    </SiteShell>
  );
}
