import {useContext} from "react";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  BarChart,
  Bar,
} from "recharts";
import SettingsContext from "../context/SettingsContext";

import monthlyActivityData from "../data/monthlyActivityData.json";
import retentionTrendData from "../data/retentionTrendData.json";
import appointmentTrendData from "../data/appointmentTrendData.json";
import vaccinationComplianceData from "../data/vaccinationComplianceData.json";
import RecentTable from "./tables/recent/RecentTable";
import UpcomingTable from "./tables/upcoming/UpcomingTable";

function Charts() {
  return (
    <div className="py-5 grid grid-cols-6 gap-5 grid-rows-3">
      <TowLineChart />
      <ThePieChart />
      <OneLintChart />
      <SquareChart />
      <RecentTable />
      <UpcomingTable />
    </div>
  );
}

export default Charts;

function TowLineChart() {
  const {language} = useContext(SettingsContext);

  return (
    <div className="flex items-stretch justify-center col-span-4 flex-col w-full h-112.5 px-10 bg-white rounded-3xl dark:bg-slate-800 dark:text-white">
      <div className="">
        <h1 className="text-xl font-bold">
          {language === "en" ? "Appointment Trends" : "بيانات المواعيد"}
        </h1>
        <h2 className="text-gray-400">
          {language === "en"
            ? "Booked vs completed over the last 12 months"
            : "عدد الحجوزات مقابل عدد الحجوزات المنجزة خلال الاثني عشر شهرًا الماضية"}
        </h2>
      </div>
      <div className="w-full h-80 mt-6">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={appointmentTrendData}>
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
            <XAxis dataKey="month" />
            <YAxis />
            <Legend />
            <Tooltip />

            <Area
              type="monotone"
              dataKey="booked"
              stroke="#3b82f6"
              strokeWidth={3}
              fill="url(#bookedGradient)"
            />

            <Area
              type="monotone"
              dataKey="completed"
              stroke="#14b8a6"
              strokeWidth={3}
              fill="url(#completedGradient)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

function OneLintChart() {
  const {language} = useContext(SettingsContext);
  return (
    <div className="flex items-stretch justify-center col-span-3 flex-col w-full h-112.5 px-10 bg-white rounded-3xl dark:bg-slate-800 dark:text-white">
      <div className="">
        <h1 className="text-xl font-bold">
          {language === "en" ? "Retention Trends" : "بيانات المواعيد"}
        </h1>
        <h2 className="text-gray-400">
          {language === "en"
            ? "Monthly retention rate %"
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

function ThePieChart() {
  const {language} = useContext(SettingsContext);
  return (
    <div className="flex items-stretch justify-center col-span-2 flex-col w-full h-112.5 px-10 bg-white rounded-3xl dark:bg-slate-800 dark:text-white">
      <div className="">
        <h1 className="text-xl font-bold">
          {language === "en" ? "Vaccination Compliance" : "الالتزام بالتطعيم"}
        </h1>
        <h2 className="text-gray-400">
          {language === "en" ? "Patient status breakdown" : "تفصيل حالة المريض"}
        </h2>
      </div>
      <div className="w-full h-80 mt-6">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart data={appointmentTrendData}>
            <Pie
              data={vaccinationComplianceData}
              dataKey="value"
              innerRadius={60}
              outerRadius={90}
              paddingAngle={3}
            >
              {vaccinationComplianceData.map((entry) => (
                <Cell key={entry.name} fill={entry.color} />
              ))}
              <Legend style="circle" />
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

function SquareChart() {
  const {language} = useContext(SettingsContext);
  return (
    <div className="flex items-stretch justify-center col-span-3 flex-col w-full h-112.5 px-10 bg-white rounded-3xl dark:bg-slate-800 dark:text-white">
      <div className="">
        <h1 className="text-xl font-bold">
          {language === "en" ? "Monthly Activity" : "بيانات المواعيد"}
        </h1>
        <h2 className="text-gray-400">
          {language === "en"
            ? "Visits and recalls this month"
            : "عدد الحجوزات مقابل عدد الحجوزات المنجزة خلال الاثني عشر شهرًا الماضية"}
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
