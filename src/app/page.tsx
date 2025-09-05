import { UserProfileCard } from '@/components/dashboard/user-profile-card';
import { DeviceStatusCard } from '@/components/dashboard/device-status-card';
import { AlertsCard } from '@/components/dashboard/alerts-card';
import { RemindersCard } from '@/components/dashboard/reminders-card';
import { LocationCard } from '@/components/dashboard/location-card';
import { QuickActionsCard } from '@/components/dashboard/quick-actions-card';

export default function DashboardPage() {
  return (
    <div className="grid auto-rows-max gap-6 lg:grid-cols-3">
      <div className="lg:col-span-3">
        <UserProfileCard />
      </div>
      <div className="grid gap-6 lg:col-span-2 auto-rows-max">
        <DeviceStatusCard />
        <AlertsCard />
        <RemindersCard />
      </div>
      <div className="grid gap-6 lg:col-span-1 auto-rows-max">
        <QuickActionsCard />
        <LocationCard />
      </div>
    </div>
  );
}
