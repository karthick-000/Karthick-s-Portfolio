import { certifications } from '@/lib/data';
import { SectionHeading } from '../section-heading';
import { Badge } from '../ui/badge';

export default function CertificationsSection() {
  return (
    <section id="certifications" className="bg-secondary/50 py-16 md:py-24">
      <div className="container">
        <SectionHeading
          title="Certifications"
          subtitle="My commitment to continuous learning and professional development."
        />
        <div className="flex flex-wrap justify-center gap-4">
          {certifications.map((cert) => (
            <Badge
              key={cert.name}
              className="text-md transform transition-transform duration-300 hover:scale-105 hover:bg-primary/90 px-6 py-3"
            >
              <cert.icon className="mr-2 h-4 w-4" />
              {cert.name}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}
