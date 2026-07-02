import { useContext } from "react";
import SettingsContext from "../../../context/SettingsContext";
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

import retentionTrendData from "../../../data/retentionTrendData.json"

function Retention() {
  const {language} = useContext(SettingsContext);
  return (
    <div className="flex items-stretch justify-center col-span-1 flex-col w-full h-112.5 px-10 bg-white rounded-3xl dark:bg-slate-800 dark:text-white">
      <div className="">
        <h1 className="text-xl font-bold">
          {language === "en" ? "Retention rate over time" : "بيانات المواعيد"}
        </h1>
        <h2 className="text-gray-400">
          {language === "en"
            ? "Monthly %"
            : "عدد الحجوزات مقابل عدد الحجوزات المنجزة خلال الاثني عشر شهرًا الماضية"}
        </h2>
      </div>
      <div className="w-full h-80 mt-6">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={retentionTrendData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis domain={[70, 95]} />
            <Tooltip formatter={(value) => [`${value}%`, "Retention Rate"]} />

            <Line
              type="monotone"
              dataKey="retention"
              stroke="#4CAF50"
              strokeWidth={3}
              dot={{r: 4}}
              activeDot={{r: 6}}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Retention;
