import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { user } from "@/lib/data";
import { CheckCircle2 } from "lucide-react";

export function UserProfileCard() {
  return (
    <Card>
      <CardContent className="p-6 flex items-center gap-6">
        <Avatar className="h-20 w-20 border-4 border-background shadow-md">
          <AvatarImage src={user.avatarUrl} alt={user.name} data-ai-hint="senior man" />
          <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <h2 className="text-2xl font-bold font-headline">{user.name}</h2>
          <div className="flex items-center gap-2 text-muted-foreground mt-1">
            <CheckCircle2 className="h-4 w-4 text-green-500" />
            <p className="text-sm">{user.status}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
