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
