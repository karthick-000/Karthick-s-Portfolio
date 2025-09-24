import Image from 'next/image';
import { heroData, socialLinks } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

export default function HeroSection() {
  const profileImage = PlaceHolderImages.find(img => img.id === 'profile');

  return (
    <section id="home" className="container py-24 sm:py-32">
      <div className="flex flex-col items-center text-center gap-8">
        <div className="relative">
          {profileImage && (
              <Image
                src={profileImage.imageUrl}
                alt={profileImage.description}
                width={400}
                height={400}
                className="rounded-full aspect-square object-cover border-4 border-primary/20 shadow-lg w-40 h-40 md:w-48 md:h-48"
                data-ai-hint={profileImage.imageHint}
                priority
              />
            )}
            <div className="absolute inset-0 rounded-full ring-4 ring-primary/40 ring-offset-4 ring-offset-background animate-pulse"></div>
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mt-2 font-headline">
            {heroData.name}
          </h1>
          <h2 className="text-2xl sm:text-3xl font-semibold text-primary/80 mt-3">
            {heroData.title}
          </h2>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4">
            {socialLinks.map((link) => (
                <Button key={link.name} variant={link.name === 'Email' ? 'default' : link.name === 'Phone' ? 'accent' : 'secondary'} asChild>
                    <a href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
                        <link.icon className="mr-2 h-5 w-5" />
                        {link.name}
                    </a>
                </Button>
            ))}
        </div>
        
        <Button size="lg" asChild>
          <a href="/resume.pdf" download>
            <Download className="mr-2 h-5 w-5" />
            Download Resume
          </a>
        </Button>

      </div>
    </section>
  );
}
