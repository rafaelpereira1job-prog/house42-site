/**
 * House 42 — Home Page
 * Design: Dark Sport Luxury / All-Star Weekend
 * Sections: Navbar → Hero → Ticker → Performance → Services → Results → Manifesto → Teams → Contact → Footer
 */

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import PerformanceSection from "@/components/PerformanceSection";
import ServicesSection from "@/components/ServicesSection";
import ResultsSection from "@/components/ResultsSection";
import ManifestoSection from "@/components/ManifestoSection";
import FounderSection from "@/components/FounderSection";
import TeamsSection from "@/components/TeamsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#080808]">
      <Navbar />
      <Hero />
      <Ticker />
      <PerformanceSection />
      <ServicesSection />
      <ResultsSection />
      <ManifestoSection />
      <FounderSection />
      <TeamsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
