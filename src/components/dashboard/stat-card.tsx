import { TrendingDown, TrendingUp } from "lucide-react";

import { cn } from "@/lib/utils";

const StatCard = ({ item }: { item: BaseStatsProps }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-5 rounded-lg border p-2.5">
      <div className="flex w-full items-center justify-center">
        <div className="flex flex-1 flex-col items-center justify-center">
          <span className="w-full text-left text-sm font-semibold text-gray-500">
            {item.name}
          </span>
          <p className="w-full text-left text-3xl font-bold">
            <span className="!leading-[30px]">{item.value}</span>&nbsp;
            <span className="text-xs !leading-[12px] text-gray-500">
              this month
            </span>
          </p>
        </div>
        <div
          className={cn(
            "flex size-[58px] items-center justify-center rounded-full p-3",
            item.iconBg
          )}
        >
          <item.icon className={cn("size-full", item.iconColor)} />
        </div>
      </div>
      <p
        className={cn(
          "flex w-full items-center text-left text-xs font-semibold",
          {
            "text-green-400": item.trend.includes("+"),
            "text-red-400": item.trend.includes("-"),
          }
        )}
      >
        {item.trend.includes("+") ? (
          <TrendingUp className="mr-1.5 size-4" />
        ) : (
          <TrendingDown className="mr-1.5 size-4" />
        )}
        {item.trend}
      </p>
    </div>
  );
};

export default StatCard;
