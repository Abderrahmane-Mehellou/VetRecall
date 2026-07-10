import { NavLink, Outlet, Route, Routes, useLocation } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { IoNotificationsOutline } from "react-icons/io5";
import { MdWorkspacePremium } from "react-icons/md";
import { FiCreditCard, FiUsers } from "react-icons/fi";
import { LuNetwork } from "react-icons/lu";

function Settings() {
  return (
    <div className="mt-16 space-y-8 max-w-[1600px] px-6">
      <Header />
      <div className="flex items-start gap-8">
        <Navigation />
        <div className="flex-1 min-w-0">
          <SettingsLayout />
        </div>
      </div>
    </div>
  );
}

export default Settings;

function SettingsLayout() {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm p-6">
      <Outlet />
    </div>
  );
}

function Header() {
  return (
    <div className="flex flex-col gap-1">
      <h1 className="text-2xl font-semibold text-slate-900 dark:text-white">
        Clinic settings
      </h1>
      <p className="text-sm text-slate-500 dark:text-slate-400">
        Manage your clinic profile, preferences, and integrations.
      </p>
    </div>
  );
}

const navigationItems = [
  { id: 1, name: "Profile", icon: CgProfile, href: "/settings" },
  // { id: 2, name: "Notification", icon: IoNotificationsOutline, href: "/settings/notification" },
  // { id: 3, name: "Subscription", icon: MdWorkspacePremium, href: "/settings/subscription" },
  // { id: 4, name: "Billing", icon: FiCreditCard, href: "/settings/billing" },
  // { id: 5, name: "Users", icon: FiUsers, href: "/settings/users" },
  // { id: 6, name: "Roles & permissions", icon: LuNetwork, href: "/settings/roles" },
];

function Navigation() {
  return (
    <nav
      className="flex flex-col gap-1.5 w-64 shrink-0 py-6 px-5 rounded-3xl
                     bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700
                     shadow-[0_1px_2px_rgba(15,23,42,0.04),0_12px_32px_-12px_rgba(15,23,42,0.10)]"
    >
      {navigationItems.map((item) => (
        <NavLink
          key={item.href}
          to={item.href}
          end
          className={({isActive}) =>
            `group relative flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm
             transition-all duration-150
             ${
               isActive
                 ? "bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-medium"
                 : "text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700/60 hover:text-slate-900 dark:hover:text-white"
             }`
          }
        >
          {({isActive}) => (
            <>
              {isActive && (
                <span className="absolute left-0 top-1/2 -translate-y-1/2 h-5 w-1 rounded-r-full bg-indigo-600 dark:bg-indigo-400" />
              )}
              <item.icon
                size={17}
                className={
                  isActive
                    ? "text-indigo-600 dark:text-indigo-400"
                    : "text-slate-400 dark:text-slate-500 group-hover:text-slate-600 dark:group-hover:text-slate-300"
                }
              />
              <span>{item.name}</span>
            </>
          )}
        </NavLink>
      ))}
    </nav>
  );
}


export function Notifications() {
  return <p className="text-sm text-slate-600 dark:text-slate-300">Hello from notification page</p>;
}
export function Subscription() {
  return <p className="text-sm text-slate-600 dark:text-slate-300">Hello from subscription page</p>;
}
export function Billing() {
  return <p className="text-sm text-slate-600 dark:text-slate-300">Hello from billing page</p>;
}
export function Users() {
  return <p className="text-sm text-slate-600 dark:text-slate-300">Hello from users page</p>;
}
export function Roles() {
  return <p className="text-sm text-slate-600 dark:text-slate-300">Hello from roles page</p>;
}