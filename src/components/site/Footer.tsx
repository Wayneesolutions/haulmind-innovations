import { Link } from "@tanstack/react-router";
import { Mail, MapPin, PhoneCall } from "lucide-react";
import logo from "@/assets/haulmind-logo.png.asset.json";

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-surface/60">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <img
              src={logo.url}
              alt="HaulMind logo"
              width={44}
              height={44}
              loading="lazy"
              className="h-11 w-11 rounded-md object-cover"
              style={{ objectPosition: "50% 32%" }}
            />
            <span className="font-display text-lg font-bold">
              Haul<span className="text-brass">Mind</span>
            </span>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
            HaulMind is the reasoning layer for road freight — one workspace where dispatch,
            documents, roadworthiness and driver hours stay in agreement.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-bold tracking-wide">Product</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li>
              <Link to="/ai-engine" className="hover:text-brass">
                AI Engine
              </Link>
            </li>
            <li>
              <Link to="/manifests" className="hover:text-brass">
                Manifests
              </Link>
            </li>
            <li>
              <Link to="/compliance" className="hover:text-brass">
                Compliance
              </Link>
            </li>
            <li>
              <Link to="/driver-app" className="hover:text-brass">
                Driver App
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold tracking-wide">Company</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li>
              <Link to="/contact" className="hover:text-brass">
                Talk to a specialist
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-brass">
                Operator sign-in
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-brass">
                Partner programme
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold tracking-wide">Reach The Team</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-brass" />
              Unit 8, Chandler Works, Brampton, ON
            </li>
            <li className="flex gap-3">
              <PhoneCall className="mt-0.5 size-4 shrink-0 text-brass" />
              +1 (905) 402‑7718
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 size-4 shrink-0 text-brass" />
              hello@haulmind.app
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border px-5 py-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} HaulMind Systems. Every right reserved.</p>
          <p>Built for carriers who measure everything.</p>
        </div>
      </div>
    </footer>
  );
}
