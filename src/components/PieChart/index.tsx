import { useTranslation } from "react-i18next";
import {
  Cell,
  PieChart as PChart,
  Pie,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { formatDecimalDuration } from "../../utils/date";
import "./index.scss";

export type PieChartDataEntry = {
  name: string;
  value: number;
};

type PieChartProps = {
  data: PieChartDataEntry[];
};

export const PieChart = ({ data }: PieChartProps) => {
  const { t } = useTranslation("translation", { keyPrefix: "common" });

  const COLORS = [
    "#007878",
    "#1d8b8b",
    "#2f9393",
    "#489f9f",
    "#5baaaa",
    "#72b8b8",
  ];

  return (
    <ResponsiveContainer width="100%" height={250}>
      <PChart>
        <Pie
          className="PieChart"
          data={data}
          cx="50%"
          cy="50%"
          startAngle={180}
          endAngle={0}
          innerRadius={80}
          outerRadius={120}
          paddingAngle={5}
          dataKey="value"
          strokeWidth={0}
        >
          {data.map((_entry, idx) => (
            <Cell key={`cell-${idx}`} fill={COLORS[idx % COLORS.length]} />
          ))}
        </Pie>

        <Tooltip
          contentStyle={{
            backgroundColor: "#272d2d",
            boxShadow: "inset 0 0 0 1000px rgba(255, 255, 255, 0.1)",
            borderRadius: 4,
            padding: "0.5rem",
            border: 0,
          }}
          itemStyle={{
            color: "#fcf7ff",
            fontWeight: "600",
          }}
          formatter={(value: number, name: string) => [
            formatDecimalDuration(value, t), // "1 an et 6 mois"
            name,
          ]}
        />

        {/* <Legend /> */}
      </PChart>
    </ResponsiveContainer>
  );
};

export default PieChart;
