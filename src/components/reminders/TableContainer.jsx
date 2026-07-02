import {useState} from "react";
import Table from "./Table";

const views = [
  {label: "All", value: "all"},
  {label: "Upcoming", value: "upcoming"},
  {label: "Sent", value: "sent"},
  {label: "Failed", value: "failed"},
];

const reminders = [
  {
    id: 1,
    patient: "Buddy",
    type: "Annual Wellness",
    channel: "SMS",
    scheduled: "2026-06-24 11:00",
    status: "Sent",
  },
  {
    id: 2,
    patient: "Rocky",
    type: "Vaccination Booster",
    channel: "SMS",
    scheduled: "2026-06-26 10:00",
    status: "Sent",
  },
  {
    id: 3,
    patient: "Max",
    type: "Dental Cleaning",
    channel: "Email",
    scheduled: "2026-06-28 09:00",
    status: "Upcoming",
  },
  {
    id: 4,
    patient: "Luna",
    type: "Follow-up Check",
    channel: "SMS",
    scheduled: "2026-06-28 14:00",
    status: "Upcoming",
  },
  {
    id: 5,
    patient: "Bella",
    type: "Vaccination Due",
    channel: "Email",
    scheduled: "2026-06-29 10:30",
    status: "Upcoming",
  },
  {
    id: 6,
    patient: "Charlie",
    type: "Annual Wellness",
    channel: "Email",
    scheduled: "2026-06-30 09:00",
    status: "Upcoming",
  },
  {
    id: 7,
    patient: "Daisy",
    type: "Post-Surgery Review",
    channel: "SMS",
    scheduled: "2026-06-30 15:00",
    status: "Upcoming",
  },
  {
    id: 8,
    patient: "Milo",
    type: "Flea Treatment",
    channel: "Email",
    scheduled: "2026-07-01 11:00",
    status: "Upcoming",
  },
  {
    id: 9,
    patient: "Nala",
    type: "Vaccination Booster",
    channel: "SMS",
    scheduled: "2026-07-01 14:00",
    status: "Upcoming",
  },
  {
    id: 10,
    patient: "Oscar",
    type: "Dental Cleaning",
    channel: "Email",
    scheduled: "2026-07-02 09:30",
    status: "Failed",
  },
  {
    id: 11,
    patient: "Coco",
    type: "Follow-up Check",
    channel: "SMS",
    scheduled: "2026-06-20 10:00",
    status: "Sent",
  },
  {
    id: 12,
    patient: "Leo",
    type: "Annual Wellness",
    channel: "Email",
    scheduled: "2026-06-21 13:00",
    status: "Sent",
  },
  {
    id: 13,
    patient: "Whiskers",
    type: "Weight Check",
    channel: "SMS",
    scheduled: "2026-07-03 11:30",
    status: "Upcoming",
  },
  {
    id: 14,
    patient: "Lucy",
    type: "Vaccination Due",
    channel: "Email",
    scheduled: "2026-06-18 09:00",
    status: "Failed",
  },
  {
    id: 15,
    patient: "Jack",
    type: "Post-Op Follow-up",
    channel: "SMS",
    scheduled: "2026-07-05 16:00",
    status: "Upcoming",
  },
];


function TableContainer() {
  const [active, setActive] = useState("all");

  const filteredReminders = reminders.filter(
    (r) => active === "all" || r.status.toLowerCase() === active.toLowerCase(),
  );

  return (
    <div className="flex flex-col flex-2 gap-4 bg-white border border-black/5 rounded-2xl p-4 dark:bg-slate-800 dark:border-white/5">
      <div className="flex items-center gap-1 bg-gray-100 dark:bg-slate-700 rounded-xl p-1 w-fit">
        {views.map((v) => (
          <button
            key={v.value}
            onClick={() => setActive(v.value)}
            className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
              active === v.value
                ? "bg-white dark:bg-slate-900 text-blue-600 shadow-sm"
                : "text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white"
            }`}
          >
            {v.label}
          </button>
        ))}
      </div>

      {/* ✅ pass filtered reminders, remove the fixed height wrapper */}
      <Table reminders={filteredReminders} />
    </div>
  );
}

export default TableContainer;
