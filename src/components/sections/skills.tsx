import { skills } from '@/lib/data';
import { SectionHeading } from '../section-heading';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Progress } from '../ui/progress';
import { Badge } from '../ui/badge';

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
            <CardTitle>Technical Skills</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {skills.technical.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between items-center mb-1">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <Progress value={skill.level} aria-label={`${skill.name} proficiency`} />
              </div>
            ))}
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
