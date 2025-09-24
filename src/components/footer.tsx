import { contactDetails, socialLinks } from '@/lib/data';
import { Button } from './ui/button';

export function Footer() {
  return (
    <footer className="bg-secondary">
      <div className="container py-12 text-center text-secondary-foreground">
        <h3 className="text-2xl font-headline">Karthick Raja M</h3>
        <p className="mt-2 text-muted-foreground">{contactDetails.address}</p>
        <div className="mt-6 flex justify-center gap-4">
          {socialLinks.map((link) => (
            <Button key={link.name} variant="ghost" size="icon" asChild>
              <a href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
                <link.icon className="h-5 w-5" />
              </a>
            </Button>
          ))}
        </div>
        <div className="mt-8 border-t border-border pt-8 text-sm text-muted-foreground">
          <p>&copy; 2024 Karthick Raja M. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
