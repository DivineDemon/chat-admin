declare type BaseStatsProps = {
  id: number;
  name: string;
  value: string;
  trend: string;
  iconBg: string;
  iconColor: string;
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
};

declare type PlanProps = {
  id: number;
  name: string;
  price: number;
  users: number;
  trend: string;
  bgColor: string;
};
