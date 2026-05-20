import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Statement from "@/components/Statement";
import WorkGrid from "@/components/WorkGrid";
import About from "@/components/About";
import Marquee from "@/components/Marquee";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Statement />
      <WorkGrid />
      <About />
      <Marquee />
      <Contact />
      <Footer />
    </main>
  );
}
