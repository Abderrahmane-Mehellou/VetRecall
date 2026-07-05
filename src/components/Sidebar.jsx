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

function NavSection({title, items, language}) {
  return (
    <div>
      <h2 className="text-xs font-semibold uppercase tracking-wide text-slate-400 dark:text-slate-500 px-4 mb-2">
        {title}
      </h2>
      <ul className="space-y-1">
        {items.map((item) => (
          <li key={item.path}>
            <NavLink
              to={item.path}
              end={item.path === "/"}
              className={({isActive}) =>
                `flex items-center gap-3 h-10 px-4 rounded-xl text-sm transition-colors duration-150
                ${
                  isActive
                    ? "bg-blue-600 text-white font-medium"
                    : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700"
                }`
              }
            >
              <item.icon size={16} className="shrink-0" />
              <span className="truncate">
                {language === "en" ? item.name : item.ar}
              </span>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Sidebar() {
  const {language} = useContext(SettingsContext);
  const isRtl = language !== "en";

  return (
    <div
      dir={isRtl ? "rtl" : "ltr"}
      className={`hidden desktop:flex fixed flex-col justify-between w-72 h-screen
                  bg-white dark:bg-slate-800 text-slate-700 dark:text-white
                  ${isRtl ? "border-l" : "border-r"} border-slate-200 dark:border-slate-700 p-4`}
    >
      <div className="flex flex-col gap-6 overflow-y-auto min-h-0">
        <Logo />
        <NavSection
          title={language === "en" ? "Workspace" : "مساحة العمل"}
          items={workspaceItems}
          language={language}
        />
        <NavSection
          title={language === "en" ? "Manage" : "إدارة"}
          items={manageItems}
          language={language}
        />
      </div>

      <div className="shrink-0 mt-4 p-4 rounded-xl text-center bg-indigo-50 dark:bg-slate-700">
        <h3 className="font-semibold text-sm text-slate-900 dark:text-white">
          {language === "en"
            ? "Upgrade to Enterprise"
            : "الترقية إلى النسخة الاحترافية"}
        </h3>
        <p className="text-xs text-slate-500 dark:text-slate-300 mt-1">
          {language === "en"
            ? "Unlock SMS reminders, multi-clinic and SSO."
            : "تفعيل رسائل SMS، دعم عدة عيادات وتسجيل الدخول الموحد."}
        </p>
        <button
          className="w-full mt-3 py-2 rounded-lg text-sm font-medium text-white
                           bg-blue-600 hover:bg-blue-700 transition-colors duration-150 cursor-pointer"
        >
          {language === "en" ? "Upgrade" : "ترقية"}
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
