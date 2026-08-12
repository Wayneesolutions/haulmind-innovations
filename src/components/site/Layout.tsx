import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Reveal } from "./Reveal";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  copy,
  align = "left",
}: {
  eyebrow: string;
  title: ReactNode;
  copy?: string;
  align?: "left" | "center";
}) {
  return (
    <Reveal className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-4 text-3xl leading-tight font-bold sm:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      {copy && <p className="mt-5 text-base leading-relaxed text-muted-foreground">{copy}</p>}
    </Reveal>
  );
}

export function VideoBand({
  src,
  poster,
  eyebrow,
  title,
  copy,
  height = "h-[70vh]",
}: {
  src: string;
  poster?: string;
  eyebrow: string;
  title: string;
  copy: string;
  height?: string;
}) {
  return (
    <section className={`relative isolate w-full overflow-hidden ${height}`}>
      <video
        className="absolute inset-0 size-full object-cover"
        src={src}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, oklch(0.24 0.038 234 / 92%) 10%, oklch(0.24 0.038 234 / 55%) 60%, oklch(0.24 0.038 234 / 85%))",
        }}
      />
      <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-center px-5 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="mt-4 text-3xl leading-tight font-bold sm:text-5xl">{title}</h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">{copy}</p>
        </Reveal>
      </div>
    </section>
  );
}

export function ClosingCall({
  title,
  copy,
  image,
}: {
  title: string;
  copy: string;
  image: string;
}) {
  return (
    <section className="relative isolate overflow-hidden py-24">
      <img
        src={image}
        alt="Freight fleet operating at dusk"
        loading="lazy"
        className="absolute inset-0 size-full object-cover opacity-35"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(70% 90% at 50% 0%, oklch(0.29 0.04 234 / 70%), oklch(0.23 0.036 236 / 96%))",
        }}
      />
      <div className="relative mx-auto max-w-4xl px-5 text-center lg:px-8">
        <Reveal>
          <h2 className="text-3xl leading-tight font-bold sm:text-5xl">{title}</h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {copy}
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="rounded-md px-6 py-3 text-sm font-bold text-primary-foreground transition-transform hover:-translate-y-0.5"
              style={{ backgroundImage: "var(--gradient-brass)", boxShadow: "var(--shadow-brass)" }}
            >
              Book A Walkthrough
            </Link>
            <Link
              to="/ai-engine"
              className="rounded-md border border-border px-6 py-3 text-sm font-bold transition-colors hover:border-brass hover:text-brass"
            >
              Tour The AI Engine
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
