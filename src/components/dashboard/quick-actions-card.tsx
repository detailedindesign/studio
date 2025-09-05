import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlusCircle, MessageSquare, Phone } from "lucide-react";

export function QuickActionsCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
        <CardDescription>Perform common tasks</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        <Button size="lg" className="w-full justify-start text-base py-6">
          <PlusCircle className="mr-3 h-5 w-5" />
          Add a Reminder
        </Button>
        <Button size="lg" variant="secondary" className="w-full justify-start text-base py-6">
          <MessageSquare className="mr-3 h-5 w-5" />
          Send a Message
        </Button>
         <Button size="lg" variant="secondary" className="w-full justify-start text-base py-6">
          <Phone className="mr-3 h-5 w-5" />
          Initiate Call
        </Button>
      </CardContent>
    </Card>
  );
}
