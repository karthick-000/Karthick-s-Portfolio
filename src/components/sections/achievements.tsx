import { achievements } from '@/lib/data';
import { SectionHeading } from '../section-heading';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '../ui/card';
import { Button } from '../ui/button';
import { Award } from 'lucide-react';

export default function AchievementsSection() {
  return (
    <section id="achievements" className="container">
      <SectionHeading 
        title="Notable Achievements" 
        subtitle="Highlights of my competitive and leadership experiences."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {achievements.map((achievementCategory) => (
          <Card key={achievementCategory.category} className="bg-card/50 shadow-lg hover:shadow-primary/20 transition-shadow duration-300 flex flex-col">
            <CardHeader className="flex-row items-center gap-4 pb-4">
              <div className="p-3 rounded-full bg-primary/10 text-primary">
                <achievementCategory.icon className="h-8 w-8" style={{
                  filter: 'drop-shadow(0 0 5px hsl(var(--primary)))'
                }} />
              </div>
              <CardTitle className="text-2xl font-headline text-primary/90">{achievementCategory.category}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="space-y-3">
                {achievementCategory.items.map((item) => (
                  <li key={item.name} className="flex flex-col items-start bg-background/70 p-4 rounded-lg text-muted-foreground font-medium border border-border/50">
                    <span>{item.name}</span>
                    {item.certificateUrl && item.certificateUrl !== '#' && (
                       <Button asChild variant="link" className="p-0 h-auto mt-2">
                        <a href={item.certificateUrl} target="_blank" rel="noopener noreferrer">
                          <Award className="mr-2 h-4 w-4" />
                          View Certificate
                        </a>
                      </Button>
                    )}
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
