import { useContext } from "react";
import SettingsContext from "../../../context/SettingsContext";
import { Area, AreaChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const monthlyActivity = [
  {week: "W1", visits: 65, recalls: 28},
  {week: "W2", visits: 71, recalls: 31},
  {week: "W3", visits: 80, recalls: 36},
  {week: "W4", visits: 88, recalls: 39},
];

function MonthlyActivity() {
  const {language} = useContext(SettingsContext);

  return (
    <div className="flex items-stretch justify-center col-span-1 flex-col w-full h-112.5 px-10 bg-white rounded-3xl dark:bg-slate-800 dark:text-white">
      <div className="">
        <h1 className="text-xl font-bold">
          {language === "en" ? "Monthly activity" : "بيانات النشاط الشهري"}
        </h1>
        <h2 className="text-gray-400">
          {language === "en"
            ? "Visits and recalls by week"
            : "الزيارات والمتابعات حسب الأسبوع"}
        </h2>
      </div>
      <div className="w-full h-80 mt-6">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={monthlyActivity}>
            <defs>
              <linearGradient id="bookedGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
              </linearGradient>

              <linearGradient
                id="completedGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop offset="5%" stopColor="#14b8a6" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#14b8a6" stopOpacity={0} />
              </linearGradient>
            </defs>

            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="week" />
            <YAxis />
            <Legend />
            <Tooltip />

            <Area
              type="monotone"
              dataKey="visits"
              stroke="#14b8a6"
              strokeWidth={3}
              fill="url(#completedGradient)"
            />
            
            <Area
              type="monotone"
              dataKey="recalls"
              stroke="#3b82f6"
              strokeWidth={3}
              fill="url(#bookedGradient)"
            />

          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default MonthlyActivity;