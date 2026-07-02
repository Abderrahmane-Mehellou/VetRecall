import StatCard from "./StatCard"
import {MdMarkEmailRead} from "react-icons/md";
import {RiCalendarScheduleFill} from "react-icons/ri";
import {FiAlertCircle} from "react-icons/fi";
import {FaChartLine} from "react-icons/fa";

const reminderStats = [
  {
    id: 1,
    title: "Scheduled",
    value: 38,
    description: "Upcoming reminders",
    icon: RiCalendarScheduleFill,
    color: "blue",
  },
  {
    id: 2,
    title: "Sent (7d)",
    value: 124,
    description: "Sent in the last 7 days",
    icon: MdMarkEmailRead,
    color: "green",
  },
  {
    id: 3,
    title: "Failed",
    value: 3,
    description: "Delivery failures",
    icon: FiAlertCircle,
    color: "red",
  },
  {
    id: 4,
    title: "Delivery Rate",
    value: "97.6%",
    description: "Successful deliveries",
    icon: FaChartLine,
    color: "purple",
  },
];

function Summary() {
  return (
    <div className="grid grid-cols-4 gap-3 w-full">
      {reminderStats.map((stat) => (
        <StatCard stat={stat} key={stat.id} />
      ))}
    </div>
  );
}

export default Summary;
