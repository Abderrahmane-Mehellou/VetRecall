import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import {useContext, useRef, useState} from "react";
import SettingsContext from "../../context/SettingsContext";
import AppointmentsContext from "../../context/AppointmentsContext";

const views = [
  {label: "Day", value: "timeGridDay"},
  {label: "Week", value: "timeGridWeek"},
  {label: "Month", value: "dayGridMonth"},
];

function Calender({events}) {
  const {language} = useContext(SettingsContext);
  const calendarRef = useRef(null);
  const [activeView, setActiveView] = useState("timeGridWeek");
  const {week, setWeek} = useContext(AppointmentsContext)

  const changeView = (view) => {
    const api = calendarRef.current.getApi();
    api.changeView(view);
    setActiveView(view);
  };

  const prev = () => calendarRef.current.getApi().prev();
  const next = () => calendarRef.current.getApi().next();
  const goToday = () => calendarRef.current.getApi().today();

  return (
    <div className="mt-10 w-full p-4 rounded-3xl bg-white shadow dark:bg-slate-900">
      {/* Custom toolbar */}
      <div className="flex items-center justify-between mb-4 px-2">
        {/* Left: prev / next / today / title */}
        <div className="flex items-center gap-2">
          <button
            onClick={prev}
            className="p-2 rounded-xl border border-black/10 hover:bg-gray-50 dark:hover:bg-slate-700 cursor-pointer transition-colors"
          >
            <i className="ti ti-chevron-left text-sm text-gray-500" />
          </button>
          <button
            onClick={next}
            className="p-2 rounded-xl border border-black/10 hover:bg-gray-50 dark:hover:bg-slate-700 cursor-pointer transition-colors"
          >
            <i className="ti ti-chevron-right text-sm text-gray-500" />
          </button>
          <button
            onClick={goToday}
            className="px-3 py-1.5 rounded-xl border border-black/10 text-sm font-medium text-gray-600 cursor-pointer hover:bg-gray-50 dark:text-white dark:hover:bg-slate-700 transition-colors"
          >
            Today
          </button>
          <h2 className="text-lg font-semibold text-gray-800 dark:text-white ml-2">
            {week}
          </h2>
        </div>

        {/* Right: view switcher */}
        <div className="flex items-center gap-1 bg-gray-100 dark:bg-slate-700 rounded-xl p-1">
          {views.map((v) => (
            <button
              key={v.value}
              onClick={() => changeView(v.value)}
              className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                activeView === v.value
                  ? "bg-white dark:bg-slate-900 text-blue-600 shadow-sm"
                  : "text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white"
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
        locale={language === "en" ? "en-gb" : "ar-dz"}
        events={events}
        dayHeaderContent={(arg) => {
          const isToday = arg.date.toDateString() === new Date().toDateString();
          return (
            <div className="flex flex-col items-center pt-3">
              <span className="text-xs text-gray-500 uppercase">
                {arg.date.toLocaleDateString("en", {weekday: "short"})}
              </span>
              <span
                className={`mt-1 flex h-9 w-9 items-center justify-center rounded-full font-semibold ${
                  isToday ? "bg-blue-600 text-white" : "text-slate-800"
                }`}
              >
                {arg.date.getDate()}
              </span>
            </div>
          );
        }}
        slotLabelFormat={{hour: "2-digit", minute: "2-digit", hour12: false}}
        eventContent={(info) => {
          const [pet, breed, doctor] = info.event.title.split("\n");
          return (
            <div className={`px-2 py-1 text-[11px] leading-tight `}>
              <div className="font-semibold">{pet}</div>
              <div>{breed}</div>
              <div className="opacity-70">{doctor}</div>
            </div>
          );
        }}
      />
    </div>
  );
}

export default Calender;
