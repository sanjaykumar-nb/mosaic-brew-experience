import { Reveal, SectionLabel } from "./Reveal";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Coffee } from "lucide-react";

export function Visit() {
  return (
    <section id="visit" className="relative bg-background py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid gap-12 md:grid-cols-5 lg:gap-16">
          <div className="md:col-span-2">
            <Reveal>
              <SectionLabel>Find Us</SectionLabel>
              <h2 className="font-display text-4xl font-medium leading-tight md:text-5xl text-balance">
                Tucked into Grand Arcade, on a quiet stretch of <span className="italic text-gradient-gold">Oak Street</span>.
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-10 space-y-5">
                {[
                  { icon: MapPin, label: "24 Oak Street, Grand Arcade", sub: "Chennai, Tamil Nadu 600001" },
                  { icon: Clock, label: "Mon – Sun · 8:00 AM – 10:30 PM", sub: "Kitchen closes at 10 PM" },
                  { icon: Phone, label: "+91 98765 43210", sub: "Call to book a private space" },
                  { icon: Mail, label: "hello@mosaicbrewcafe.com", sub: "We reply within a day" },
                ].map((it, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/5 text-primary">
                      <it.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">{it.label}</div>
                      <div className="text-sm text-muted-foreground">{it.sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2} className="md:col-span-3">
            <div className="relative h-[420px] overflow-hidden rounded-3xl border border-border shadow-elegant md:h-full">
              {/* Stylized map placeholder */}
              <div className="absolute inset-0 gradient-warm" />
              <svg className="absolute inset-0 h-full w-full" viewBox="0 0 600 500" fill="none" preserveAspectRatio="xMidYMid slice">
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="oklch(0.28 0.04 45 / 0.08)" strokeWidth="1" />
                  </pattern>
                </defs>
                <rect width="600" height="500" fill="url(#grid)" />
                <path d="M0 280 Q150 240 300 290 T600 270" stroke="oklch(0.28 0.04 45 / 0.25)" strokeWidth="14" fill="none" strokeLinecap="round" />
                <path d="M180 0 L210 500" stroke="oklch(0.28 0.04 45 / 0.2)" strokeWidth="10" fill="none" />
                <path d="M450 0 L420 500" stroke="oklch(0.28 0.04 45 / 0.2)" strokeWidth="10" fill="none" />
                <circle cx="300" cy="270" r="40" fill="oklch(0.72 0.13 75 / 0.2)" />
                <circle cx="300" cy="270" r="20" fill="oklch(0.72 0.13 75 / 0.4)" />
              </svg>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <div className="absolute inset-0 animate-ping rounded-full bg-accent/40" />
                  <div className="relative grid h-14 w-14 place-items-center rounded-full bg-primary text-primary-foreground shadow-elegant">
                    <Coffee className="h-6 w-6" />
                  </div>
                </div>
              </div>
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between rounded-2xl glass px-5 py-4">
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Mosaic Brew Café</div>
                  <div className="font-display text-lg font-medium">24 Oak Street</div>
                </div>
                <div className="flex gap-2">
                  <a href="#" className="grid h-10 w-10 place-items-center rounded-full bg-primary text-primary-foreground transition-transform hover:scale-110"><Instagram className="h-4 w-4" /></a>
                  <a href="#" className="grid h-10 w-10 place-items-center rounded-full bg-primary text-primary-foreground transition-transform hover:scale-110"><Facebook className="h-4 w-4" /></a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
