import { motion } from "framer-motion";
import { Reveal, SectionLabel } from "./Reveal";
import { Coffee, Cake, Sandwich, Leaf } from "lucide-react";

const categories = ["Coffee", "Cold Brews", "Bakes", "Savoury"];

const items = [
  { name: "Espresso", desc: "Rich, bold, velvety. Single-origin Ethiopian beans, pulled to order.", price: "₹180", badge: "Chef's Pick", cat: "Coffee", icon: Coffee },
  { name: "Caramel Cappuccino", desc: "Smooth, creamy and crowned with house-made caramel ribbon.", price: "₹240", badge: "Popular", cat: "Coffee", icon: Coffee },
  { name: "Vanilla Cold Brew", desc: "Slow-steeped 18 hours, finished with Madagascar vanilla.", price: "₹260", cat: "Cold Brews", icon: Leaf },
  { name: "Matcha Latte", desc: "Ceremonial-grade matcha whisked with steamed oat milk.", price: "₹280", badge: "New", cat: "Cold Brews", icon: Leaf },
  { name: "Almond Croissant", desc: "Flaky, buttery laminated dough filled with frangipane.", price: "₹220", cat: "Bakes", icon: Cake },
  { name: "Blueberry Cheesecake", desc: "Soft, indulgent slice with wild blueberry compote.", price: "₹320", badge: "Popular", cat: "Bakes", icon: Cake },
  { name: "Truffle Mushroom Toast", desc: "Sourdough, wild mushrooms, black truffle, aged parmesan.", price: "₹420", badge: "Chef's Pick", cat: "Savoury", icon: Sandwich },
  { name: "Chocolate Fudge Brownie", desc: "Decadent, warm, served with a scoop of vanilla bean.", price: "₹260", cat: "Savoury", icon: Cake },
];

export function Menu() {
  return (
    <section id="menu" className="relative overflow-hidden bg-secondary py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <SectionLabel>The Menu</SectionLabel>
            <h2 className="max-w-2xl font-display text-4xl font-medium leading-tight md:text-5xl lg:text-6xl text-balance">
              Crafted small, served <span className="italic text-gradient-gold">slow</span>.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex flex-wrap gap-2">
              {categories.map((c, i) => (
                <span key={c} className={`rounded-full border px-4 py-2 text-xs font-medium transition-all ${i === 0 ? "border-primary bg-primary text-primary-foreground" : "border-border text-foreground/70 hover:border-primary"}`}>{c}</span>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <motion.div
              key={it.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: (i % 4) * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card p-6 transition-all hover:border-accent/50 hover:shadow-elegant"
            >
              {it.badge && (
                <span className="absolute right-4 top-4 rounded-full bg-accent/15 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-accent">{it.badge}</span>
              )}
              <div className="mb-6 grid h-14 w-14 place-items-center rounded-2xl bg-primary/5 text-primary transition-all group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110">
                <it.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground">{it.name}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{it.desc}</p>
              <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
                <span className="font-display text-lg font-medium text-primary">{it.price}</span>
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground">{it.cat}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-14 text-center">
            <a href="#reserve" className="inline-flex items-center gap-2 rounded-full border border-primary px-7 py-4 text-sm font-medium text-primary transition-all hover:bg-primary hover:text-primary-foreground">
              View full menu
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
