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
  switch (value?.toLowerCase()) {
    case "active":
    case "sent":
    case "billing":
      return "bg-green-100 text-green-500 dark:bg-green-500/10 dark:text-green-400";
    case "overdue":
    case "failed":
    case "inactive":
      return "bg-red-100 text-red-500 dark:bg-red-500/10 dark:text-red-400";
    case "reminder sent":
    case "reminder":
      return "bg-orange-100 text-orange-500 dark:bg-orange-500/10 dark:text-orange-400";
    case "scheduled":
    case "appointment":
      return "bg-blue-100 text-blue-500 dark:bg-blue-500/10 dark:text-blue-400";
    case "invited":
      return "bg-yellow-100 text-yellow-500 dark:bg-yellow-500/10 dark:text-yellow-400";
    case "canceled":
    case "cancelled":
      return "bg-slate-200 text-slate-500 dark:bg-slate-500/10 dark:text-slate-400";
    case "system":
      return "bg-gray-100 text-black dark:bg-gray-500/10 dark:text-gray-300";
    default:
      return "bg-gray-100 text-gray-500 dark:bg-gray-500/10 dark:text-gray-400";
  }
}
export function getAvatarColors(initials) {
  const colors = [
    "bg-blue-100 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400",
    "bg-teal-100 text-teal-600 dark:bg-teal-500/10 dark:text-teal-400",
    "bg-purple-100 text-purple-600 dark:bg-purple-500/10 dark:text-purple-400",
    "bg-amber-100 text-amber-600 dark:bg-amber-500/10 dark:text-amber-400",
    "bg-pink-100 text-pink-600 dark:bg-pink-500/10 dark:text-pink-400",
    "bg-green-100 text-green-600 dark:bg-green-500/10 dark:text-green-400",
    "bg-orange-100 text-orange-600 dark:bg-orange-500/10 dark:text-orange-400",
    "bg-red-100 text-red-600 dark:bg-red-500/10 dark:text-red-400",
  ];

  const index =
    initials.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0) %
    colors.length;

  return colors[index];
}

export function getIconAndColor(value) {
  switch (value) {
    case "vaccination":
      return {
        colors:
          "bg-blue-100 text-blue-500 dark:bg-blue-500/10 dark:text-blue-400",
        Icon: TbVaccine,
      };
    case "wellness":
      return {
        colors:
          "bg-green-100 text-green-500 dark:bg-green-500/10 dark:text-green-400",
        Icon: FaStethoscope,
      };
    case "follow-up":
      return {
        colors:
          "bg-teal-100 text-teal-500 dark:bg-teal-500/10 dark:text-teal-400",
        Icon: LiaHeartbeatSolid,
      };
    case "dental":
      return {
        colors:
          "bg-orange-100 text-orange-500 dark:bg-orange-500/10 dark:text-orange-400",
        Icon: TbDental,
      };
    case "first-check":
      return {
        colors:
          "bg-purple-100 text-purple-500 dark:bg-purple-500/10 dark:text-purple-400",
        Icon: PiFirstAidBold,
      };
    case "consultation":
      return {
        colors:
          "bg-yellow-100 text-yellow-500 dark:bg-yellow-500/10 dark:text-yellow-400",
        Icon: PiNotePencilBold,
      };
    default:
      return {
        colors:
          "bg-gray-100 text-gray-500 dark:bg-gray-500/10 dark:text-gray-400",
        Icon: PiNotePencilBold,
      };
  }
}

export function getReminderColor(value) {
  switch (value) {
    case "Sent":
      return "bg-green-50 text-green-600 border-green-200";
    case "Upcoming":
      return "bg-blue-50 text-blue-600 border-blue-200";
    case "Failed":
      return "bg-red-50 text-red-500 border-red-200";
  }
}

export function formatTime(dateStr) {
  return new Date(dateStr).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function formatAppointmentEvent(appointment) {
  const start = new Date(appointment.date);
  const end = new Date(start.getTime() + appointment.duration * 60000);

  return {
    id: appointment.id,
    start: start.toISOString(),
    end: end.toISOString(),
    className: appointment.type,
    extendedProps: {
      petName: appointment.petName,
      ownerName: appointment.ownerName,
      doctor: appointment.doctor,
      type: appointment.type,
      status: appointment.status,
    },
  };
}