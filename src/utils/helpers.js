import {TbVaccine} from "react-icons/tb";
import {LiaHeartbeatSolid} from "react-icons/lia";
import {FaStethoscope} from "react-icons/fa6";
import {TbDental} from "react-icons/tb";
import {PiFirstAidBold} from "react-icons/pi";
import {PiNotePencilBold} from "react-icons/pi";

export function generateInitial(name) {
  return name.slice(0, 2).toUpperCase();
}

export function getColors(value) {
  switch (value) {
    case "Active":
      return "bg-green-100 text-green-500 dark:bg-green-500/10 dark:text-green-400";
    case "Overdue":
      return "bg-red-100 text-red-500 dark:bg-red-500/10 dark:text-red-400";
    case "Reminder Sent":
      return "bg-orange-100 text-orange-500 dark:bg-orange-500/10 dark:text-orange-400";
    case "Scheduled":
      return "bg-blue-100 text-blue-500 dark:bg-blue-500/10 dark:text-blue-400";
    case "Sent":
      return "bg-green-100 text-green-500 dark:bg-green-500/10 dark:text-green-400";
    case "Failed":
      return "bg-red-100 text-red-500 dark:bg-red-500/10 dark:text-red-400";
    case "Inactive":
      return "bg-red-100 text-red-500 dark:bg-red-500/10 dark:text-red-400";
    case "Invited":
      return "bg-yellow-100 text-yellow-500 dark:bg-yellow-500/10 dark:text-yellow-400";
    case "appointment":
      return "bg-blue-100 text-blue-500 dark:bg-blue-500/10 dark:text-blue-400";
    case "reminder":
      return "bg-orange-100 text-orange-500 dark:bg-orange-500/10 dark:text-orange-400";
    case "billing":
      return "bg-green-100 text-green-500 dark:bg-green-500/10 dark:text-green-400";
    case "system":
      return "bg-gray-100 text-black dark:bg-gray-500/10 dark:text-gray-300";
    default:
      return "bg-gray-100 text-gray-500 dark:bg-gray-500/10 dark:text-gray-400";
  }
}

export function getAvatarColors(initials) {
  const colors = [
    "bg-blue-100 text-blue-600",
    "bg-teal-100 text-teal-600",
    "bg-purple-100 text-purple-600",
    "bg-amber-100 text-amber-600",
    "bg-pink-100 text-pink-600",
    "bg-green-100 text-green-600",
    "bg-orange-100 text-orange-600",
    "bg-red-100 text-red-600",
  ];

  const index =
    initials.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0) %
    colors.length;

  return colors[index];
}

export function getIconAndColor(value) {
  switch (value) {
    case "vaccination":
      return {colors: "bg-blue-100 text-blue-500", Icon: TbVaccine};
    case "wellness":
      return {colors: "bg-green-100 text-green-500", Icon: FaStethoscope};
    case "follow-up":
      return {colors: "bg-teal-100 text-teal-500", Icon: LiaHeartbeatSolid};
    case "dental":
      return {colors: "bg-orange-100 text-orange-500", Icon: TbDental};
    case "first-check":
      return {colors: "bg-purple-100 text-purple-500", Icon: PiFirstAidBold};
    case "consultation":
      return {colors: "bg-yellow-100 text-yellow-500", Icon: PiNotePencilBold};
  }
}

export function getEventsColor(value) {
  switch (value) {
    case "vaccination":
      return "bg-blue-100 text-blue-500";
    case "wellness":
      return "bg-green-100 text-green-500";
    case "follow-up":
      return "bg-teal-100 text-teal-500";
    case "dental":
      return "bg-orange-100 text-orange-500";
    case "first-check":
      return "bg-purple-100 text-purple-500";
    case "consultation":
      return "bg-yellow-100 text-yellow-500";
    case "Sent":
      return "bg-green-50 text-green-600 border-green-200";
    case "Upcoming":
      return "bg-blue-50 text-blue-600 border-blue-200";
    case "Failed":
      return "bg-red-50 text-red-500 border-red-200";
  }
}
