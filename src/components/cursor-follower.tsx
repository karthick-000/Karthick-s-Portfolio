'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

export function CursorFollower() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // This effect runs only on the client, after the component mounts.
    setIsMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    // We only add the event listener if we are on the client.
    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup function to remove the event listener.
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []); // The empty dependency array ensures this runs only once on mount.

  // On the initial server render and the first client render, `isMounted` will be false,
  // so we return null, ensuring no mismatch.
  if (!isMounted) {
    return null;
  }

  // The div is only rendered on the client, after hydration is complete.
  return (
    <div
      className={cn(
        "pointer-events-none fixed inset-0 z-30 transition duration-300",
        "hidden md:block"
      )}
      style={{
        background: `radial-gradient(600px at ${position.x}px ${position.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
      }}
    />
  );
}
