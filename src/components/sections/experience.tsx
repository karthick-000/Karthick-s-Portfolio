import { workExperience } from '@/lib/data';
import { SectionHeading } from '../section-heading';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

export default function ExperienceSection() {
  return (
    <section id="experience" className="container">
      <SectionHeading title="Work Experience" />
      <div className="relative pl-6 after:absolute after:inset-y-0 after:w-px after:bg-muted-foreground/20 after:left-0">
        {workExperience.map((exp, index) => (
          <div key={index} className="relative mb-8">
            <div className="absolute left-[-24px] top-1/2 -translate-y-1/2 w-3 h-3 bg-primary rounded-full"></div>
            <Card className="ml-8">
              <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                <div>
                  <CardTitle>{exp.role}</CardTitle>
                  <p className="text-muted-foreground mt-1">{exp.company}</p>
                </div>
                <p className="text-sm text-muted-foreground sm:ml-auto shrink-0">{exp.period}</p>
              </CardHeader>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}
