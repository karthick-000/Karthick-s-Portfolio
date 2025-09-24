import Image from 'next/image';
import { heroData } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Download, Linkedin } from 'lucide-react';

export default function HeroSection() {
  const profileImage = PlaceHolderImages.find(img => img.id === 'profile');

  return (
    <section id="home" className="container py-24 sm:py-32">
      <div className="flex flex-col items-center text-center gap-8">
        {profileImage && (
            <Image
              src={profileImage.imageUrl}
              alt={profileImage.description}
              width={400}
              height={400}
              className="rounded-full aspect-square object-cover border-8 border-card shadow-lg w-48 h-48 md:w-64 md:h-64"
              data-ai-hint={profileImage.imageHint}
              priority
            />
          )}
        <div>
          <p className="text-primary font-semibold">Hello, I'm</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mt-2">
            {heroData.name}
          </h1>
          <h2 className="text-2xl sm:text-3xl font-semibold text-muted-foreground mt-3">
            {heroData.title}
          </h2>
          <p className="mt-6 text-lg max-w-xl mx-auto">
            {heroData.tagline}
          </p>
          <div className="mt-8 flex gap-4 justify-center">
            <Button size="lg" asChild>
              <a href="/resume.pdf" download>
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#contact">
                <Linkedin className="mr-2 h-5 w-5" />
                Contact Me
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
