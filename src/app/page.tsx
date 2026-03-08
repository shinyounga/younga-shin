"use client";

import { LangProvider } from "@/lib/useLang";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import PublicationsSection from "@/components/sections/PublicationsSection";
import FilmographySection from "@/components/sections/FilmographySection";
import AwardsSection from "@/components/sections/AwardsSection";
import CertificationsSection from "@/components/sections/CertificationsSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <LangProvider>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <PublicationsSection />
        <AwardsSection />
        <FilmographySection />
        <CertificationsSection />
        <ContactSection />
      </main>
      <Footer />
    </LangProvider>
  );
}
