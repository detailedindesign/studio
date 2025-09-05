import type { LucideIcon } from "lucide-react";
import { Pill, AlertTriangle, UserCheck, Heart, Footprints, Droplets } from "lucide-react";

export type User = {
  name: string;
  avatarUrl: string;
  status: string;
  caregiverName: string;
  caregiverAvatarUrl: string;
};

export type DeviceStatus = {
  battery: number;
  signal: 'Excellent' | 'Good' | 'Fair' | 'Poor';
  lastOnline: string;
};

export type Alert = {
  id: string;
  Icon: LucideIcon;
  title: string;
  time: string;
  variant: 'destructive' | 'warning' | 'default';
};

export type Reminder = {
  id: string;
  Icon: LucideIcon;
  medication: string;
  dosage: string;
  time: string;
  status: 'Taken' | 'Upcoming' | 'Missed';
};

export type Resource = {
  id: string;
  title: string;
  description: string;
  category: 'Condition Specific' | 'Caregiver Support' | 'Legal & Benefits';
};

export const user: User = {
  name: "Arthur Pendragon",
  avatarUrl: "https://picsum.photos/seed/arthur/100",
  status: "All systems stable. Last check-in: 15 mins ago.",
  caregiverName: "Eleanor Vance",
  caregiverAvatarUrl: "https://picsum.photos/seed/eleanor/100",
};

export const deviceStatus: DeviceStatus = {
  battery: 82,
  signal: 'Good',
  lastOnline: "Online now",
};

export const alerts: Alert[] = [
  { id: '1', Icon: AlertTriangle, title: "Missed 'Heart Medication' dose", time: "1 hour ago", variant: 'destructive' },
  { id: '2', Icon: UserCheck, title: "Afternoon check-in completed", time: "3 hours ago", variant: 'default' },
  { id: '3', Icon: AlertTriangle, title: "Potential scam call detected", time: "Yesterday", variant: 'warning' },
];

export const reminders: Reminder[] = [
  { id: '1', Icon: Heart, medication: "Lisinopril", dosage: "10mg", time: "8:00 AM", status: "Taken" },
  { id: '2', Icon: Pill, medication: "Metformin", dosage: "500mg", time: "8:00 PM", status: "Upcoming" },
  { id: '3', Icon: Droplets, medication: "Atorvastatin", dosage: "20mg", time: "8:00 PM", status: "Upcoming" },
  { id: '4', Icon: Footprints, medication: "Evening Walk", dosage: "15 minutes", time: "6:00 PM", status: "Upcoming" },
];

export const location = {
  address: "123 Maple Street, Springfield",
  consent: true,
};

export const resources: Resource[] = [
    {
        id: '1',
        title: 'Managing Diabetes: A Comprehensive Guide',
        description: 'Learn about diet, exercise, and medication management for type 2 diabetes.',
        category: 'Condition Specific',
    },
    {
        id: '2',
        title: 'Preventing Caregiver Burnout',
        description: 'Tips and strategies for managing stress and finding support as a caregiver.',
        category: 'Caregiver Support',
    },
    {
        id: '3',
        title: 'Navigating Medicare and Medicaid',
        description: 'Understand the essentials of health coverage options for seniors.',
        category: 'Legal & Benefits',
    },
    {
        id: '4',
        title: 'Understanding Alzheimer\'s Disease',
        description: 'An introductory guide to the stages, symptoms, and care strategies for Alzheimer\'s.',
        category: 'Condition Specific',
    },
    {
        id: '5',
        title: 'Financial Planning for Long-Term Care',
        description: 'Explore options for funding future health and living needs.',
        category: 'Legal & Benefits',
    },
    {
        id: '6',
        title: 'Building a Support Network',
        description: 'How to connect with other caregivers and find local resources.',
        category: 'Caregiver Support',
    }
];