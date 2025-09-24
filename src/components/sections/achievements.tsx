import { achievements } from '@/lib/data';
import { SectionHeading } from '../section-heading';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

export default function AchievementsSection() {
  return (
    <section id="achievements" className="container">
      <SectionHeading 
        title="Notable Achievements" 
        subtitle="Highlights of my competitive and leadership experiences."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {achievements.map((achievementCategory) => (
          <Card key={achievementCategory.category} className="bg-card/50 shadow-lg hover:shadow-primary/20 transition-shadow duration-300">
            <CardHeader className="flex-row items-center gap-4 pb-4">
              <div className="p-3 rounded-full bg-primary/10 text-primary">
                <achievementCategory.icon className="h-8 w-8" style={{
                  filter: 'drop-shadow(0 0 5px hsl(var(--primary)))'
                }} />
              </div>
              <CardTitle className="text-2xl font-headline text-primary/90">{achievementCategory.category}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {achievementCategory.items.map((item) => (
                  <li key={item} className="bg-background/70 p-4 rounded-lg text-muted-foreground font-medium border border-border/50">
                    {item}
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
