import {
  TbVaccine,
  TbStethoscope,
  TbActivityHeartbeat,
  TbCalendarEvent,
  TbChevronRight,
} from "react-icons/tb";

const templates = [
  {
    id: 1,
    name: "Vaccination due",
    channel: "Email",
    Icon: TbVaccine,
    color: "bg-blue-100 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400",
  },
  {
    id: 2,
    name: "Wellness reminder",
    channel: "SMS",
    Icon: TbStethoscope,
    color:
      "bg-green-100 text-green-700 dark:bg-green-500/10 dark:text-green-400",
  },
  {
    id: 3,
    name: "Follow-up check",
    channel: "Email",
    Icon: TbActivityHeartbeat,
    color: "bg-teal-100 text-teal-700 dark:bg-teal-500/10 dark:text-teal-400",
  },
  {
    id: 4,
    name: "Appointment reminder",
    channel: "SMS",
    Icon: TbCalendarEvent,
    color:
      "bg-purple-100 text-purple-700 dark:bg-purple-500/10 dark:text-purple-400",
  },
];

function Templates() {
  return (
    <div
      className="flex flex-col flex-1 gap-3 bg-white dark:bg-slate-800
                     border border-slate-200 dark:border-slate-700 rounded-2xl p-4 shadow-sm"
    >
      <div className="flex items-center justify-between mb-1">
        <p className="text-sm font-medium text-slate-800 dark:text-white">
          Templates
        </p>
        <button
          type="button"
          className="text-xs text-blue-600 dark:text-blue-400 hover:underline cursor-pointer"
        >
          Manage
        </button>
      </div>

      {templates.map((t) => (
        <button
          type="button"
          key={t.id}
          className="flex items-center gap-3 p-3 rounded-xl text-left
                     border border-slate-100 dark:border-slate-700
                     hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors cursor-pointer"
        >
          <div
            className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${t.color}`}
          >
            <t.Icon size={16} />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-slate-800 dark:text-white truncate">
              {t.name}
            </p>
            <p className="text-xs text-slate-400 dark:text-slate-500">
              {t.channel}
            </p>
          </div>
          <TbChevronRight
            className="text-slate-300 dark:text-slate-600"
            size={16}
          />
        </button>
      ))}
    </div>
  );
}

export default Templates;
