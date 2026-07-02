const templates = [
  {
    id: 1,
    name: "Vaccination due",
    channel: "Email",
    icon: "ti-vaccine",
    color: "bg-blue-100 text-blue-700",
  },
  {
    id: 2,
    name: "Wellness reminder",
    channel: "SMS",
    icon: "ti-stethoscope",
    color: "bg-green-100 text-green-700",
  },
  {
    id: 3,
    name: "Follow-up check",
    channel: "Email",
    icon: "ti-activity-heartbeat",
    color: "bg-teal-100 text-teal-700",
  },
  {
    id: 4,
    name: "Appointment reminder",
    channel: "SMS",
    icon: "ti-calendar-event",
    color: "bg-purple-100 text-purple-700",
  },
];

function Templates() {
  return (
    <div className="flex flex-col flex-1 gap-3 bg-white border border-black/5 rounded-2xl p-4 dark:bg-slate-800 dark:border-white/5">
      <div className="flex items-center justify-between mb-1">
        <p className="text-sm font-medium text-gray-800 dark:text-white">
          Templates
        </p>
        <button className="text-xs text-blue-600 hover:underline cursor-pointer">
          Manage
        </button>
      </div>

      {templates.map((t) => (
        <div
          key={t.id}
          className="flex items-center gap-3 p-3 rounded-xl border border-black/5 hover:bg-gray-50 dark:border-white/5 dark:hover:bg-slate-700 transition-colors cursor-pointer"
        >
          <div
            className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${t.color}`}
          >
            <i className={`ti ${t.icon} text-sm`} aria-hidden="true" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-800 dark:text-white truncate">
              {t.name}
            </p>
            <p className="text-xs text-gray-400">{t.channel}</p>
          </div>
          <i
            className="ti ti-chevron-right text-gray-300 text-sm"
            aria-hidden="true"
          />
        </div>
      ))}
    </div>
  );
}

export default Templates;
