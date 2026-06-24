import {FiUsers} from "react-icons/fi";
import {FaCalendarAlt} from "react-icons/fa";
import {TbVaccine} from "react-icons/tb";
import {FaArrowTrendUp} from "react-icons/fa6";
import {MdAttachMoney} from "react-icons/md";
import {PiWarningCircleBold} from "react-icons/pi";

const stats = [
  {
    title: "Total Patients",
    value: "2,847",
    percentage: 8.2,
    icon: FiUsers,
    color_bg: "bg-blue-100",
    color_text: "text-blue-400",
  },
  {
    title: "Upcoming Appointments",
    value: "142",
    percentage: 12,
    icon: FaCalendarAlt,
    color_bg: "bg-teal-100",
    color_text: "text-teal-400",
  },
  {
    title: "Vaccinations Due",
    value: "38",
    percentage: 3,
    icon: TbVaccine,
    color_bg: "bg-orange-100",
    color_text: "text-orange-400",
  },
  {
    title: "Retention Rate",
    value: "87.4%",
    percentage: 1.4,
    icon: FaArrowTrendUp,
    color_bg: "bg-green-100",
    color_text: "text-green-400",
  },
  {
    title: "Revenue (MTD)",
    value: "$124.8k",
    percentage: 6.3,
    icon: MdAttachMoney,
    color_bg: "bg-blue-100",
    color_text: "text-blue-400",
  },
  {
    title: "No-show Rate",
    value: "4.2%",
    percentage: 0.6,
    icon: PiWarningCircleBold,
    color_bg: "bg-red-100",
    color_text: "text-red-400",
  },
];

function Dashboard() {
  return (
    <div className="h-auto dark:bg-slate-800 p-7">
      <div>
        <h1 className="text-2xl font-bold">Welcome back, Dr.Poland</h1>
        <h3>Here's how your clinic is performing today.</h3>
      </div>
      <div className="flex flex-row justify-around mt-10">
        {stats.map((item) => (
          <StatCard stat={item} key={item.title} />
        ))}
      </div>
    </div>
  );
}

function StatCard({stat}) {
  return (
    <div className="flex flex-col justify-between h-35 w-60 bg-white p-4 rounded-2xl">
      <div className="flex flex-row justify-between items-center">
        <div
          className={`flex justify-center items-center rounded-full h-10 w-10 ${stat.color_bg} ${stat.color_text}`}
        >
          <stat.icon size={20} />
        </div>
        <p className="text-green-500 text-sm">%{stat.percentage}</p>
      </div>
      <div>
        <p className="font-bold">{stat.value}</p>
        <p className="text-sm text-gray-500">{stat.title}</p>
      </div>
    </div>
  );
}

export default Dashboard;
