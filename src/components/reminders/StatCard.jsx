const colorMap = {
  blue: {
    bg: "bg-blue-100 dark:bg-blue-500/10",
    text: "text-blue-700 dark:text-blue-400",
  },
  green: {
    bg: "bg-green-100 dark:bg-green-500/10",
    text: "text-green-700 dark:text-green-400",
  },
  red: {
    bg: "bg-red-100 dark:bg-red-500/10",
    text: "text-red-600 dark:text-red-400",
  },
  purple: {
    bg: "bg-purple-100 dark:bg-purple-500/10",
    text: "text-purple-700 dark:text-purple-400",
  },
};

function StatCard({stat}) {
  const {bg, text} = colorMap[stat.color] ?? colorMap.blue;

  return (
    <div
      className="flex flex-col flex-1 h-20 justify-between py-2.5 px-4 rounded-2xl
                 bg-white dark:bg-slate-800
                 border border-slate-200 dark:border-slate-700
                 shadow-sm"
    >
      <div className="flex items-center justify-between">
        <span className="text-xs text-slate-400 dark:text-slate-500 truncate">
          {stat.title}
        </span>
        <div
          className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${bg}`}
        >
          <stat.icon className={`text-sm ${text}`} />
        </div>
      </div>


      <p className="text-xl font-semibold text-slate-900 dark:text-white leading-none">
        {stat.value}
      </p>
    </div>
  );
}

export default StatCard;
