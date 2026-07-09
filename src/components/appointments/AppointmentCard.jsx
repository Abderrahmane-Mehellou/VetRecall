import {getIconAndColor, getColors} from "../../utils/helpers";

function formatTime(dateStr) {
  return new Date(dateStr).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
}

function getDurationMinutes(start, end) {
  return Math.round((new Date(end) - new Date(start)) / 60000);
}

function AppointmentCard({event}) {
  const {petName, ownerName, doctor, type, status} = event.extendedProps;
  const {colors, Icon} = getIconAndColor(type);
  const [bgColor, textColor] = colors.split(" ");
  const typeLabel = type.charAt(0).toUpperCase() + type.slice(1);
  const duration = getDurationMinutes(event.start, event.end);

  return (
    <div
      className="flex items-center gap-3 w-full px-3.5 py-3 rounded-2xl
                     border border-slate-100 dark:border-slate-700
                     hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors"
    >
      <div
        className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${bgColor}`}
      >
        <Icon className={`text-lg ${textColor}`} />
      </div>

      <div className="flex flex-col items-center min-w-[52px] shrink-0">
        <span className="text-xs font-semibold text-slate-700 dark:text-slate-200">
          {formatTime(event.start)}
        </span>
        <span className="text-[10px] text-slate-400 dark:text-slate-500 mt-0.5">
          {duration} min
        </span>
      </div>

      <div className="w-px h-8 bg-slate-200 dark:bg-slate-600 shrink-0" />

      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-slate-800 dark:text-white truncate">
          {petName} · {typeLabel}
        </p>
        <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5 truncate">
          {ownerName} · {doctor}
        </p>
      </div>

      <span
        className={`text-[11px] font-medium px-2.5 py-1 rounded-full border shrink-0 ${getColors(status)}`}
      >
        {status}
      </span>
    </div>
  );
}

export default AppointmentCard;
