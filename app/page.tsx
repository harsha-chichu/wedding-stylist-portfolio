import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Philosophy from "@/components/Philosophy";
import WhyStylist from "@/components/WhyStylist";
import Journey from "@/components/Journey";
import Services from "@/components/Services";
import Moodboards from "@/components/Moodboards";
import Portfolio from "@/components/Portfolio";
import Vendors from "@/components/Vendors";
import Checklist from "@/components/Checklist";
import Packages from "@/components/Packages";
import Partners from "@/components/Partners";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";
import RevealInit from "@/components/RevealInit";
import { ZariDivider } from "@/components/motifs";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <ZariDivider />
        <Philosophy />
        <WhyStylist />
        <ZariDivider motif="gopuram" />
        <Journey />
        <Services />
        <Moodboards />
        <ZariDivider />
        <Portfolio />
        <Vendors />
        <Checklist />
        <ZariDivider />
        <Packages />
        <Partners />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
      <RevealInit />
    </>
  );
}
