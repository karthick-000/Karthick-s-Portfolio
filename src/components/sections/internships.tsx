import { internships } from '@/lib/data';
import { SectionHeading } from '../section-heading';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';

export default function InternshipsSection() {
  return (
    <section id="internships" className="container">
      <SectionHeading title="Internships" />
      <div className="space-y-8">
        {internships.map((internship, index) => (
          <Card key={index} className="flex flex-col sm:flex-row">
            <div className="p-6 flex items-center justify-center bg-secondary/50 sm:border-r">
              <internship.icon className="h-10 w-10 text-primary" />
            </div>
            <div className="flex-1">
              <CardHeader>
                <div className="flex flex-col sm:flex-row justify-between sm:items-center">
                  <CardTitle>{internship.title}</CardTitle>
                  <CardDescription className="mt-1 sm:mt-0">{internship.period}</CardDescription>
                </div>
                <p className="text-muted-foreground font-semibold">{internship.subtitle}</p>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  {internship.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </CardContent>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
