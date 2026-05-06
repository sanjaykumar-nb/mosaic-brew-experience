import { motion } from "framer-motion";
import { Reveal, SectionLabel } from "./Reveal";
import { Star, Quote } from "lucide-react";

const reviews = [
  { name: "Ananya R.", role: "Regular since 2019", rating: 5, text: "The best cappuccino in the area, hands down. The baristas remember my order and it always feels like coming home." },
  { name: "Karthik M.", role: "Writer", rating: 5, text: "Perfect place to study and unwind. The window seats catch the most beautiful late afternoon light." },
  { name: "Priya & Rohan", role: "Sunday regulars", rating: 5, text: "The ambience is beautiful and the desserts are amazing. The almond croissant alone is worth the trip." },
  { name: "Vikram S.", role: "Coffee snob (proudly)", rating: 5, text: "A genuine third-wave experience. Their single-origin pour-overs are a quiet kind of magic." },
];

export function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-background py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <SectionLabel>Loved Locally</SectionLabel>
          <h2 className="max-w-2xl font-display text-4xl font-medium leading-tight md:text-5xl lg:text-6xl text-balance">
            What our regulars <span className="italic text-gradient-gold">whisper</span> over coffee.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              className="group relative flex flex-col rounded-3xl border border-border bg-card p-7 transition-all hover:border-accent/50 hover:shadow-elegant"
            >
              <Quote className="h-7 w-7 text-accent/40" />
              <p className="mt-5 flex-1 text-[15px] leading-relaxed text-foreground/85">"{r.text}"</p>
              <div className="mt-6 flex items-center justify-between border-t border-border pt-5">
                <div>
                  <div className="text-sm font-semibold text-foreground">{r.name}</div>
                  <div className="text-xs text-muted-foreground">{r.role}</div>
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: r.rating }).map((_, j) => (
                    <Star key={j} className="h-3.5 w-3.5 fill-accent text-accent" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
