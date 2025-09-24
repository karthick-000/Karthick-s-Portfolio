import { workshops } from '@/lib/data';
import { SectionHeading } from '../section-heading';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Clock } from 'lucide-react';

export default function WorkshopsSection() {
  return (
    <section id="workshops" className="bg-secondary/50 py-16 md:py-24">
      <div className="container">
        <SectionHeading 
          title="Workshops and Training"
          subtitle="My participation in workshops and training programs."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {workshops.map((workshop, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader className="flex-row items-start gap-4">
                <div className="p-3 rounded-md bg-primary/10 text-primary">
                  <workshop.icon className="h-8 w-8" />
                </div>
                <div className="flex-1">
                  <CardTitle>{workshop.title}</CardTitle>
                  <CardDescription className="mt-1">{workshop.institution}</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="mt-auto flex justify-end">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>{workshop.duration}</span>
                  </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
