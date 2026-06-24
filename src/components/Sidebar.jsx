import {NavLink} from "react-router-dom";
import Logo from "./Logo";
import {MdDashboard} from "react-icons/md";
import {
  FaChartBar,
  FaUsers,
  FaCalendarAlt,
  FaBell,
  FaCog,
  FaCreditCard,
} from "react-icons/fa";
import {useContext} from "react";
import SettingsContext from "../context/SettingsContext";

const workspaceItems = [
  {name: "Dashboard", ar: "لوحة التحكم", path: "/", icon: MdDashboard},
  {name: "Patients", ar: "المرضى", path: "/patients", icon: FaUsers},
  {
    name: "Appointments",
    ar: "المواعيد",
    path: "/appointments",
    icon: FaCalendarAlt,
  },
  {name: "Reminders", ar: "التذكيرات", path: "/reminders", icon: FaBell},
  {name: "Analytics", ar: "التحليلات", path: "/analytics", icon: FaChartBar},
];
const manageItems = [
  {name: "Team", ar: "الفريق", path: "/team", icon: FaUsers},
  {
    name: "Notifications",
    ar: "الإشعارات",
    path: "/notifications",
    icon: FaBell,
  },
  {name: "Billing", ar: "الفوترة", path: "/billing", icon: FaCreditCard},
  {name: "Settings", ar: "الإعدادات", path: "/settings", icon: FaCog},
];

function Sidebar() {
  const {language} = useContext(SettingsContext);
  return (
    <div
      className={`flex justify-between items-center fixed flex-col w-72 h-screen bg-white ${language === "en" ? "border-r" : "border-l"} p-4 text-gray-700 dark:bg-slate-800 dark:text-white hidden desktop:flex`}
    >
      <div className="flex flex-col space-y-4">
        <Logo />
        <div>
          <h2 className="font-bold text-lg mb-2">
            {language === "en" ? "Workspace" : "مساحة العمل"}
          </h2>
          <ul>
            {workspaceItems.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  className={({isActive}) =>
                    `flex flex-row items-center space-x-2 h-9 w-60 mb-4  px-4 py-2  rounded-3xl cursor-pointer transition-all ${isActive ? "bg-blue-500 text-white" : "text-gray-600  hover:bg-blue-100 hover:text-gray-800"} dark:text-white dark:hover:bg-slate-500`
                  }
                >
                  <item.icon />
                  <span>{language === "en" ? item.name : item.ar}</span>
                </NavLink>
              </li>
            ))}
          </ul>
          <h2 className="font-bold text-lg mb-2">
            {language === "en" ? "Manage" : "إدارة"}
          </h2>
          <ul>
            {manageItems.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  className={({isActive}) =>
                    `flex flex-row items-center space-x-2 h-9 w-60 mb-4  px-4 py-2  rounded-3xl cursor-pointer transition-all ${isActive ? "bg-blue-500 text-white" : "text-gray-600  hover:bg-blue-100 hover:text-gray-800"} dark:text-white dark:hover:bg-slate-500`
                  }
                >
                  <item.icon />
                  <span>{language === "en" ? item.name : item.ar}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="p-4  bg-blue-100 rounded-lg text-center dark:bg-slate-600 dark:text-white">
        <h3 className="font-bold">
          {language === "en"
            ? "Upgrade to Enterprise"
            : "الترقية إلى النسخة الاحترافية"}
        </h3>
        <p className="text-xs">
          {language === "en"
            ? "Unlock SMS reminders, multi-clinic and SSO."
            : "تفعيل رسائل SMS، دعم عدة عيادات وتسجيل الدخول الموحد."}
        </p>
        <button className="bg-blue-500 text-white text-sm w-full font-medium px-4 py-2 rounded-2xl cursor-pointer hover:bg-blue-600 transition-all mt-2">
          {language === "en" ? "Upgrade" : "ترقية"}
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
