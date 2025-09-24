import { aboutData } from '@/lib/data';
import { SectionHeading } from '../section-heading';
import { AiSummaryGenerator } from '../ai-summary-generator';

export default function AboutSection() {
  return (
    <section id="about" className="container">
      <SectionHeading title="About Me" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold font-headline">Career Objective</h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {aboutData.careerObjective}
          </p>
        </div>
        <div className="flex items-center">
          <AiSummaryGenerator />
        </div>
      </div>
    </section>
  );
}
