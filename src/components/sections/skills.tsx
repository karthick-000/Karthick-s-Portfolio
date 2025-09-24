import { skills } from '@/lib/data';
import { SectionHeading } from '../section-heading';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

export default function SkillsSection() {
  return (
    <section id="skills" className="container">
      <SectionHeading
        title="Technical Expertise"
        className="mb-8"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {skills.technical.map((category) => (
          <Card key={category.title} className="flex flex-col">
            <CardHeader className="flex-row items-center gap-4">
              <category.icon className="h-8 w-8 text-primary" />
              <CardTitle className="text-xl">{category.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="space-y-3">
                {category.skills.map((skill) => (
                  <li key={skill} className="bg-muted/50 rounded-md px-4 py-2 text-center font-medium transition-all duration-300 hover:bg-primary/10 hover:scale-105">
                    {skill}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
