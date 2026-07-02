// Row.jsx
import {getColors, getEventsColor} from "../../utils/helpers";

const channelIcon = {
  SMS: "ti-message",
  Email: "ti-mail",
};

function Row({item}) {
  return (
    <div className="flex items-center px-4 py-3 border-b border-black/5 dark:border-white/5 hover:bg-gray-50 dark:hover:bg-slate-700/50 transition-colors">
      <p className="flex-2 text-sm font-medium text-gray-800 dark:text-white">
        {item.patient}
      </p>

      <p className="flex-2 text-sm text-gray-500 dark:text-gray-400">
        {item.type}
      </p>

      <div className="flex-1 flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400">
        <i
          className={`ti ${channelIcon[item.channel]} text-base`}
          aria-hidden="true"
        />
        {item.channel}
      </div>

      <p className="flex-2 text-sm text-gray-500 dark:text-gray-400 font-mono">
        {item.scheduled}
      </p>

      <div className="flex-1">
        <span
          className={`text-xs font-medium px-3 py-1 rounded-full border ${getEventsColor(item.status)}`}
        >
          {item.status}
        </span>
      </div>
    </div>
  );
}

export default Row;
