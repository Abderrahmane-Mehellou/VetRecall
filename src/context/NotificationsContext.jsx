import {createContext, useState, useMemo} from "react";
import {MdOutlineCalendarMonth, MdNotificationsNone} from "react-icons/md";
import {GoCreditCard} from "react-icons/go";
import {IoSettingsOutline} from "react-icons/io5";

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

const NotificationsContext = createContext(null);

export function NotificationsProvider({children}) {
  const [notifications, setNotifications] = useState(initialNotifications);

  function markAsRead(id) {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? {...n, read: true} : n)),
    );
  }

  function markAllAsRead() {
    setNotifications((prev) => prev.map((n) => ({...n, read: true})));
  }

  const hasUnread = useMemo(
    () => notifications.some((n) => !n.read),
    [notifications],
  );
  const unreadCount = useMemo(
    () => notifications.filter((n) => !n.read).length,
    [notifications],
  );

  const value = {
    notifications,
    markAsRead,
    markAllAsRead,
    hasUnread,
    unreadCount,
  };

  return (
    <NotificationsContext.Provider value={value}>
      {children}
    </NotificationsContext.Provider>
  );
}

export default NotificationsContext;
