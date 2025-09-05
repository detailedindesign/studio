import { HeartPulse } from 'lucide-react';

export function Logo() {
  return (
    <div className="flex items-center gap-3 p-2">
      <div className="p-2 rounded-lg bg-soft-blue/20 text-soft-blue">
        <HeartPulse className="h-7 w-7" />
      </div>
      <div className="flex flex-col">
        <p className="font-headline text-lg font-semibold">
          Connected Suite
        </p>
        <p className="text-sm text-muted-foreground">
          Independence & Care
        </p>
      </div>
    </div>
  )
}
