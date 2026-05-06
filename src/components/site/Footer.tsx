import { Coffee, Instagram, Facebook, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative overflow-hidden gradient-espresso text-cream">
      {/* Marquee */}
      <div className="border-y border-cream/10 py-8 overflow-hidden">
        <div className="marquee-track flex whitespace-nowrap">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex items-center gap-12 px-6">
              {["Slow Brewed", "Hand Crafted", "Locally Roasted", "Fresh Daily", "Made With Care", "Served With Love", "Slow Brewed", "Hand Crafted"].map((t, i) => (
                <span key={i} className="flex items-center gap-12 font-display text-3xl text-cream/60 md:text-5xl">
                  {t}
                  <span className="h-2 w-2 rounded-full bg-gold" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-gold text-charcoal">
                <Coffee className="h-5 w-5" />
              </span>
              <span className="font-display text-2xl">Mosaic Brew</span>
            </div>
            <p className="mt-6 max-w-md text-cream/70">
              A small café with a big heart, serving slow-brewed coffee and warm bakes to a city we love.
            </p>
            <div className="mt-6 flex gap-3">
              {[Instagram, Facebook, MapPin].map((Icon, i) => (
                <a key={i} href="#" className="grid h-11 w-11 place-items-center rounded-full border border-cream/20 transition-all hover:bg-gold hover:text-charcoal hover:border-gold">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="text-[10px] font-medium uppercase tracking-[0.3em] text-gold">Visit</div>
            <ul className="mt-4 space-y-2 text-sm text-cream/75">
              <li>24 Oak Street</li>
              <li>Grand Arcade, Chennai</li>
              <li>Tamil Nadu 600001</li>
              <li className="pt-2">+91 98765 43210</li>
            </ul>
          </div>

          <div>
            <div className="text-[10px] font-medium uppercase tracking-[0.3em] text-gold">Hours</div>
            <ul className="mt-4 space-y-2 text-sm text-cream/75">
              <li>Mon – Fri · 8 AM – 10:30 PM</li>
              <li>Sat – Sun · 8 AM – 11 PM</li>
              <li className="pt-2">Kitchen closes at 10 PM</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-cream/10 pt-8 md:flex-row">
          <div className="text-xs text-cream/50">© 2026 Mosaic Brew Café. All rights reserved.</div>
          <div className="font-display italic text-cream/70">Brewed slowly. Served beautifully.</div>
        </div>
      </div>
    </footer>
  );
}
