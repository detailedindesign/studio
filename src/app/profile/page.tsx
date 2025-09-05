import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User } from "lucide-react";

export default function ProfilePage() {
  return (
    <div className="flex justify-center items-center h-full">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
            <div className="mx-auto bg-primary/10 text-primary p-3 rounded-full w-fit">
                <User className="h-8 w-8" />
            </div>
          <CardTitle className="mt-4">Profile & Settings</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center text-muted-foreground">
            This page will contain caregiver profile information and notification settings.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
