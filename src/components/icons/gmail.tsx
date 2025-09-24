import { cn } from "@/lib/utils"

export function GmailIcon({ className, ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={cn("h-6 w-6", className)}
      {...props}
    >
      <path d="M22 5.88V18a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6c0-.05.02-.1.03-.15l8.4-4.2a2 2 0 0 1 1.14 0l8.4 4.2c.01.05.03.1.03.15v-.02zM12 12.5 3.5 7.5l-1.5 1 10 6 10-6-1.5-1z" />
    </svg>
  );
}
