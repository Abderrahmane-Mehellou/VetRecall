import {
  getColors,
  getIconAndColor,
} from "../../../utils/helpers";
import {FaBell} from "react-icons/fa";

function Table({data}) {
  return (
    <div
      className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200
                     dark:border-slate-700 shadow-sm p-6"
    >
      {data.length !== 0 ? (
        <div className="divide-y divide-slate-100 dark:divide-slate-700">
          {data.map((item) => (
            <TableItem item={item} key={item.id} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center text-center py-10">
          <div
            className="w-11 h-11 rounded-full bg-slate-100 dark:bg-slate-700
                           flex items-center justify-center mb-3"
          >
            <FaBell className="text-slate-400 dark:text-slate-500" size={16} />
          </div>
          <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
            No upcoming reminders
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Scheduled reminders will appear here.
          </p>
        </div>
      )}
    </div>
  );
}

export default Table;

function TableItem({item}) {
  const {colors, Icon} = getIconAndColor(item.type);

  return (
    <div className="flex items-center justify-between gap-4 py-3.5 first:pt-0 last:pb-0">
      <div className="flex items-center gap-3 min-w-0">
        <span
          className={`shrink-0 flex items-center justify-center w-10 h-10 rounded-full ${colors}`}
        >
          <Icon size={18} />
        </span>

        <div className="min-w-0">
          <h3 className="font-semibold text-sm text-slate-900 dark:text-white truncate">
            {item.title}
          </h3>
          <div className="flex items-center gap-1.5 text-xs text-slate-400 dark:text-slate-500 mt-0.5 truncate">
            <span>{item.patient}</span>
            <span>&bull;</span>
            <span>{item.channel}</span>
            <span>&bull;</span>
            <span>{item.scheduledAt}</span>
          </div>
        </div>
      </div>

      <span
        className={`shrink-0 px-3 py-1 rounded-full text-xs font-medium ${getColors(item.status)}`}
      >
        {item.status}
      </span>
    </div>
  );
}
