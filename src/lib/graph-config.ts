import { ChartConfig } from "@/components/ui/chart";

export const chartData = [
  { month: "August", paid: 305, unpaid: 200 },
  { month: "September", paid: 237, unpaid: 120 },
  { month: "October", paid: 73, unpaid: 190 },
  { month: "November", paid: 209, unpaid: 130 },
  { month: "December", paid: 214, unpaid: 140 },
  { month: "January", paid: 186, unpaid: 80 },
];

export const chartConfig = {
  paid: {
    label: "Paid",
    color: "hsl(var(--chart-1))",
  },
  unpaid: {
    label: "Unpaid",
    color: "hsl(var(--chart-2))",
  },
  label: {
    color: "hsl(var(--background))",
  },
} satisfies ChartConfig;

export const lineChartData = [
  { month: "August", paid: 305 },
  { month: "September", paid: 237 },
  { month: "October", paid: 73 },
  { month: "November", paid: 209 },
  { month: "December", paid: 214 },
  { month: "January", paid: 186 },
];

export const lineChartConfig = {
  paid: {
    label: "Paid",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export const planChartData = [
  {
    month: "January",
    free: 186,
    basic: 80,
    pro: Math.floor(Math.random() * 100),
    premium: Math.floor(Math.random() * 50),
  },
  {
    month: "February",
    free: 305,
    basic: 200,
    pro: Math.floor(Math.random() * 100),
    premium: Math.floor(Math.random() * 50),
  },
  {
    month: "March",
    free: 237,
    basic: 120,
    pro: Math.floor(Math.random() * 100),
    premium: Math.floor(Math.random() * 50),
  },
  {
    month: "April",
    free: 73,
    basic: 190,
    pro: Math.floor(Math.random() * 100),
    premium: Math.floor(Math.random() * 50),
  },
  {
    month: "May",
    free: 209,
    basic: 130,
    pro: Math.floor(Math.random() * 100),
    premium: Math.floor(Math.random() * 50),
  },
  {
    month: "June",
    free: 214,
    basic: 140,
    pro: Math.floor(Math.random() * 100),
    premium: Math.floor(Math.random() * 50),
  },
];

export const planChartConfig = {
  free: {
    label: "Free",
    color: "hsl(var(--chart-1))",
  },
  basic: {
    label: "Basic",
    color: "hsl(var(--chart-2))",
  },
  pro: {
    label: "Pro",
    color: "hsl(var(--chart-3))",
  },
  premium: {
    label: "Premium",
    color: "hsl(var(--chart-4))",
  },
} satisfies ChartConfig;
