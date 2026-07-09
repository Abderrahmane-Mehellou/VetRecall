import {BsCheckAll} from "react-icons/bs";
import {MdOutlineCalendarMonth, MdNotificationsNone} from "react-icons/md";
import {GoCreditCard} from "react-icons/go";
import {IoSettingsOutline} from "react-icons/io5";
import {FaBell, FaCheck} from "react-icons/fa";
import {getColors} from "../utils/helpers";
import {useState, useMemo} from "react";
import { useNotifications } from "../hooks/useNotifications";

const initialNotifications = [
  {
    id: 1,
    title: "New Appointment Scheduled",
    description: "A new appointment has been scheduled for John Doe.",
    time: "2 hours ago",
    type: "appointment",
    icon: MdOutlineCalendarMonth,
    read: false,
  },
  {
    id: 2,
    title: "Appointment Reminder",
    description: "Reminder: You have an appointment with Jane Smith tomorrow.",
    time: "1 day ago",
    type: "reminder",
    icon: MdNotificationsNone,
    read: false,
  },
  {
    id: 3,
    title: "New Message from Client",
    description: "You have received a new message from client Michael Johnson.",
    time: "3 days ago",
    type: "reminder",
    icon: MdNotificationsNone,
    read: true,
  },
  {
    id: 4,
    title: "Appointment Canceled",
    description: "The appointment with Sarah Williams has been canceled.",
    time: "5 days ago",
    type: "appointment",
    icon: MdOutlineCalendarMonth,
    read: false,
  },
  {
    id: 5,
    title: "New Appointment Scheduled",
    description: "A new appointment has been scheduled for John Doe.",
    time: "2 hours ago",
    type: "appointment",
    icon: MdOutlineCalendarMonth,
    read: true,
  },
  {
    id: 6,
    title: "Billing Update",
    description: "Your billing information has been updated.",
    time: "1 week ago",
    type: "billing",
    icon: GoCreditCard,
    read: false,
  },
  {
    id: 7,
    title: "System Maintenance",
    description: "Scheduled system maintenance will occur on Saturday.",
    time: "2 weeks ago",
    type: "system",
    icon: IoSettingsOutline,
    read: true,
  },
  {
    id: 8,
    title: "New Appointment Scheduled",
    description: "A new appointment has been scheduled for John Doe.",
    time: "2 hours ago",
    type: "appointment",
    icon: MdOutlineCalendarMonth,
    read: false,
  },
  {
    id: 9,
    title: "Appointment Reminder",
    description: "Reminder: You have an appointment with Jane Smith tomorrow.",
    time: "1 day ago",
    type: "reminder",
    icon: MdNotificationsNone,
    read: true,
  },
  {
    id: 10,
    title: "New Message from Client",
    description: "You have received a new message from client Michael Johnson.",
    time: "3 days ago",
    type: "reminder",
    icon: MdNotificationsNone,
    read: true,
  },
];

const filters = [
  {label: "All", value: "all"},
  {label: "Appointments", value: "appointment"},
  {label: "Reminders", value: "reminder"},
  {label: "Billing", value: "billing"},
  {label: "System", value: "system"},
];

function Notifications() {
  const {notifications, markAsRead, markAllAsRead, hasUnread} =
    useNotifications();
  const [activeFilter, setActiveFilter] = useState("all");

  const displayedNotifications = useMemo(
    () =>
      activeFilter === "all"
        ? notifications
        : notifications.filter((n) => n.type === activeFilter),
    [notifications, activeFilter],
  );

  return (
    <div className="mt-16 space-y-8">
      <Header onMarkAllAsRead={markAllAsRead} hasUnread={hasUnread} />
      <NotificationCenter
        notifications={displayedNotifications}
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
        onMarkAsRead={markAsRead}
      />
    </div>
  );
}

export default Notifications;

