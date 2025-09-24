import HeroSection from '@/components/sections/hero';
import AboutSection from '@/components/sections/about';
import SkillsSection from '@/components/sections/skills';
import ProjectsSection from '@/components/sections/projects';
import ExperienceSection from '@/components/sections/experience';
import EducationSection from '@/components/sections/education';
import CertificationsSection from '@/components/sections/certifications';
import ContactSection from '@/components/sections/contact';
import InternshipsSection from '@/components/sections/internships';

export default function Home() {
  return (
    <div className="flex flex-col gap-16 md:gap-24">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <InternshipsSection />
      <EducationSection />
      <CertificationsSection />
      <ContactSection />
    </div>
  );
}
