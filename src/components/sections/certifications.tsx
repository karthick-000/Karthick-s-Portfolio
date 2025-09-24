import { certifications } from '@/lib/data';
import { SectionHeading } from '../section-heading';
import { Button } from '../ui/button';
import { Award } from 'lucide-react';

export default function CertificationsSection() {
  return (
    <section id="certifications" className="bg-secondary/50 py-16 md:py-24">
      <div className="container">
        <SectionHeading
          title="Certifications"
          subtitle="My commitment to continuous learning and professional development."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <div key={cert.name} className="flex flex-col items-center justify-center text-center p-6 bg-card rounded-lg shadow-md">
              <cert.icon className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-4">{cert.name}</h3>
              {cert.certificateUrl && (
                <Button asChild variant="secondary">
                  <a href={cert.certificateUrl} target="_blank" rel="noopener noreferrer">
                    <Award className="mr-2 h-4 w-4" />
                    View Certificate
                  </a>
                </Button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
