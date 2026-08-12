import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/haulmind-logo.png.asset.json";

const nav = [
  { to: "/", label: "Overview" },
  { to: "/ai-engine", label: "AI Engine" },
  { to: "/manifests", label: "Manifests" },
  { to: "/compliance", label: "Compliance" },
  { to: "/driver-app", label: "Driver App" },
  { to: "/contact", label: "Talk To Us" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [lifted, setLifted] = useState(false);

  useEffect(() => {
    const onScroll = () => setLifted(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        lifted ? "bg-background/92 border-b border-border backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 lg:px-8">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img
            src={logo.url}
            alt="HaulMind AI-powered trucking software"
            width={44}
            height={44}
            className="h-11 w-11 rounded-md object-cover"
            style={{ objectPosition: "50% 32%" }}
          />
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg font-bold tracking-tight">
              Haul<span className="text-brass">Mind</span>
            </span>
            <span className="mt-1 text-[0.6rem] font-semibold tracking-[0.22em] text-muted-foreground uppercase">
              Fleet Intelligence
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="rounded-md px-3 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:bg-surface hover:text-foreground data-[status=active]:text-brass"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            to="/contact"
            className="rounded-md border border-border px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:border-brass hover:text-brass"
          >
            Operator Sign-In
          </Link>
          <Link
            to="/contact"
            className="rounded-md px-4 py-2 text-sm font-bold text-primary-foreground transition-transform hover:-translate-y-0.5"
            style={{ backgroundImage: "var(--gradient-brass)", boxShadow: "var(--shadow-brass)" }}
          >
            Book A Walkthrough
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setOpen((v) => !v)}
          className="rounded-md border border-border p-2 text-foreground lg:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background/98 px-5 pb-6 backdrop-blur-xl lg:hidden">
          <nav className="flex flex-col py-2">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="border-b border-border/60 py-3 text-sm font-semibold text-muted-foreground data-[status=active]:text-brass"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="mt-4 block rounded-md py-3 text-center text-sm font-bold text-primary-foreground"
            style={{ backgroundImage: "var(--gradient-brass)" }}
          >
            Book A Walkthrough
          </Link>
        </div>
      )}
    </header>
  );
}
