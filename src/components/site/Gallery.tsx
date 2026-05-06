import { motion } from "framer-motion";
import { Reveal, SectionLabel } from "./Reveal";
import interior from "@/assets/interior.jpg";
import pastries from "@/assets/pastries.jpg";
import latte from "@/assets/latte.jpg";
import reading from "@/assets/reading.jpg";
import windowImg from "@/assets/window.jpg";
import event from "@/assets/event.jpg";

const tiles = [
  { src: interior, caption: "The main hall", span: "md:col-span-2 md:row-span-2" },
  { src: pastries, caption: "Daily bakes" },
  { src: latte, caption: "Latte art" },
  { src: reading, caption: "Reading nook", span: "md:row-span-2" },
  { src: windowImg, caption: "Window seats" },
  { src: event, caption: "Friday nights" },
];

export function Gallery() {
  return (
    <section id="gallery" className="relative bg-background py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-16 max-w-2xl">
          <Reveal>
            <SectionLabel>Step Inside</SectionLabel>
            <h2 className="font-display text-4xl font-medium leading-tight md:text-5xl lg:text-6xl text-balance">
              An atmosphere you can almost <span className="italic text-gradient-gold">taste</span>.
            </h2>
          </Reveal>
        </div>

        <div className="grid auto-rows-[180px] grid-cols-2 gap-4 md:auto-rows-[220px] md:grid-cols-4">
          {tiles.map((t, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative overflow-hidden rounded-3xl shadow-soft ${t.span ?? ""}`}
            >
              <img src={t.src} alt={t.caption} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/0 to-transparent opacity-70 transition-opacity group-hover:opacity-90" />
              <figcaption className="absolute bottom-4 left-4 right-4 translate-y-2 text-cream opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <div className="text-[10px] uppercase tracking-[0.3em] text-gold">Mosaic Brew</div>
                <div className="font-display text-lg">{t.caption}</div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
