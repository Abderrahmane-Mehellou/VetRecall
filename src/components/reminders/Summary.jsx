import StatCard from "./StatCard"
import {RiCalendarScheduleFill} from "react-icons/ri";
import {FaChartLine} from "react-icons/fa";
import {LuCalendarFold} from "react-icons/lu";
import {FaRegCalendarXmark} from "react-icons/fa6";
import { useAppointments } from "../../hooks/useAppointments";
import Spinner from "../../ui/Spinner";



function Summary() {

  const {data: reminders = [], isLoading} = useAppointments();

  let scheduled = 0;
  let overdue = 0;
  let canceled = 0;

  reminders.forEach((item) => {
    switch (item.status) {
      case "scheduled":
        scheduled++;
        break;
      case "overdue":
        overdue++;
        break;
      case "canceled":
        canceled++;
        break;
      default:
        break;
    }
  });

  const total = reminders.length;

  const successRate = total === 0 ? 0 : ((scheduled / total) * 100).toFixed(1);


  const reminderStats = [
    {
      id: 1,
      title: "Scheduled",
      value: scheduled,
      description: "Upcoming reminders",
      icon: RiCalendarScheduleFill,
      color: "blue",
    },
    {
      id: 2,
      title: "Overdue",
      value: overdue,
      description: "Sent in the last 7 days",
      icon: LuCalendarFold,
      color: "green",
    },
    {
      id: 3,
      title: "Canceled",
      value: canceled,
      description: "Delivery failures",
      icon: FaRegCalendarXmark,
      color: "red",
    },
    {
      id: 4,
      title: "Successful Rate",
      value: `${successRate}%`,
      description: "Successful deliveries",
      icon: FaChartLine,
      color: "purple",
    },
  ];

  if (isLoading) return <Spinner size="lg" color="blue" /> 

  return (
    <div className="grid grid-cols-4 gap-3 w-full">
      {reminderStats.map((stat) => (
        <StatCard stat={stat} key={stat.id} />
      ))}
    </div>
  );
}

export default Summary;
