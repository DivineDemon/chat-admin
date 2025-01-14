import { TrendingDown, TrendingUp } from "lucide-react";

import { cn } from "@/lib/utils";

// text-chart-1
// text-chart-2
// text-chart-3
// text-chart-4
// bg-chart-1/30
// bg-chart-2/30
// bg-chart-3/30
// bg-chart-4/30

const PlanCard = ({ plan }: { plan: PlanProps }) => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-5 rounded-lg border p-2.5">
      <div className="flex w-full items-center justify-center">
        <div className="flex flex-1 flex-col items-center justify-center">
          <span className="w-full text-left font-medium">{plan.name}</span>
          <p className="w-full text-left text-3xl font-bold">
            <span className="!leading-[30px]">{plan.users}</span>&nbsp;
            <span className="text-xs !leading-[12px] text-gray-500">
              this month
            </span>
          </p>
        </div>
        <div
          className={cn(
            "flex size-[62px] items-center justify-center rounded-full",
            `bg-${plan.bgColor}/30`
          )}
        >
          <span className={cn("text-xl font-bold", `text-${plan.bgColor}`)}>
            ${plan.price}
          </span>
        </div>
      </div>
      <p
        className={cn(
          "flex w-full items-center text-left text-xs font-semibold",
          {
            "text-green-400": plan.trend.includes("+"),
            "text-red-400": plan.trend.includes("-"),
          }
        )}
      >
        {plan.trend.includes("+") ? (
          <TrendingUp className="mr-1.5 size-4" />
        ) : (
          <TrendingDown className="mr-1.5 size-4" />
        )}
        {plan.trend}
      </p>
    </div>
  );
};

export default PlanCard;
