import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Star, MapPin, Clock, ArrowRight } from "lucide-react";
import hero from "@/assets/hero.jpg";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} id="top" className="relative min-h-screen overflow-hidden bg-charcoal text-cream">
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <img src={hero} alt="Barista pouring latte art" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-charcoal/55 to-charcoal" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/70 via-transparent to-transparent" />
      </motion.div>

      {/* Steam particles */}
      <div className="pointer-events-none absolute left-[20%] bottom-[35%]">
        <span className="steam" style={{ animationDelay: "0s" }} />
        <span className="steam absolute left-3" style={{ animationDelay: "1.2s" }} />
        <span className="steam absolute left-6" style={{ animationDelay: "2.4s" }} />
      </div>

      <motion.div style={{ opacity }} className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-end px-6 pb-24 pt-40 md:px-10 md:pb-32">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.8 }} className="mb-6 flex items-center gap-3">
          <span className="h-px w-12 bg-gold" />
          <span className="text-xs uppercase tracking-[0.3em] text-gold">Est. 2014 · Chennai</span>
        </motion.div>

        <h1 className="max-w-4xl font-display text-5xl font-medium leading-[1.05] text-balance md:text-7xl lg:text-[5.5rem]">
          {"Slow mornings,".split(" ").map((w, i) => (
            <motion.span key={i} initial={{ y: 60, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 + i * 0.1, duration: 0.9, ease: [0.22, 1, 0.36, 1] }} className="mr-3 inline-block">{w}</motion.span>
          ))}
          <br />
          {"crafted in".split(" ").map((w, i) => (
            <motion.span key={i} initial={{ y: 60, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5 + i * 0.1, duration: 0.9, ease: [0.22, 1, 0.36, 1] }} className="mr-3 inline-block">{w}</motion.span>
          ))}
          <motion.span initial={{ y: 60, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.8, duration: 0.9, ease: [0.22, 1, 0.36, 1] }} className="inline-block italic text-gradient-gold">every cup.</motion.span>
        </h1>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1, duration: 0.8 }} className="mt-8 max-w-xl text-lg text-cream/75 md:text-xl">
          A neighbourhood café where artisan coffee meets quiet conversation, fresh bakes, and the warmth of being known by name.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.3, duration: 0.8 }} className="mt-10 flex flex-wrap items-center gap-4">
          <a href="#reserve" className="group inline-flex items-center gap-2 rounded-full bg-cream px-7 py-4 text-sm font-medium text-charcoal shadow-elegant transition-all hover:scale-105">
            Reserve a Table
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a href="#menu" className="inline-flex items-center gap-2 rounded-full border border-cream/30 px-7 py-4 text-sm font-medium text-cream transition-all hover:bg-cream/10">
            View Menu
          </a>
        </motion.div>

        {/* Highlight strip */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.6, duration: 0.8 }} className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl glass-dark sm:grid-cols-3">
          {[
            { icon: Clock, label: "Open today", value: "8:00 AM – 10:30 PM" },
            { icon: MapPin, label: "Find us at", value: "Grand Arcade, Chennai" },
            { icon: Star, label: "Rated", value: "4.9 · 2,300 reviews" },
          ].map((it, i) => (
            <div key={i} className="flex items-center gap-4 px-6 py-5">
              <it.icon className="h-5 w-5 text-gold" />
              <div>
                <div className="text-[10px] uppercase tracking-widest text-cream/50">{it.label}</div>
                <div className="text-sm font-medium text-cream">{it.value}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }} className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-[10px] uppercase tracking-[0.4em] text-cream/50">
        Scroll
      </motion.div>
    </section>
  );
}
