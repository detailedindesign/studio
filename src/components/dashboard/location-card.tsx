import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { location } from "@/lib/data";
import { MapPin, ShieldCheck, ShieldOff } from "lucide-react";
import Image from "next/image";

export function LocationCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MapPin className="h-5 w-5" />
          <span>Location</span>
        </CardTitle>
         <CardDescription className="!mt-2 flex items-center gap-2">
          {location.consent ? (
            <>
              <ShieldCheck className="h-4 w-4 text-green-500" />
              <span>Sharing is enabled.</span>
            </>
          ) : (
             <>
              <ShieldOff className="h-4 w-4 text-destructive" />
              <span>Sharing is disabled.</span>
            </>
          )}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {location.consent ? (
           <div className="aspect-[16/9] rounded-lg overflow-hidden relative">
             <Image
                src="https://picsum.photos/600/400"
                alt="Map placeholder showing a generic city map"
                data-ai-hint="city map"
                fill
                className="object-cover"
             />
             <div className="absolute bottom-2 left-2 right-2 bg-background/80 backdrop-blur-sm p-3 rounded-md">
                 <p className="font-semibold text-sm">Last known location:</p>
                 <p className="text-muted-foreground text-sm">{location.address}</p>
             </div>
           </div>
        ) : (
          <div className="aspect-[16/9] rounded-lg bg-muted flex flex-col items-center justify-center text-center p-4">
            <ShieldOff className="h-10 w-10 text-muted-foreground mb-2" />
            <p className="font-semibold">Location Sharing Off</p>
            <p className="text-sm text-muted-foreground">
              To see location, the user must enable sharing in their app.
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
