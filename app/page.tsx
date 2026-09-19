import { ArchitectureSection } from "@/components/ArchitectureSection";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { RocketSection } from "@/components/RocketSection";

export default function Home() {
  return (
    <main id="top" className="relative flex-1">
      <Navbar />
      <Hero />
      <div className="relative">
        <RocketSection />
        <ArchitectureSection />
      </div>
      <Footer />
    </main>
  );
}
