import { useState } from "react";

import { DollarSign } from "lucide-react";

import DateRangePicker from "@/components/date-range-picker";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState<string>("overview");

  return (
    <div className="flex h-full w-full flex-col items-start justify-start gap-5">
      <div className="flex w-full items-center justify-center">
        <span className="flex-1 text-left text-3xl font-bold">Dashboard</span>
        <DateRangePicker />
      </div>
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>
      </Tabs>
      <div className="grid w-full grid-cols-2 gap-5 lg:grid-cols-4">
        {[...Array(4)].map((_, idx) => (
          <div
            key={idx}
            className="col-span-1 flex w-full flex-col items-center justify-center gap-2 rounded-lg border p-3"
          >
            <div className="flex w-full items-center justify-center">
              <span className="flex-1 text-left text-sm font-medium tracking-tight">
                Total Revenue
              </span>
              <DollarSign className="size-4 text-muted-foreground" />
            </div>
            <div className="flex w-full flex-col items-center justify-center">
              <p className="w-full text-left text-2xl font-bold">$45,231.89</p>
              <p className="w-full text-left text-xs text-muted-foreground">
                +20.1% from last month
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
