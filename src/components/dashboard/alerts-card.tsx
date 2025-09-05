import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { alerts } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export function AlertsCard() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Recent Alerts</CardTitle>
          <CardDescription>Critical events and notifications.</CardDescription>
        </div>
         <Button variant="ghost" size="sm" asChild>
          <a href="/alerts">View All <ArrowRight className="ml-2 h-4 w-4"/></a>
        </Button>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {alerts.map((alert) => (
            <li key={alert.id} className="flex items-center gap-4">
              <div className={cn("p-2 rounded-full", {
                'bg-destructive/10 text-destructive': alert.variant === 'destructive',
                'bg-yellow-500/10 text-yellow-600': alert.variant === 'warning',
                'bg-primary/10 text-primary': alert.variant === 'default',
              })}>
                <alert.Icon className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <p className="font-medium">{alert.title}</p>
                <p className="text-sm text-muted-foreground">{alert.time}</p>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
