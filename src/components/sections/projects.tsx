import Image from 'next/image';
import { projects } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { SectionHeading } from '../section-heading';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Github, ExternalLink } from 'lucide-react';

export default function ProjectsSection() {
  return (
    <section id="projects" className="bg-secondary/50 py-16 md:py-24">
      <div className="container">
        <SectionHeading
          title="Projects"
          subtitle="A selection of my work, demonstrating my skills in action."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            return (
              <Card
                key={index}
                className="overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl group flex flex-col"
              >
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="mt-auto">
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm" asChild>
                      <a href="#" aria-label={`View code for ${project.title} on GitHub`}>
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                    <Button variant="ghost" size="sm" asChild>
                       <a href="#" aria-label={`View live demo of ${project.title}`}>
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
