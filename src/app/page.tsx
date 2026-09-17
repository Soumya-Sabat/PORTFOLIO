import { AboutSection } from "@/components/portfolio/AboutSection";
import { CertificationsSection } from "@/components/portfolio/CertificationsSection";
import { ContactSection } from "@/components/portfolio/ContactSection";
import { EducationSection } from "@/components/portfolio/EducationSection";
import { Footer } from "@/components/portfolio/Footer";
import { HackathonsSection } from "@/components/portfolio/HackathonsSection";
import { HeroSection } from "@/components/portfolio/HeroSection";
import { Navbar } from "@/components/portfolio/Navbar";
import { ProfileLinksSection } from "@/components/portfolio/ProfileLinksSection";
import { ShowcaseSection } from "@/components/portfolio/ShowcaseSection";
import { SkillsSection } from "@/components/portfolio/SkillsSection";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#03140f] text-[#f8f1df]">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProfileLinksSection />
      <ShowcaseSection />
      <EducationSection />
      <CertificationsSection />
      <HackathonsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
