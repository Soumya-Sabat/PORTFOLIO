import { AboutSection } from "@/components/portfolio/AboutSection";
import { CertificationsSection } from "@/components/portfolio/CertificationsSection";
import { ContactSection } from "@/components/portfolio/ContactSection";
import { EducationSection } from "@/components/portfolio/EducationSection";
import { Footer } from "@/components/portfolio/Footer";
import { HackathonsSection } from "@/components/portfolio/HackathonsSection";
import { HeroSection } from "@/components/portfolio/HeroSection";
import { Navbar } from "@/components/portfolio/Navbar";
import { ShowcaseSection } from "@/components/portfolio/ShowcaseSection";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050607] text-zinc-100">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ShowcaseSection />
      <EducationSection />
      <CertificationsSection />
      <HackathonsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
