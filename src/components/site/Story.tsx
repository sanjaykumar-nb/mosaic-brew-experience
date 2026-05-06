import { Reveal, SectionLabel } from "./Reveal";
import hands from "@/assets/hands.jpg";
import latte from "@/assets/latte.jpg";

const stats = [
  { v: "12", l: "Years brewing" },
  { v: "8", l: "Single-origin beans" },
  { v: "40+", l: "Daily fresh bakes" },
];

export function Story() {
  return (
    <section id="story" className="relative overflow-hidden bg-background py-28 md:py-36">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-2 md:gap-20 md:px-10 lg:gap-28">
        <Reveal className="relative">
          <div className="relative">
            <img src={hands} alt="Hands holding coffee" loading="lazy" className="aspect-[4/5] w-full rounded-3xl object-cover shadow-elegant" />
            <img src={latte} alt="Latte art" loading="lazy" className="absolute -bottom-12 -right-6 hidden aspect-[3/4] w-44 rounded-2xl object-cover shadow-elegant md:block float-slow" />
            <div className="absolute -left-6 top-10 hidden rounded-2xl glass px-5 py-4 shadow-soft md:block">
              <div className="font-display text-2xl text-primary">12<span className="text-accent">.</span></div>
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">years brewed with love</div>
            </div>
          </div>
        </Reveal>

        <div className="flex flex-col justify-center">
          <Reveal>
            <SectionLabel>Our Story</SectionLabel>
            <h2 className="font-display text-4xl font-medium leading-tight md:text-5xl lg:text-6xl text-balance">
              A café born from <span className="italic text-gradient-gold">slow mornings</span> & shared conversations.
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
              Mosaic Brew began as a tiny corner shop with a single espresso machine and a stubborn belief: that a great cup of coffee can change the shape of a day. A decade later, we still roast in small batches, knead our croissants by hand, and remember your usual.
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Whether you're a student deep in a thesis, a couple on a slow Sunday, or a regular on your fourth refill — there's a seat with your name on it.
            </p>
          </Reveal>

          <Reveal delay={0.35}>
            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-border pt-8">
              {stats.map((s) => (
                <div key={s.l}>
                  <div className="font-display text-3xl font-medium text-primary md:text-4xl">{s.v}</div>
                  <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.l}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
