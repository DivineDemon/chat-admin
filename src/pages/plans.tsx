import DateRangePicker from "@/components/date-range-picker";
import DataLine from "@/components/plans/data-line";
import PlanCard from "@/components/plans/plan-card";
import { plans } from "@/lib/constants";

const Plans = () => {
  return (
    <div className="flex h-full w-full flex-col items-start justify-start gap-5">
      <div className="flex w-full items-center justify-center">
        <span className="flex-1 text-left text-3xl font-bold">
          Payment Plans
        </span>
        <DateRangePicker />
      </div>
      <div className="grid w-full grid-cols-4 gap-5">
        {plans.map((plan) => (
          <PlanCard key={plan.id} plan={plan} />
        ))}
      </div>
      <div className="flex h-full w-full items-start justify-start">
        <DataLine />
      </div>
    </div>
  );
};

export default Plans;
