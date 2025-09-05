import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { reminders } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

export function RemindersCard() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Today's Reminders</CardTitle>
          <CardDescription>Upcoming medications and tasks.</CardDescription>
        </div>
        <Button variant="ghost" size="sm" asChild>
          <a href="/reminders">View All <ArrowRight className="ml-2 h-4 w-4"/></a>
        </Button>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {reminders.map((reminder) => (
            <li key={reminder.id} className="flex items-center gap-4">
               <div className="p-2 rounded-full bg-primary/10 text-primary">
                <reminder.Icon className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <p className="font-medium">{reminder.medication}</p>
                <p className="text-sm text-muted-foreground">{reminder.dosage} at {reminder.time}</p>
              </div>
              <Badge
                variant={reminder.status === 'Taken' ? 'default' : reminder.status === 'Missed' ? 'destructive' : 'secondary'}
                className={cn({
                  'bg-green-100 text-green-800': reminder.status === 'Taken',
                })}
              >
                {reminder.status}
              </Badge>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
