import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Coffee, Menu, X } from "lucide-react";

const links = [
  { label: "Story", href: "#story" },
  { label: "Menu", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "Events", href: "#events" },
  { label: "Visit", href: "#visit" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-[padding] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${scrolled ? "py-2" : "py-5"}`}
    >
      <div style={{ transitionProperty: "background-color, color, backdrop-filter, border-color, border-radius, padding, box-shadow", transitionDuration: "700ms", transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)" }} className={`mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 md:px-10 ${scrolled ? "glass rounded-full py-2 text-foreground shadow-soft" : "py-1 text-cream rounded-none"}`}>
        <a href="#top" className="flex items-center gap-2 group shrink-0">
          <span className={`grid h-9 w-9 place-items-center rounded-full transition-all group-hover:rotate-12 ${scrolled ? "bg-primary text-primary-foreground" : "bg-cream text-charcoal"}`}>
            <Coffee className="h-4 w-4" />
          </span>
          <span className="font-display text-lg font-semibold tracking-tight">Mosaic Brew</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className={`relative text-sm font-medium transition-colors after:absolute after:left-0 after:bottom-[-6px] after:h-px after:w-0 after:bg-accent after:transition-all hover:after:w-full ${scrolled ? "text-foreground/75 hover:text-foreground" : "text-cream/85 hover:text-cream"}`}>
              {l.label}
            </a>
          ))}
        </nav>

        <a href="#reserve" className={`hidden md:inline-flex items-center rounded-full px-5 py-2.5 text-sm font-medium shadow-soft transition-all hover:scale-105 hover:shadow-elegant ${scrolled ? "bg-primary text-primary-foreground" : "bg-cream text-charcoal"}`}>
          Reserve
        </a>

        <button onClick={() => setOpen(!open)} className={`md:hidden grid h-10 w-10 place-items-center rounded-full ${scrolled ? "glass text-foreground" : "bg-cream/15 backdrop-blur-md border border-cream/25 text-cream"}`}>
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="md:hidden mx-4 mt-2 glass rounded-3xl p-6">
            <div className="flex flex-col gap-4">
              {links.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-base font-medium">{l.label}</a>
              ))}
              <a href="#reserve" onClick={() => setOpen(false)} className="mt-2 rounded-full bg-primary px-5 py-3 text-center text-sm font-medium text-primary-foreground">Reserve a Table</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
