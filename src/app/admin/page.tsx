import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ManageResources } from "@/components/admin/manage-resources";

export default function AdminPage() {
  return (
    <div className="space-y-8">
        <div>
            <h1 className="text-2xl font-bold font-headline">Admin Panel</h1>
            <p className="text-muted-foreground">Manage the content and settings of the application.</p>
        </div>

      <section>
        <Card>
          <CardHeader>
            <CardTitle>Manage Users</CardTitle>
            <CardDescription>Edit user profiles and caregiver information.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">User management forms will go here.</p>
          </CardContent>
        </Card>
      </section>

       <section>
        <Card>
          <CardHeader>
            <CardTitle>Manage Reminders</CardTitle>
             <CardDescription>View, edit, or delete existing reminders.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">A table or list of reminders will go here.</p>
          </CardContent>
        </Card>
      </section>
      
      <ManageResources />
    </div>
  );
}
