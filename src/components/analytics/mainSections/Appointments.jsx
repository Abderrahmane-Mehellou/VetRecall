import { useContext } from "react";
import SettingsContext from "../../../context/SettingsContext";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import monthlyActivityData from "../../../data/monthlyActivityData.json"

function Appointments() {
  const {language} = useContext(SettingsContext);
  return (
    <div className="flex items-stretch justify-center col-span-1 flex-col w-full h-112.5 px-10 bg-white rounded-3xl dark:bg-slate-800 dark:text-white">
      <div className="">
        <h1 className="text-xl font-bold">
          {language === "en"
            ? "Appointments booked vs completed"
            : "المواعيد المحجوزة مقابل المواعيد المنجزة"}
        </h1>
        <h2 className="text-gray-400">
          {language === "en"
            ? "Trailing 12 months"
            : "الاثني عشر شهرًا الماضية"}
        </h2>
      </div>
      <div className="w-full h-80 mt-6">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={monthlyActivityData}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="week" />
            <YAxis />

            <Tooltip />

            <Bar dataKey="visits" fill="#3b82f6" radius={[8, 8, 0, 0]} />

            <Bar dataKey="recalls" fill="#14b8a6" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Appointments;