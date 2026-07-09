import {useContext} from "react";
import {TbCalendarEvent} from "react-icons/tb";
import SettingsContext from "../../context/SettingsContext";
import {getIconAndColor} from "../../utils/helpers";
import {getColors} from "../../utils/helpers";
import AppointmentCard from "./AppointmentCard";


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
    <div
      className="flex flex-col flex-[2] w-full px-6 py-6 bg-white dark:bg-slate-800 rounded-3xl
                     border border-slate-200 dark:border-slate-700 shadow-sm"
    >
      <div className="flex items-center justify-between mb-5">
        <div>
          <h1 className="text-base font-semibold text-slate-900 dark:text-white">
            {language === "en" ? "Today's schedule" : "مواعيد اليوم"}
          </h1>
          <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">
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
        <TbCalendarEvent
          className="text-slate-400 dark:text-slate-500"
          size={22}
        />
      </div>

      {todayEvents.length !== 0 ? (
        <div className="flex flex-col gap-2 overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {todayEvents.map((event) => (
            <AppointmentCard key={event.id} event={event} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center text-center py-10">
          <div className="w-11 h-11 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center mb-3">
            <TbCalendarEvent
              className="text-slate-400 dark:text-slate-500"
              size={18}
            />
          </div>
          <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
            Nothing scheduled today
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Appointments booked for today will show up here.
          </p>
        </div>
      )}
    </div>
  );
}


export default ScheduledToday;
