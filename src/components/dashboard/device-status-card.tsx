import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { deviceStatus } from "@/lib/data";
import { Battery, Signal, Wifi } from "lucide-react";
import { Progress } from "@/components/ui/progress";

export function DeviceStatusCard() {
  const getSignalIcon = () => {
    switch(deviceStatus.signal) {
      case 'Excellent': return <Signal className="h-5 w-5 text-green-500" />;
      case 'Good': return <Signal className="h-5 w-5 text-yellow-500" />;
      case 'Fair': return <Signal className="h-5 w-5 text-orange-500" />;
      case 'Poor': return <Signal className="h-5 w-5 text-red-500" />;
    }
  }
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>Device Status</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50">
          <Battery className="h-8 w-8 text-primary" />
          <div>
            <p className="text-sm text-muted-foreground">Battery</p>
            <p className="text-2xl font-semibold">{deviceStatus.battery}%</p>
            <Progress value={deviceStatus.battery} className="h-2 mt-1" />
          </div>
        </div>
        <div className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50">
          {getSignalIcon()}
          <div>
            <p className="text-sm text-muted-foreground">Signal</p>
            <p className="text-lg font-semibold">{deviceStatus.signal}</p>
          </div>
        </div>
        <div className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50">
          <Wifi className="h-5 w-5 text-primary" />
          <div>
            <p className="text-sm text-muted-foreground">Connectivity</p>
            <p className="text-lg font-semibold">{deviceStatus.lastOnline}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
