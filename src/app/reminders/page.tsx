import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarClock } from "lucide-react";

export default function RemindersPage() {
  return (
    <div className="flex justify-center items-center h-full">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
            <div className="mx-auto bg-primary/10 text-primary p-3 rounded-full w-fit">
                <CalendarClock className="h-8 w-8" />
            </div>
          <CardTitle className="mt-4">Reminders Page</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center text-muted-foreground">
            This page will allow for creating, viewing, and managing all reminders.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
