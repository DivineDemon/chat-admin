"use client";

import { TrendingUp } from "lucide-react";
import { CartesianGrid, LabelList, Line, LineChart, XAxis } from "recharts";

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
import { lineChartConfig, lineChartData } from "@/lib/graph-config";

const DataLine = () => {
  return (
    <Card className="flex h-full w-full flex-col items-center justify-between p-5">
      <CardHeader className="w-full p-0">
        <CardTitle>Frequency of Paying Users</CardTitle>
        <CardDescription>August 2023 - January 2024</CardDescription>
      </CardHeader>
      <CardContent className="w-full p-0">
        <ChartContainer config={lineChartConfig}>
          <LineChart
            accessibilityLayer
            data={lineChartData}
            margin={{
              top: 20,
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
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Line
              dataKey="paid"
              type="natural"
              stroke="var(--color-paid)"
              strokeWidth={2}
              dot={{
                fill: "var(--color-paid)",
              }}
              activeDot={{
                r: 6,
              }}
            >
              <LabelList
                position="top"
                offset={12}
                className="fill-foreground"
                fontSize={12}
              />
            </Line>
          </LineChart>
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

export default DataLine;
