import { DollarSign, LayoutDashboard, User2, Users } from "lucide-react";

export const items = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Users",
    url: "/users",
    icon: Users,
  },
  {
    title: "Payment Plans",
    url: "/plans",
    icon: DollarSign,
  },
];

export const baseStats = [
  {
    id: 1,
    icon: User2,
    value: "332",
    name: "Total Users",
    iconBg: "bg-orange-600/20",
    iconColor: "text-orange-600",
    trend: "+20.1% more than last month.",
  },
  {
    id: 2,
    icon: DollarSign,
    value: "$45,231.89",
    name: "Total Earnings",
    iconBg: "bg-green-600/20",
    iconColor: "text-green-600",
    trend: "-16.2% less than last month.",
  },
  {
    id: 3,
    icon: Users,
    value: "114",
    name: "Free vs Paid Users",
    iconBg: "bg-blue-600/20",
    iconColor: "text-blue-600",
    trend: "+23.7% more paid users than last month.",
  },
];

export const plans = [
  {
    id: 1,
    name: "Free",
    price: 0,
    users: 441,
    trend: "+20.1% more than last month.",
    bgColor: "chart-1",
  },
  {
    id: 2,
    name: "Basic",
    price: 20,
    users: 343,
    trend: "+20.1% more than last month.",
    bgColor: "chart-2",
  },
  {
    id: 3,
    name: "Pro",
    price: 50,
    users: 268,
    trend: "-20.1% less than last month.",
    bgColor: "chart-3",
  },
  {
    id: 4,
    name: "Premium",
    price: 100,
    users: 192,
    trend: "-20.1% less than last month.",
    bgColor: "chart-4",
  },
];
