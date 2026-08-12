import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin, PhoneCall } from "lucide-react";
import { SiteShell, VideoBand } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import dispatchRoom from "@/assets/dispatch-room.jpg";
import depot from "@/assets/depot-aerial.jpg";
import videoDepot from "@/assets/video-depot.mp4.asset.json";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Talk To HaulMind — Book A Fleet Walkthrough" },
      {
        name: "description",
        content:
          "Tell us how your fleet runs today and we will walk you through HaulMind on your own lanes, units and paperwork.",
      },
      { property: "og:title", content: "Talk To HaulMind — Book A Fleet Walkthrough" },
      {
        property: "og:description",
        content: "Book a walkthrough of HaulMind on your own lanes, units and paperwork.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <SiteShell>
      <section className="relative isolate -mt-20 overflow-hidden pt-40 pb-20">
        <img
          src={dispatchRoom}
          alt="Freight planners at work in a control room"
          width={1408}
          height={1008}
          className="absolute inset-0 size-full object-cover opacity-50"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(110deg, oklch(0.23 0.036 236 / 96%), oklch(0.24 0.038 234 / 70%))",
          }}
        />
        <div className="relative mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[1fr_1fr] lg:px-8">
          <Reveal>
            <p className="eyebrow">Start a conversation</p>
            <h1 className="mt-5 text-4xl leading-[1.06] font-bold sm:text-5xl">
              Tell us how your fleet{" "}
              <span className="text-brass-gradient">runs today.</span>
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground">
              We will bring your lanes, units and forms into a working walkthrough — no slide deck,
              no generic demo data.
            </p>

            <div className="mt-10 space-y-5">
              {[
                [MapPin, "Unit 8, Chandler Works, Brampton, ON"],
                [PhoneCall, "+1 (905) 402‑7718 · Mon–Sat, 07:00–19:00 ET"],
                [Mail, "hello@haulmind.app"],
              ].map(([Icon, text], i) => {
                const Ic = Icon as typeof MapPin;
                return (
                  <div key={i} className="flex items-center gap-4">
                    <span className="flex size-10 items-center justify-center rounded-lg border border-brass/40 bg-surface/70">
                      <Ic className="size-4 text-brass" />
                    </span>
                    <p className="text-sm text-muted-foreground">{text as string}</p>
                  </div>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="surface-panel rounded-xl p-7"
            >
              <h2 className="text-xl font-bold">Book a walkthrough</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                A specialist replies within one working day.
              </p>

              <div className="mt-7 space-y-4">
                {[
                  { id: "name", label: "Your name", type: "text", ph: "Jaskaran Sidhu" },
                  { id: "company", label: "Carrier name", type: "text", ph: "Northline Transport" },
                  { id: "email", label: "Work email", type: "email", ph: "you@carrier.com" },
                  { id: "fleet", label: "Power units", type: "text", ph: "e.g. 46 tractors" },
                ].map((f) => (
                  <div key={f.id}>
                    <label htmlFor={f.id} className="text-xs font-semibold text-muted-foreground">
                      {f.label}
                    </label>
                    <input
                      id={f.id}
                      type={f.type}
                      required
                      placeholder={f.ph}
                      className="mt-2 w-full rounded-md border border-input bg-surface-2/60 px-4 py-3 text-sm outline-none placeholder:text-muted-foreground/60 focus:border-brass"
                    />
                  </div>
                ))}
                <div>
                  <label htmlFor="notes" className="text-xs font-semibold text-muted-foreground">
                    What hurts most right now?
                  </label>
                  <textarea
                    id="notes"
                    rows={4}
                    placeholder="Paperwork, empty miles, duty hours, workshop delays…"
                    className="mt-2 w-full resize-none rounded-md border border-input bg-surface-2/60 px-4 py-3 text-sm outline-none placeholder:text-muted-foreground/60 focus:border-brass"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-7 w-full rounded-md py-3 text-sm font-bold text-primary-foreground transition-transform hover:-translate-y-0.5"
                style={{
                  backgroundImage: "var(--gradient-brass)",
                  boxShadow: "var(--shadow-brass)",
                }}
              >
                {sent ? "Request received — talk soon" : "Send request"}
              </button>
              {sent && (
                <p className="mt-3 text-center text-xs text-brass">
                  Thanks. We will be in touch within one working day.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </section>

      <VideoBand
        src={videoDepot.url}
        eyebrow="What happens next"
        title="A walkthrough on your own freight."
        copy="Thirty minutes, your lanes on screen, and an honest read on where HaulMind would and would not help."
        height="h-[52vh]"
      />

      <section className="py-24">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 md:grid-cols-3 lg:px-8">
          {[
            ["Day one", "A short call to understand your lanes, units and current tooling."],
            ["Day three", "A walkthrough built on a slice of your own operating history."],
            ["Week two", "A pilot on a handful of tractors, with your crew in the loop."],
          ].map(([h, c], i) => (
            <Reveal key={h} delay={i * 80}>
              <div className="h-full rounded-xl border border-border bg-surface/70 p-7">
                <p className="eyebrow">{h}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{c}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mx-auto mt-14 max-w-7xl px-5 lg:px-8">
          <Reveal>
            <img
              src={depot}
              alt="Trailer yard at sunrise"
              loading="lazy"
              width={1408}
              height={1008}
              className="w-full rounded-xl border border-border object-cover"
            />
          </Reveal>
        </div>
      </section>
    </SiteShell>
  );
}
