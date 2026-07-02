const analyticsStats = [
  {
    id: 1,
    title: "Patient retention rate",
    value: "87.4%",
    change: "+1.4%",
    positive: true,
    icon: "ti-heart-rate-monitor",
    bg: "bg-blue-100",
    text: "text-blue-700",
  },
  {
    id: 2,
    title: "Recall success rate",
    value: "73.2%",
    change: "+4.1%",
    positive: true,
    icon: "ti-refresh-alert",
    bg: "bg-green-100",
    text: "text-green-700",
  },
  {
    id: 3,
    title: "Missed appointments",
    value: "4.2%",
    change: "-0.6%",
    positive: false,
    icon: "ti-calendar-x",
    bg: "bg-red-100",
    text: "text-red-600",
  },
  {
    id: 4,
    title: "Revenue impact",
    value: "$48.2k",
    change: "+12.8%",
    positive: true,
    icon: "ti-currency-dollar",
    bg: "bg-green-100",
    text: "text-green-700",
  },
  {
    id: 5,
    title: "Client engagement",
    value: "8.4/10",
    change: "+0.3",
    positive: true,
    icon: "ti-users",
    bg: "bg-purple-100",
    text: "text-purple-700",
  },
];

function Summary() {
  return (
    <div className="grid grid-cols-5 gap-3">
      {analyticsStats.map((stat) => (
        <StatCard stat={stat} key={stat.id} />
      ))}
    </div>
  );
}

export default Summary;

function StatCard({stat}) {
  return (
    <div className="flex flex-col gap-3 bg-white border border-black/5 rounded-2xl p-4 dark:bg-slate-800 dark:border-white/5 dark:text-white">
      <div className="flex items-center justify-between">
        <div
          className={`w-8 h-8 rounded-xl flex items-center justify-center ${stat.bg}`}
        >
          <i
            className={`ti ${stat.icon} text-base ${stat.text}`}
            aria-hidden="true"
          />
        </div>
        <span
          className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${
            stat.positive
              ? "bg-green-50 text-green-600 dark:bg-green-900/20"
              : "bg-red-50 text-red-500 dark:bg-red-900/20"
          }`}
        >
          {stat.change}
        </span>
      </div>

      <div>
        <p className="text-2xl font-semibold text-gray-900 dark:text-white">
          {stat.value}
        </p>
        <p className="text-xs text-gray-400 mt-0.5">{stat.title}</p>
      </div>
    </div>
  );
}
