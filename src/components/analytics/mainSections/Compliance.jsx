import { useContext } from "react";
import SettingsContext from "../../../context/SettingsContext";
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const vaccinationComplianceData = [
  {name: "Up to date", value: 68, color: "#22c55e"},
  {name: "Due soon", value: 18, color: "#f59e0b"},
  {name: "Overdue", value: 9, color: "#ef4444"},
  {name: "Never vaccinated", value: 5, color: "#94a3b8"},
];

function Compliance() {
    const {language} = useContext(SettingsContext);
    return (
      <div className="flex items-stretch justify-center col-span-1 flex-col w-full h-112.5 px-10 bg-white rounded-3xl dark:bg-slate-800 dark:text-white">
        <div className="">
          <h1 className="text-xl font-bold">
            {language === "en" ? "Vaccination compliance" : "الالتزام بالتطعيم"}
          </h1>
          <h2 className="text-gray-400">
            {language === "en"
              ? "Patient status"
              : "حالة المريض"}
          </h2>
        </div>
        <div className="w-full h-80 mt-6">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
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

export default Compliance
