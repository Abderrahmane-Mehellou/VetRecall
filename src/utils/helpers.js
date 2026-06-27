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
      return "bg-green-100 text-green-500";
    case "Overdue":
      return "bg-red-100 text-red-500";
    case "Reminder Sent":
      return "bg-orange-100 text-orange-500";
  }
}

export function getUpcomingColors(value) {
  switch (value) {
    case "Scheduled":
      return "bg-blue-100 text-blue-500";
    case "Sent":
      return "bg-green-100 text-green-500";
    case "Failed":
      return "bg-red-100 text-red-500";
  }
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
      return {colors: "bg-orange-100 text-ogange-500", Icon: TbDental};
    case "first-check":
      return {colors: "bg-purple-100 text-purple-500", Icon: PiFirstAidBold};
    case "consultation":
      return {colors: "bg-yellow-100 text-yellow-500", Icon: PiNotePencilBold};
  }
}
