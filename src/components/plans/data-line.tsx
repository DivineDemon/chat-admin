import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
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

const chartConfig = {
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

const DataLine = () => {
  return (
    <ChartContainer
      config={chartConfig}
      className="max-h-[calc(100vh-300px)] w-full rounded-lg border p-2.5"
    >
      <LineChart
        accessibilityLayer
        data={chartData}
        margin={{
          left: 12,
          right: 12,
        }}
      >
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
        <Line
          dataKey="free"
          type="monotone"
          stroke="var(--color-free)"
          strokeWidth={2}
          dot={false}
        />
        <Line
          dataKey="basic"
          type="monotone"
          stroke="var(--color-basic)"
          strokeWidth={2}
          dot={false}
        />
        <Line
          dataKey="pro"
          type="monotone"
          stroke="var(--color-pro)"
          strokeWidth={2}
          dot={false}
        />
        <Line
          dataKey="premium"
          type="monotone"
          stroke="var(--color-premium)"
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ChartContainer>
  );
};

export default DataLine;