function Header({onMarkAllAsRead, hasUnread}) {
  return (
    <div className="flex justify-between items-center">
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-semibold text-slate-900 dark:text-white">
          Notifications
        </h1>
        <p className="text-sm text-slate-400 dark:text-slate-500 mt-1">
          Stay on top of clinic activity
        </p>
      </div>

      <button
        type="button"
        onClick={onMarkAllAsRead}
        disabled={!hasUnread}
        className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium
                   bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200
                   hover:bg-slate-200 dark:hover:bg-slate-600
                   disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-slate-100 dark:disabled:hover:bg-slate-700
                   transition-colors cursor-pointer"
      >
        <BsCheckAll size={18} />
        Mark all as read
      </button>
    </div>
  );
}

function NotificationCenter({
  notifications,
  activeFilter,
  setActiveFilter,
  onMarkAsRead,
}) {
  return (
    <div className="mt-8">
      <div
        className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200
                       dark:border-slate-700 shadow-sm p-6 max-h-[47rem] overflow-y-auto
                       [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        <NotificationFilter
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />

        {notifications.length !== 0 ? (
          <div className="mt-4 space-y-2">
            {notifications.map((notification) => (
              <NotificationItem
                key={notification.id}
                notification={notification}
                onMarkAsRead={onMarkAsRead}
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center text-center py-12">
            <div
              className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-700
                             flex items-center justify-center mb-3"
            >
              <FaBell
                className="text-slate-400 dark:text-slate-500"
                size={18}
              />
            </div>
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
              No notifications
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              You're all caught up. New notifications will show up here.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

function NotificationFilter({activeFilter, setActiveFilter}) {
  return (
    <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-700 rounded-full p-1 w-fit">
      {filters.map((f) => (
        <button
          type="button"
          key={f.value}
          onClick={() => setActiveFilter(f.value)}
          className={`px-3.5 py-1.5 rounded-full text-sm font-medium transition-colors cursor-pointer ${
            activeFilter === f.value
              ? "bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-sm"
              : "text-slate-500 dark:text-slate-300 hover:text-slate-800 dark:hover:text-white"
          }`}
        >
          {f.label}
        </button>
      ))}
    </div>
  );
}

function NotificationItem({notification, onMarkAsRead}) {
  return (
    <div
      className={`group flex items-center justify-between gap-4 rounded-xl px-4 py-3.5
                  border transition-all duration-200
                  ${
                    notification.read
                      ? "bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700"
                      : "bg-blue-50/50 dark:bg-blue-500/5 border-blue-100 dark:border-blue-500/20"
                  }
                  hover:shadow-md hover:border-slate-300 dark:hover:border-slate-600`}
    >
      <div className="flex items-center gap-3.5 min-w-0">
        <div className="relative shrink-0">
          <div
            className={`flex items-center justify-center w-11 h-11 rounded-full ${getColors(notification.type)}`}
          >
            <notification.icon size={20} />
          </div>
          {!notification.read && (
            <span
              className="absolute -top-0.5 -right-0.5 w-3 h-3 rounded-full bg-blue-600
                              border-2 border-white dark:border-slate-800"
            />
          )}
        </div>

        <div className="min-w-0">
          <h3 className="text-sm font-semibold text-slate-900 dark:text-white truncate">
            {notification.title}
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 truncate">
            {notification.description}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-4 shrink-0">
        <span className="text-xs text-slate-400 dark:text-slate-500 whitespace-nowrap">
          {notification.time}
        </span>

        {!notification.read ? (
          <button
            type="button"
            aria-label="Mark as read"
            onClick={() => onMarkAsRead(notification.id)}
            className="flex items-center justify-center w-8 h-8 rounded-full
                       bg-green-50 dark:bg-green-500/10
                       hover:bg-green-100 dark:hover:bg-green-500/20
                       transition-colors duration-200 cursor-pointer"
          >
            <FaCheck size={13} className="text-green-600 dark:text-green-400" />
          </button>
        ) : (
          <div
            className="flex items-center justify-center w-8 h-8 rounded-full opacity-40"
            title="Already read"
          >
            <FaCheck size={13} className="text-slate-400" />
          </div>
        )}
      </div>
    </div>
  );
}
