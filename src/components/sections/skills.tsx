import { skills } from '@/lib/data';
import { SectionHeading } from '../section-heading';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';

export default function SkillsSection() {
  return (
    <section id="skills" className="container">
      <SectionHeading
        title="My Skills"
        subtitle="A showcase of my technical abilities and personal strengths."
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Technical Expertise</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {skills.technical.map((skill, index) => (
                <AccordionItem value={`item-${index}`} key={skill.title}>
                  <AccordionTrigger>{skill.title}</AccordionTrigger>
                  <AccordionContent>{skill.description}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Personal Skills</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-3">
              {skills.personal.map((skill) => (
                <div key={skill.name} className="flex items-center gap-2 bg-secondary p-3 rounded-lg">
                  <skill.icon className="h-5 w-5 text-primary" />
                  <span className="font-medium">{skill.name}</span>
                </div>
              ))}
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Languages</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {skills.languages.map((lang) => (
                <Badge key={lang} variant="outline" className="text-base px-4 py-1">
                  {lang}
                </Badge>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
