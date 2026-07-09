import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import {useContext, useRef, useState} from "react";
import {TbChevronLeft, TbChevronRight} from "react-icons/tb";
import SettingsContext from "../../context/SettingsContext";
import AppointmentsContext from "../../context/AppointmentsContext";
import { getIconAndColor, formatTime } from "../../utils/helpers";

const views = [
  {label: "Day", value: "timeGridDay"},
  {label: "Week", value: "timeGridWeek"},
  {label: "Month", value: "dayGridMonth"},
];


function Calendar({events}) {
  const {language} = useContext(SettingsContext);
  const calendarRef = useRef(null);
  const [activeView, setActiveView] = useState("timeGridWeek");
  const {week, setWeek} = useContext(AppointmentsContext);


  const changeView = (view) => {
    calendarRef.current.getApi().changeView(view);
    setActiveView(view);
  };

  const prev = () => calendarRef.current.getApi().prev();
  const next = () => calendarRef.current.getApi().next();
  const goToday = () => calendarRef.current.getApi().today();

  const locale = language === "en" ? "en-gb" : "ar-dz";

  return (
    <div
      className="mt-10 w-full p-4 rounded-3xl bg-white dark:bg-slate-800
                     border border-slate-200 dark:border-slate-700 shadow-sm"
    >
      {/* Custom toolbar */}
      <div className="flex items-center justify-between mb-4 px-2">
        <div className="flex items-center gap-2">
          <button
            onClick={prev}
            className="p-2 rounded-xl border border-slate-200 dark:border-slate-600
                       hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors cursor-pointer"
          >
            <TbChevronLeft
              className="text-slate-500 dark:text-slate-300"
              size={16}
            />
          </button>
          <button
            onClick={next}
            className="p-2 rounded-xl border border-slate-200 dark:border-slate-600
                       hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors cursor-pointer"
          >
            <TbChevronRight
              className="text-slate-500 dark:text-slate-300"
              size={16}
            />
          </button>
          <button
            onClick={goToday}
            className="px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-600
                       text-sm font-medium text-slate-600 dark:text-white
                       hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors cursor-pointer"
          >
            Today
          </button>
          <h2 className="text-lg font-semibold text-slate-800 dark:text-white ml-2">
            {week}
          </h2>
        </div>

        <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-700 rounded-xl p-1">
          {views.map((v) => (
            <button
              key={v.value}
              onClick={() => changeView(v.value)}
              className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                activeView === v.value
                  ? "bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-sm"
                  : "text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white"
              }`}
            >
              {v.label}
            </button>
          ))}
        </div>
      </div>

      <FullCalendar
        ref={calendarRef}
        height={700}
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="timeGridWeek"
        headerToolbar={false}
        allDaySlot={false}
        nowIndicator
        editable
        selectable
        datesSet={(info) => setWeek(info.view.title)}
        slotMinTime="08:00:00"
        slotMaxTime="17:00:00"
        slotDuration="00:30:00"
        scrollTime="08:00:00"
        locale={locale}
        events={events}
        dayHeaderContent={(arg) => {
          const isToday = arg.date.toDateString() === new Date().toDateString();
          return (
            <div className="flex flex-col items-center pt-3">
              <span className="text-xs text-slate-400 dark:text-slate-500 uppercase">
                {arg.date.toLocaleDateString(locale, {weekday: "short"})}
              </span>
              <span
                className={`mt-1 flex h-9 w-9 items-center justify-center rounded-full font-semibold ${
                  isToday
                    ? "bg-blue-600 text-white"
                    : "text-slate-800 dark:text-slate-200"
                }`}
              >
                {arg.date.getDate()}
              </span>
            </div>
          );
        }}
        slotLabelFormat={{hour: "2-digit", minute: "2-digit", hour12: false}}
        eventContent={(info) => {
          const {petName, ownerName, doctor, type} = info.event.extendedProps;
          const typeLabel = type.charAt(0).toUpperCase() + type.slice(1);

          return (
            <div className="px-2 py-1 text-[11px] leading-tight overflow-hidden">
              <div className="font-semibold truncate">
                {info.timeText} · {typeLabel}
              </div>
              <div className="truncate mt-0.5">
                {petName} — {ownerName}
              </div>
              <div className="opacity-70 truncate mt-0.5">{doctor}</div>
            </div>
          );
        }}
      />
    </div>
  );
}

export default Calendar;
