import { ManageResources } from "@/components/admin/manage-resources";
import { ManageUsers } from "@/components/admin/manage-users";
import { ManageReminders } from "@/components/admin/manage-reminders";

export default function AdminPage() {
  return (
    <div className="space-y-8">
        <div>
            <h1 className="text-2xl font-bold font-headline">Admin Panel</h1>
            <p className="text-muted-foreground">Manage the content and settings of the application.</p>
        </div>

      <ManageUsers />
      <ManageReminders />
      <ManageResources />
    </div>
  );
}
