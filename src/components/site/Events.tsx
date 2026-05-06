import { motion } from "framer-motion";
import { Reveal, SectionLabel } from "./Reveal";
import { Calendar, Music, Coffee, Sun } from "lucide-react";
import event from "@/assets/event.jpg";

const events = [
  { icon: Music, title: "Acoustic Coffee Night", when: "Every Friday · 7:00 PM", desc: "Live local artists, a quiet room, your favourite cup." },
  { icon: Sun, title: "Sunday Brunch Special", when: "Sundays · 10 AM – 1 PM", desc: "Bottomless filter coffee with a curated brunch board." },
  { icon: Coffee, title: "Pumpkin Latte Week", when: "Oct 15 – Oct 22", desc: "Our beloved seasonal blend returns with new bakes." },
  { icon: Calendar, title: "Open Mic Mornings", when: "First Saturday · 9 AM", desc: "Poetry, stories, songs — over warm croissants." },
];

export function Events() {
  return (
    <section id="events" className="relative overflow-hidden gradient-espresso py-28 text-cream md:py-36">
      <div className="absolute inset-0 opacity-20">
        <img src={event} alt="" loading="lazy" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-charcoal/60" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <Reveal>
              <SectionLabel>What's On</SectionLabel>
              <h2 className="max-w-2xl font-display text-4xl font-medium leading-tight md:text-5xl lg:text-6xl text-balance">
                Seasonal moments, <span className="italic text-gradient-gold">small rituals</span>.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="max-w-md text-cream/70">A small calendar of evenings, mornings and weeks worth showing up for.</p>
          </Reveal>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {events.map((e, i) => (
            <motion.div
              key={e.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-3xl glass-dark p-8 transition-all hover:border-gold/40"
            >
              <div className="flex items-start gap-5">
                <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gold/15 text-gold transition-all group-hover:scale-110 group-hover:bg-gold group-hover:text-charcoal">
                  <e.icon className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <div className="text-[10px] uppercase tracking-[0.3em] text-gold">{e.when}</div>
                  <h3 className="mt-2 font-display text-2xl font-medium">{e.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-cream/70">{e.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
