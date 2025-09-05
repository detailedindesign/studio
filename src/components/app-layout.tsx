"use client"

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
  SidebarTrigger,
  SidebarFooter,
} from "@/components/ui/sidebar"
import {
  Home,
  Bot,
  Bell,
  CalendarClock,
  User,
} from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Logo } from "./logo"
import { user } from "@/lib/data"

const navItems = [
  { href: "/", icon: Home, label: "Dashboard" },
  { href: "/support", icon: Bot, label: "AutoSupport AI" },
  { href: "/reminders", icon: CalendarClock, label: "Reminders" },
  { href: "/alerts", icon: Bell, label: "Alerts" },
];

export function AppLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const getPageTitle = () => {
    switch (pathname) {
      case '/': return 'CareLink Dashboard';
      case '/support': return 'AutoSupport AI';
      case '/reminders': return 'Medication & Reminders';
      case '/alerts': return 'Alerts & Notifications';
      case '/profile': return 'Profile & Settings';
      default: return 'Connected Independence Suite';
    }
  };

  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader className="border-b">
          <Logo />
        </SidebarHeader>
        <SidebarContent className="p-2">
          <SidebarMenu>
            {navItems.map((item) => (
              <SidebarMenuItem key={item.href}>
                <SidebarMenuButton
                  asChild
                  isActive={pathname === item.href}
                  tooltip={item.label}
                >
                  <Link href={item.href}>
                    <item.icon />
                    <span>{item.label}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter className="mt-auto border-t p-2">
          <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Profile" isActive={pathname === "/profile"}>
                   <Link href="/profile">
                      <Avatar className="h-8 w-8">
                          <AvatarImage src={user.caregiverAvatarUrl} alt={user.caregiverName} data-ai-hint="woman portrait" />
                          <AvatarFallback>{user.caregiverName.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <span className="truncate">{user.caregiverName}</span>
                   </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>
        <header className="flex h-16 items-center gap-4 border-b bg-card px-4 sm:px-6">
          <SidebarTrigger className="md:hidden" />
          <h1 className="flex-1 text-xl font-semibold font-headline">
              {getPageTitle()}
          </h1>
          <Avatar>
            <AvatarImage src={user.avatarUrl} alt={user.name} data-ai-hint="senior man" />
            <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
          </Avatar>
        </header>
        <main className="flex-1 overflow-y-auto bg-background p-4 md:p-6">
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}
