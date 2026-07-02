const colorMap = {
  blue: {bg: "bg-blue-100", text: "text-blue-700"},
  green: {bg: "bg-green-100", text: "text-green-700"},
  red: {bg: "bg-red-100", text: "text-red-600"},
  purple: {bg: "bg-purple-100", text: "text-purple-700"},
};

function StatCard({stat}) {
  const {bg, text} = colorMap[stat.color] ?? colorMap.blue;

  return (
    <div className="flex flex-col flex-1 gap-3 bg-white border border-black/5 p-4 rounded-2xl dark:bg-slate-800 dark:border-white/5 dark:text-white">
      <div className="flex items-center justify-between">
        <span className="text-xs text-gray-400">{stat.title}</span>
        <div
          className={`w-8 h-8 rounded-xl flex items-center justify-center ${bg}`}
        >
          <stat.icon className={`text-base ${text}`} />
        </div>
      </div>

      <div>
        <p className="text-2xl font-semibold text-gray-900 dark:text-white">
          {stat.value}
        </p>
        <p className="text-xs text-gray-400 mt-0.5">{stat.description}</p>
      </div>
    </div>
  );
}

export default StatCard;
