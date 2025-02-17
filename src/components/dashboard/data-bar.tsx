"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { chartConfig, chartData } from "@/lib/graph-config";

const DataBar = () => {
  return (
    <Card className="flex h-full w-full flex-col items-center justify-between p-5">
      <CardHeader className="w-full p-0">
        <CardTitle>
          <span className="text-chart-1">Paid</span>&nbsp;vs&nbsp;
          <span className="text-chart-2">Unpaid</span>&nbsp;Users
        </CardTitle>
        <CardDescription>August 2023 - January 2024</CardDescription>
      </CardHeader>
      <CardContent className="w-full p-0">
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="paid" fill="var(--color-paid)" radius={4} />
            <Bar dataKey="unpaid" fill="var(--color-unpaid)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="w-full flex-col items-start gap-2 p-0 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="size-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  );
};

export default DataBar;
