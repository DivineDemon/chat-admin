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
