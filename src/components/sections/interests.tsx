import { interestsData } from '@/lib/data';
import { SectionHeading } from '../section-heading';
import { Badge } from '../ui/badge';
import { Lightbulb } from 'lucide-react';

export default function InterestsSection() {
  return (
    <section id="interests" className="container">
      <SectionHeading 
        title="Areas of Interest"
        subtitle="My passion for technology and innovation drives me to explore these exciting fields."
      />
      <div className="flex flex-wrap justify-center gap-4">
        {interestsData.map((interest, index) => (
          <Badge 
            key={index}
            variant="secondary" 
            className="text-lg px-6 py-3 rounded-full transition-all duration-300 hover:scale-110 hover:bg-primary/10 hover:text-primary cursor-pointer shadow-md"
          >
            <Lightbulb className="mr-2 h-5 w-5" />
            {interest}
          </Badge>
        ))}
      </div>
    </section>
  );
}
