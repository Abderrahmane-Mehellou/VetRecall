import {FiUsers} from "react-icons/fi";
import {FaCalendarAlt} from "react-icons/fa";
import {TbVaccine} from "react-icons/tb";
import {FaArrowTrendUp} from "react-icons/fa6";
import {MdAttachMoney} from "react-icons/md";
import {PiWarningCircleBold} from "react-icons/pi";
import Charts from "../components/Charts";
import {useAuth} from "../hooks/useAuth";
import { useAppointments } from "../hooks/useAppointments";
import { usePatients } from "../hooks/usePatients";
import Spinner from "../ui/Spinner";


function Dashboard() {
  const {user, clinic} = useAuth();

  const {data: patients = [], loading} = usePatients()
  const {data: appointments = [], isLoading} = useAppointments()

  const vaccin = appointments.filter((item) => item.type === "vaccination").length
  const completedOrScheduled = appointments.filter(
    (a) => a.status !== "canceled",
  ).length;

  const retentionRate =
    appointments.length === 0
      ? 0
      : ((completedOrScheduled / appointments.length) * 100).toFixed(1);
  const noShows = appointments.filter((a) => a.status === "overdue").length;

  const noShowRate =
    appointments.length === 0
      ? 0
      : ((noShows / appointments.length) * 100).toFixed(1);
  
  const stats = [
    {
      title: "Total patients",
      value: patients.length,
      percentage: `${patients.length === 0 ? 0 : 8.2}`,
      icon: FiUsers,
      color_bg: "bg-blue-100",
      color_text: "text-blue-600",
      positive: true,
    },
    {
      title: "Upcoming appointments",
      value: appointments.length,
      percentage: `${appointments.length === 0 ? 0 : 5.1}`,
      icon: FaCalendarAlt,
      color_bg: "bg-teal-100",
      color_text: "text-teal-600",
      positive: true,
    },
    {
      title: "Vaccinations due",
      value: vaccin,
      percentage: `${vaccin === 0 ? 0 : 2.3}`,
      icon: TbVaccine,
      color_bg: "bg-orange-100",
      color_text: "text-orange-600",
      positive: false,
    },
    {
      title: "Retention rate",
      value: `${retentionRate}%`,
      percentage: `${retentionRate === 0 ? 0 : 0.6}`,
      icon: FaArrowTrendUp,
      color_bg: "bg-green-100",
      color_text: "text-green-600",
      positive: true,
    },
    {
      title: "No-show rate",
      value: `${noShowRate}%`,
      percentage: `${noShowRate === 0 ? 0 : 7.6}`,
      icon: PiWarningCircleBold,
      color_bg: "bg-red-100",
      color_text: "text-red-600",
      positive: false,
    },
  ];

  const name = user?.fullName?.split(" ")[0] ?? "User";;

  if (isLoading || loading) return <Spinner size="lg" /> 

  return (
    <div className="mt-16 space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Welcome back, {`Dr. ${name}`}!
        </h1>
        <p className="text-sm text-gray-400 mt-1">
          Here's how your clinic is performing today.
        </p>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-3 xl:grid-cols-5 gap-3">
        {stats.map((item) => (
          <StatCard stat={item} key={item.title} />
        ))}
      </div>

      {/* Charts */}
      <Charts />
    </div>
  );
}

function StatCard({ stat }) {
  return (
    <div className="flex flex-col justify-between h-36 p-4 rounded-2xl
                     bg-white dark:bg-slate-800
                     border border-slate-200 dark:border-slate-700
                     shadow-sm">
      <div className="flex items-center justify-between">
        <div
          className={`flex items-center justify-center w-9 h-9 rounded-xl ${stat.color_bg} ${stat.color_text}`}
        >
          <stat.icon size={17} />
        </div>
        <span
          className={`text-xs font-medium px-2 py-0.5 rounded-full ${
            stat.positive
              ? "bg-green-50 text-green-600 dark:bg-green-500/10 dark:text-green-400"
              : "bg-red-50 text-red-500 dark:bg-red-500/10 dark:text-red-400"
          }`}
        >
          {stat.positive ? "+" : "-"}
          {stat.percentage}%
        </span>
      </div>

      <div>
        <p className="text-xl font-semibold text-slate-900 dark:text-white">
          {stat.value}
        </p>
        <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">
          {stat.title}
        </p>
      </div>
    </div>
  );
}

export default Dashboard;
