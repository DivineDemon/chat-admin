import DataBar from "@/components/dashboard/data-bar";
import DataLine from "@/components/dashboard/data-line";
import StatCard from "@/components/dashboard/stat-card";
import DateRangePicker from "@/components/date-range-picker";
import { baseStats } from "@/lib/constants";

const Dashboard = () => {
  return (
    <div className="flex h-full w-full flex-col items-start justify-start gap-5">
      <div className="flex w-full items-center justify-center">
        <span className="flex-1 text-left text-3xl font-bold">Dashboard</span>
        <DateRangePicker />
      </div>
      <div className="grid w-full grid-cols-3 gap-5">
        {baseStats.map((item) => (
          <StatCard key={item.id} item={item} />
        ))}
      </div>
      <div className="grid h-full w-full grid-cols-2 gap-5">
        <DataBar />
        <DataLine />
      </div>
    </div>
  );
};

export default Dashboard;
