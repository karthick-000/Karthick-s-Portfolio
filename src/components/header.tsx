'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navigationLinks } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        <a href="#home" className="mr-6 flex items-center space-x-2">
          <span className="font-bold font-headline sm:inline-block text-primary">
            Karthick Raja M
          </span>
        </a>

        <nav className="hidden md:flex md:items-center md:gap-6 text-sm">
          {navigationLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-primary text-foreground/80"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-6 p-6">
                <a href="#home" className="mr-6 flex items-center space-x-2" onClick={() => setIsOpen(false)}>
                  <span className="font-bold font-headline sm:inline-block text-primary">
                    Karthick Raja M
                  </span>
                </a>
                <nav className="flex flex-col gap-4">
                  {navigationLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-lg font-medium"
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
