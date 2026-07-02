import {FiUsers} from "react-icons/fi";
import {FaCalendarAlt} from "react-icons/fa";
import {TbVaccine} from "react-icons/tb";
import {FaArrowTrendUp} from "react-icons/fa6";
import {MdAttachMoney} from "react-icons/md";
import {PiWarningCircleBold} from "react-icons/pi";
import Charts from "../components/Charts";

const stats = [
  {
    title: "Total patients",
    value: "2,847",
    percentage: 8.2,
    icon: FiUsers,
    color_bg: "bg-blue-100",
    color_text: "text-blue-600",
    positive: true,
  },
  {
    title: "Upcoming appointments",
    value: "142",
    percentage: 12,
    icon: FaCalendarAlt,
    color_bg: "bg-teal-100",
    color_text: "text-teal-600",
    positive: true,
  },
  {
    title: "Vaccinations due",
    value: "38",
    percentage: 3,
    icon: TbVaccine,
    color_bg: "bg-orange-100",
    color_text: "text-orange-600",
    positive: false,
  },
  {
    title: "Retention rate",
    value: "87.4%",
    percentage: 1.4,
    icon: FaArrowTrendUp,
    color_bg: "bg-green-100",
    color_text: "text-green-600",
    positive: true,
  },
  {
    title: "Revenue (MTD)",
    value: "$124.8k",
    percentage: 6.3,
    icon: MdAttachMoney,
    color_bg: "bg-blue-100",
    color_text: "text-blue-600",
    positive: true,
  },
  {
    title: "No-show rate",
    value: "4.2%",
    percentage: 0.6,
    icon: PiWarningCircleBold,
    color_bg: "bg-red-100",
    color_text: "text-red-600",
    positive: false,
  },
];

function Dashboard() {
  return (
    <div className="mt-16 space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Welcome back, Dr. Poland
        </h1>
        <p className="text-sm text-gray-400 mt-1">
          Here's how your clinic is performing today.
        </p>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-3 xl:grid-cols-6 gap-3">
        {stats.map((item) => (
          <StatCard stat={item} key={item.title} />
        ))}
      </div>

      {/* Charts */}
      <Charts />
    </div>
  );
}

function StatCard({stat}) {
  return (
    <div className="flex flex-col justify-between h-36 bg-white rounded-2xl p-4 border border-black/5 dark:bg-slate-800 dark:text-white dark:border-white/5">
      <div className="flex items-center justify-between">
        <div
          className={`flex items-center justify-center w-9 h-9 rounded-xl ${stat.color_bg} ${stat.color_text}`}
        >
          <stat.icon size={17} />
        </div>
        <span
          className={`text-xs font-medium px-2 py-0.5 rounded-full ${
            stat.positive
              ? "bg-green-50 text-green-600 dark:bg-green-900/30"
              : "bg-red-50 text-red-500 dark:bg-red-900/30"
          }`}
        >
          {stat.positive ? "+" : "-"}
          {stat.percentage}%
        </span>
      </div>

      <div>
        <p className="text-xl font-semibold text-gray-900 dark:text-white">
          {stat.value}
        </p>
        <p className="text-xs text-gray-400 mt-0.5">{stat.title}</p>
      </div>
    </div>
  );
}

export default Dashboard;
