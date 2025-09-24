import { contactDetails } from '@/lib/data';
import { SectionHeading } from '../section-heading';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { ContactForm } from '../contact-form';
import { Mail, Phone } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="container pb-24">
      <SectionHeading
        title="Get In Touch"
        subtitle="I'm open to discussing new projects, creative ideas, or opportunities to be part of your vision."
      />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Send me a message</CardTitle>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>
        </div>
        <div className="space-y-4">
            <Card>
                <CardHeader>
                    <CardTitle>Contact Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex items-start gap-3">
                        <Mail className="h-5 w-5 mt-1 text-primary"/>
                        <div>
                            <h4 className="font-semibold">Email</h4>
                            <a href={`mailto:${contactDetails.email}`} className="text-muted-foreground hover:text-primary transition-colors">
                                {contactDetails.email}
                            </a>
                        </div>
                    </div>
                     <div className="flex items-start gap-3">
                        <Phone className="h-5 w-5 mt-1 text-primary"/>
                        <div>
                            <h4 className="font-semibold">Phone</h4>
                            <a href={`tel:${contactDetails.phone}`} className="text-muted-foreground hover:text-primary transition-colors">
                                {contactDetails.phone}
                            </a>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
      </div>
    </section>
  );
}
