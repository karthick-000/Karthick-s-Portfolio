import HeroSection from '@/components/sections/hero';
import AboutSection from '@/components/sections/about';
import SkillsSection from '@/components/sections/skills';
import ProjectsSection from '@/components/sections/projects';
import ExperienceSection from '@/components/sections/experience';
import EducationSection from '@/components/sections/education';
import CertificationsSection from '@/components/sections/certifications';
import ContactSection from '@/components/sections/contact';
import InternshipsSection from '@/components/sections/internships';
import AchievementsSection from '@/components/sections/achievements';
import InterestsSection from '@/components/sections/interests';

// Placeholder sections
const PlaceholderSection = ({ id, title }: { id: string, title: string }) => (
  <section id={id} className="container py-16 text-center">
    <h2 className="text-3xl font-bold">{title}</h2>
    <p className="mt-4 text-muted-foreground">This section is under construction.</p>
  </section>
);


export default function Home() {
  return (
    <div className="flex flex-col gap-16 md:gap-24">
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <AchievementsSection />
      <CertificationsSection />
      <InternshipsSection />
      <InterestsSection />
      <ContactSection />
    </div>
  );
}
