import { Toaster } from "@/components/ui/sonner";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Story } from "@/components/site/Story";
import { Menu } from "@/components/site/Menu";
import { Gallery } from "@/components/site/Gallery";
import { Events } from "@/components/site/Events";
import { Testimonials } from "@/components/site/Testimonials";
import { Reserve } from "@/components/site/Reserve";
import { Visit } from "@/components/site/Visit";
import { Footer } from "@/components/site/Footer";

export function App() {
  return (
    <main id="top" className="bg-background text-foreground">
      <Nav />
      <Hero />
      <Story />
      <Menu />
      <Gallery />
      <Events />
      <Testimonials />
      <Reserve />
      <Visit />
      <Footer />
      <Toaster position="top-center" />
    </main>
  );
}