import {useContext} from "react";
import SettingsContext from "../../context/SettingsContext";
import {getIconAndColor} from "../../utils/helpers";

const events = [
  {
    id: "1",
    title: "Max — Vaccination\nGolden Retriever\nDr. Patel",
    start: "2026-06-28T09:00:00",
    end: "2026-06-28T09:45:00",
    className: "vaccination",
  },
  {
    id: "2",
    title: "Luna — Wellness Exam\nPersian Cat\nDr. Singh",
    start: "2026-06-28T10:30:00",
    end: "2026-06-28T11:00:00",
    className: "wellness",
  },
  {
    id: "3",
    title: "Buddy — Follow Up\nLabrador\nDr. Patel",
    start: "2026-06-28T11:30:00",
    end: "2026-06-28T12:00:00",
    className: "follow-up",
  },
  {
    id: "4",
    title: "Bella — Dental Cleaning\nSiamese Cat\nDr. Ahmed",
    start: "2026-06-28T13:00:00",
    end: "2026-06-28T14:00:00",
    className: "dental",
  },
  {
    id: "5",
    title: "Rocky — First Check\nGerman Shepherd\nDr. Singh",
    start: "2026-06-28T14:30:00",
    end: "2026-06-28T15:15:00",
    className: "first-check",
  },
  {
    id: "6",
    title: "Daisy — Consultation\nMaine Coon\nDr. Patel",
    start: "2026-06-28T16:00:00",
    end: "2026-06-28T16:45:00",
    className: "consultation",
  },
];


function formatTime(dateStr) {
  return new Date(dateStr).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
}

function getDuration(start, end) {
  const diff = (new Date(end) - new Date(start)) / 60000;
  return `${diff} min`;
}

const borderColors = {
  vaccination: "border-l-blue-500",
  wellness: "border-l-green-500",
  "follow-up": "border-l-teal-500",
  dental: "border-l-orange-500",
  "first-check": "border-l-purple-500",
  consultation: "border-l-yellow-500",
};

function ScheduledToday({todayEvents}) {
  const {language} = useContext(SettingsContext);

  return (
    <div className="flex flex-col flex-2 w-full px-6 py-6 bg-white rounded-3xl dark:bg-slate-800 dark:text-white">
      <div className="flex items-center justify-between mb-5">
        <div>
          <h1 className="text-base font-semibold">
            {language === "en" ? "Today's schedule" : "مواعيد اليوم"}
          </h1>
          <p className="text-xs text-gray-400 mt-0.5">
            {new Date().toLocaleDateString(
              language === "en" ? "en-GB" : "ar-dz",
              {
                weekday: "long",
                month: "long",
                day: "numeric",
              },
            )}{" "}
            · {todayEvents.length} appointments
          </p>
        </div>
        <i className="ti ti-calendar-event text-xl text-gray-400" />
      </div>

      <div className="flex flex-col gap-2 overflow-y-auto scrollbar-none">
        {todayEvents.map((event) => (
          <AppointmentCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}

function AppointmentCard({event}) {
  const [pet, animal, doctor] = event.title.split("\n");
  const {colors, Icon} = getIconAndColor(event.className);
  const [bgColor, textColor] = colors.split(" ");
  const borderColor = borderColors[event.className];

  return (
    <div
      className={`flex items-center gap-3 w-full px-3.5 py-3 rounded-2xl border-l-4 ${bgColor} ${borderColor}`}
    >
      <div
        className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 bg-white/60`}
      >
        <Icon className={`text-lg ${textColor}`} />
      </div>

      <div
        className={`flex flex-col items-center min-w-[44px] flex-shrink-0 ${textColor}`}
      >
        <span className="text-xs font-semibold">{formatTime(event.start)}</span>
        <span className="text-[10px] text-gray-400 mt-0.5">
          {getDuration(event.start, event.end)}
        </span>
      </div>

      <div className="w-px h-8 bg-black/8 flex-shrink-0" />

      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-gray-800 truncate dark:text-gray-500">
          {pet} · {animal}
        </p>
        <p className="text-xs text-gray-400 mt-0.5">{doctor}</p>
      </div>

      <span
        className={`text-[11px] font-medium px-2.5 py-1 rounded-full bg-white/60 ${textColor} flex-shrink-0`}
      >
        {event.className.charAt(0).toUpperCase() + event.className.slice(1)}
      </span>

      <button className="text-xs font-medium px-3 py-1.5 rounded-lg border border-black/10 bg-white/70 text-gray-600 hover:bg-white transition-colors flex-shrink-0 cursor-pointer">
        Details
      </button>
    </div>
  );
}

export default ScheduledToday;