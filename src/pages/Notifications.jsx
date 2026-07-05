import {BsCheckAll} from "react-icons/bs";
import {MdOutlineCalendarMonth, MdNotificationsNone} from "react-icons/md";
import {GoCreditCard} from "react-icons/go";
import {IoSettingsOutline} from "react-icons/io5";
import {FaBell, FaCheck} from "react-icons/fa";

import {getColors} from "../utils/helpers";
import { useState } from "react";

function Notifications() {
  return (
    <div className="mt-16 space-y-8">
      {/* Header */}
      <Header />
      <NotificationCenter />
    </div>
  );
}

export default Notifications;

function Header() {
  return (
    <div className="flex justify-between items-center">
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Notifications
        </h1>
        <p className="text-sm text-gray-400 mt-1">
          Stay on top of clinic activity
        </p>
      </div>
      <button className="bg-gray-100 text-black border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-200 transition-all duration-300 cursor-pointer dark:bg-blue-600 dark:hover:bg-blue-700">
        <BsCheckAll size={20} className="inline-block mr-2" />
        Mark all as read
      </button>
    </div>
  );
}

const notifications = [
  {
    id: 1,
    title: "New Appointment Scheduled",
    description: "A new appointment has been scheduled for John Doe.",
    time: "2 hours ago",
    type: "appointment",
    icon: MdOutlineCalendarMonth,
  },
  {
    id: 2,
    title: "Appointment Reminder",
    description: "Reminder: You have an appointment with Jane Smith tomorrow.",
    time: "1 day ago",
    type: "reminder",
    icon: MdNotificationsNone,
  },
  {
    id: 3,
    title: "New Message from Client",
    description: "You have received a new message from client Michael Johnson.",
    time: "3 days ago",
    type: "reminder",
    icon: MdNotificationsNone,
  },
  {
    id: 4,
    title: "Appointment Canceled",
    description: "The appointment with Sarah Williams has been canceled.",
    time: "5 days ago",
    type: "appointment",
    icon: MdOutlineCalendarMonth,
  },
  {
    id: 5,
    title: "New Appointment Scheduled",
    description: "A new appointment has been scheduled for John Doe.",
    time: "2 hours ago",
    type: "appointment",
    icon: MdOutlineCalendarMonth,
  },
  {
    id: 6,
    title: "Billing Update",
    description: "Your billing information has been updated.",
    time: "1 week ago",
    type: "billing",
    icon: GoCreditCard,
  },
  {
    id: 7,
    title: "System Maintenance",
    description: "Scheduled system maintenance will occur on Saturday.",
    time: "2 weeks ago",
    type: "system",
    icon: IoSettingsOutline,
  },
  {
    id: 8,
    title: "New Appointment Scheduled",
    description: "A new appointment has been scheduled for John Doe.",
    time: "2 hours ago",
    type: "appointment",
    icon: MdOutlineCalendarMonth,
  },
  {
    id: 9,
    title: "Appointment Reminder",
    description: "Reminder: You have an appointment with Jane Smith tomorrow.",
    time: "1 day ago",
    type: "reminder",
    icon: MdNotificationsNone,
  },
  {
    id: 10,
    title: "New Message from Client",
    description: "You have received a new message from client Michael Johnson.",
    time: "3 days ago",
    type: "reminder",
    icon: MdNotificationsNone,
  },
];

function NotificationCenter() {
  const [displayedNotification, setdisplayedNotification] =
    useState(notifications);

  return (
    <div className="mt-8">
      <div
        className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 
                       dark:border-slate-700 shadow-sm p-6 max-h-[47rem] overflow-y-auto
                       scrollbar-none [&::-webkit-scrollbar]:hidden"
      >
        <NotificationFilter
          setdisplayedNotification={setdisplayedNotification}
        />

        {displayedNotification.length !== 0 ? (
          <div className="mt-4 space-y-2">
            {displayedNotification.map((notification) => (
              <NotificationItem
                key={notification.id}
                notification={notification}
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

function NotificationFilter({setdisplayedNotification}) {

  function handleChangeType(e, type){
    e.preventDefault();
    const items = notifications.filter(item => item.type === type || type === "all");
    setdisplayedNotification(items);
    console.log(type)
  }
  return (
    <div className="flex justify-between items-center mb-4">
      <div className="flex bg-gray-50 dark:bg-gray-600 gap-2 py-1 px-2 rounded-full text-sm text-gray-600 dark:text-gray-300">
        <div
          className="dark:bg-gray-600 px-3 py-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-500 cursor-pointer"
          onClick={(e) => handleChangeType(e, "all")}
        >
          All
        </div>
        <div
          className="dark:bg-gray-600 px-3 py-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-500 cursor-pointer"
          onClick={(e) => handleChangeType(e, "appointment")}
        >
          Appointments
        </div>
        <div
          className="dark:bg-gray-600 px-3 py-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-500 cursor-pointer"
          onClick={(e) => handleChangeType(e, "reminder")}
        >
          Reminders
        </div>
        <div
          className="dark:bg-gray-600 px-3 py-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-500 cursor-pointer"
          onClick={(e) => handleChangeType(e, "billing")}
        >
          Billing
        </div>
        <div
          className="dark:bg-gray-600 px-3 py-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-500 cursor-pointer"
          onClick={(e) => handleChangeType(e, "system")}
        >
          System
        </div>
      </div>
    </div>
  );
}

function NotificationItem({notification}) {
  return (
    <div
      className="group flex items-center justify-between gap-4 bg-white dark:bg-slate-800 
                     rounded-xl px-4 py-3.5 border border-slate-200 dark:border-slate-700
                     shadow-sm hover:shadow-md hover:border-slate-300 dark:hover:border-slate-600
                     transition-all duration-200"
    >
      <div className="flex items-center gap-3.5 min-w-0">
        <div
          className={`flex shrink-0 items-center justify-center w-11 h-11 rounded-full ${getColors(notification.type)}`}
        >
          <notification.icon size={20} />
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

        <button
          type="button"
          aria-label="Mark as read"
          className="flex items-center justify-center w-8 h-8 rounded-full
                     bg-green-50 dark:bg-green-500/10 
                     hover:bg-green-100 dark:hover:bg-green-500/20
                     transition-colors duration-200 cursor-pointer"
        >
          <FaCheck size={13} className="text-green-600 dark:text-green-400" />
        </button>
      </div>
    </div>
  );
}