
"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { user as initialUser, User } from "@/lib/data"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"

export function ManageUsers() {
  const [user, setUser] = React.useState(initialUser);
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);

  const handleSaveChanges = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Form submitted");
    setIsDialogOpen(false);
  };

  return (
    <Card>
        <CardHeader>
          <CardTitle>Manage Users</CardTitle>
          <CardDescription>Edit user profiles and caregiver information.</CardDescription>
        </CardHeader>
        <CardContent>
            <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-4">
                     <Avatar className="h-12 w-12">
                        <AvatarImage src={user.avatarUrl} alt={user.name} />
                        <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="font-semibold">{user.name} (User)</p>
                        <p className="text-sm text-muted-foreground">{user.status}</p>
                    </div>
                </div>
                 <div className="flex items-center gap-4">
                     <Avatar className="h-12 w-12">
                        <AvatarImage src={user.caregiverAvatarUrl} alt={user.caregiverName} />
                        <AvatarFallback>{user.caregiverName.charAt(0)}</Fallback>
                    </Avatar>
                    <div>
                        <p className="font-semibold">{user.caregiverName} (Caregiver)</p>
                        <p className="text-sm text-muted-foreground">Primary Contact</p>
                    </div>
                </div>
                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                    <DialogTrigger asChild>
                    <Button variant="outline">Edit Profiles</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                        <DialogTitle>Edit User & Caregiver Profiles</DialogTitle>
                        <DialogDescription>
                        Update the names and avatar URLs.
                        </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleSaveChanges}>
                        <div className="grid gap-6 py-4">
                            <fieldset className="grid grid-cols-4 items-center gap-4 border p-4 rounded-md">
                                <legend className="px-1 text-sm font-medium text-muted-foreground">User Profile</legend>
                                 <Label htmlFor="userName" className="text-right">Name</Label>
                                 <Input id="userName" defaultValue={user.name} className="col-span-3" />
                                 <Label htmlFor="userAvatar" className="text-right">Avatar URL</Label>
                                 <Input id="userAvatar" defaultValue={user.avatarUrl} className="col-span-3" />
                            </fieldset>
                             <fieldset className="grid grid-cols-4 items-center gap-4 border p-4 rounded-md">
                                <legend className="px-1 text-sm font-medium text-muted-foreground">Caregiver Profile</legend>
                                 <Label htmlFor="caregiverName" className="text-right">Name</Label>
                                 <Input id="caregiverName" defaultValue={user.caregiverName} className="col-span-3" />
                                 <Label htmlFor="caregiverAvatar" className="text-right">Avatar URL</Label>
                                 <Input id="caregiverAvatar" defaultValue={user.caregiverAvatarUrl} className="col-span-3" />
                            </fieldset>
                        </div>
                        <DialogFooter>
                        <Button type="submit">Save Changes</Button>
                        </DialogFooter>
                    </form>
                    </DialogContent>
                </Dialog>
            </div>
        </CardContent>
      </Card>
  )
}
