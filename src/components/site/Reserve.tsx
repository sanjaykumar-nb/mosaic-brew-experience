import { useState } from "react";
import { motion } from "framer-motion";
import { Reveal, SectionLabel } from "./Reveal";
import { Phone, ShoppingBag, Calendar, ArrowRight } from "lucide-react";
import { toast } from "sonner";

export function Reserve() {
  const [data, setData] = useState({ name: "", date: "", time: "19:00", guests: "2", phone: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Reservation requested", { description: `We'll confirm your table for ${data.guests} shortly.` });
    setData({ name: "", date: "", time: "19:00", guests: "2", phone: "" });
  };

  const fields = [
    { k: "name", label: "Your name", type: "text", placeholder: "Jane Doe", col: "md:col-span-2" },
    { k: "date", label: "Date", type: "date" },
    { k: "time", label: "Time", type: "time" },
    { k: "guests", label: "Guests", type: "number" },
    { k: "phone", label: "Phone", type: "tel", placeholder: "+91 ..." },
  ] as const;

  return (
    <section id="reserve" className="relative overflow-hidden bg-secondary py-28 md:py-36">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 md:grid-cols-2 md:px-10 lg:gap-24">
        <div>
          <Reveal>
            <SectionLabel>Reserve · Order · Visit</SectionLabel>
            <h2 className="font-display text-4xl font-medium leading-tight md:text-5xl lg:text-6xl text-balance">
              Save a seat by the <span className="italic text-gradient-gold">window</span>.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-md text-lg text-muted-foreground">
              Pop in for an espresso, settle in for a long brunch, or book the corner table for something special.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-10 flex flex-col gap-3">
              {[
                { icon: ShoppingBag, label: "Order online", sub: "Delivery & pickup in 30 min" },
                { icon: Phone, label: "Call now", sub: "+91 98765 43210" },
                { icon: Calendar, label: "Private events", sub: "Host your evening with us" },
              ].map((a) => (
                <motion.a
                  key={a.label}
                  href="#"
                  whileHover={{ x: 6 }}
                  className="group flex items-center justify-between rounded-2xl border border-border bg-card px-5 py-4 transition-all hover:border-primary"
                >
                  <div className="flex items-center gap-4">
                    <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/5 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <a.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold">{a.label}</div>
                      <div className="text-xs text-muted-foreground">{a.sub}</div>
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1" />
                </motion.a>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <form onSubmit={submit} className="rounded-3xl border border-border bg-card p-8 shadow-elegant md:p-10">
            <h3 className="font-display text-2xl font-medium">Reserve a table</h3>
            <p className="mt-1 text-sm text-muted-foreground">Free · instant confirmation</p>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {fields.map((f) => (
                <div key={f.k} className={f.col ?? ""}>
                  <label className="mb-2 block text-[10px] font-medium uppercase tracking-widest text-muted-foreground">{f.label}</label>
                  <input
                    type={f.type}
                    required
                    placeholder={"placeholder" in f ? (f.placeholder as string) : undefined}
                    value={(data as Record<string, string>)[f.k]}
                    onChange={(e) => setData({ ...data, [f.k]: e.target.value })}
                    className="w-full rounded-xl border border-border bg-background px-4 py-3.5 text-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/15"
                  />
                </div>
              ))}
            </div>

            <button type="submit" className="mt-8 group inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary py-4 text-sm font-medium text-primary-foreground shadow-soft transition-all hover:scale-[1.02]">
              Confirm reservation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
