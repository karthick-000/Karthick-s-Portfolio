import { education } from '@/lib/data';
import { SectionHeading } from '../section-heading';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';

export default function EducationSection() {
  return (
    <section id="education" className="container">
      <SectionHeading title="Education" />
      <div className="space-y-6">
        {education.map((edu, index) => (
          <Card key={index} className="flex flex-col sm:flex-row">
            <div className="p-6 flex items-center justify-center bg-secondary/50 sm:border-r">
              <edu.icon className="h-10 w-10 text-primary" />
            </div>
            <div className="flex-1">
              <CardHeader>
                <div className="flex flex-col sm:flex-row justify-between sm:items-center">
                  <CardTitle>{edu.degree}</CardTitle>
                  <CardDescription className="mt-1 sm:mt-0">{edu.period}</CardDescription>
                </div>
                <p className="text-muted-foreground">{edu.institution}</p>
              </CardHeader>
              {edu.details && (
                <CardContent>
                  <p className="font-semibold">{edu.details}</p>
                </CardContent>
              )}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
