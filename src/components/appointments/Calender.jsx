import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import {useContext} from "react";
import SettingsContext from "../../context/SettingsContext";

import "../../styles/calender.css";

const events = [
  {
    id: "1",
    title: "Max — Vaccination\nGolden Retriever\nDr. Patel",
    start: "2026-06-28T09:00:00",
    end: "2026-06-28T09:45:00",
    className: "vaccine",
  },
  {
    id: "2",
    title: "Luna — Dental\nPersian Cat\nDr. Singh",
    start: "2026-06-28T13:00:00",
    end: "2026-06-28T14:00:00",
    className: "dental",
  },
  {
    id: "3",
    title: "Bella — Wellness\nPoodle\nDr. Patel",
    start: "2026-06-29T16:00:00",
    end: "2026-06-29T17:00:00",
    className: "wellness",
  },
  {
    id: "4",
    title: "Whiskers — Wellness\nMaine Coon\nDr. Lee",
    start: "2026-06-29T10:30:00",
    end: "2026-06-29T11:15:00",
    className: "wellness",
  },
  {
    id: "5",
    title: "Charlie — Surgery\nLabrador\nDr. Lee",
    start: "2026-06-29T14:30:00",
    end: "2026-06-29T16:30:00",
    className: "surgery",
  },
  {
    id: "6",
    title: "Buddy — Follow-up\nBeagle\nDr. Patel",
    start: "2026-06-30T11:15:00",
    end: "2026-06-30T12:00:00",
    className: "followup",
  },
  {
    id: "7",
    title: "Lucy — Vaccination\nFrench Bulldog\nDr. Smith",
    start: "2026-06-30T15:00:00",
    end: "2026-06-30T15:30:00",
    className: "vaccine",
  },
  {
    id: "8",
    title: "Rocky — Wellness\nGerman Shepherd\nDr. Patel",
    start: "2026-07-01T08:30:00",
    end: "2026-07-01T09:15:00",
    className: "wellness",
  },
  {
    id: "9",
    title: "Daisy — Dental\nSiamese Cat\nDr. Singh",
    start: "2026-07-01T10:30:00",
    end: "2026-07-01T11:30:00",
    className: "dental",
  },
  {
    id: "10",
    title: "Milo — Follow-up\nCocker Spaniel\nDr. Patel",
    start: "2026-07-01T14:00:00",
    end: "2026-07-01T14:45:00",
    className: "followup",
  },
  {
    id: "11",
    title: "Oscar — Surgery\nBulldog\nDr. Lee",
    start: "2026-07-02T09:00:00",
    end: "2026-07-02T11:00:00",
    className: "surgery",
  },
  {
    id: "12",
    title: "Coco — Vaccination\nBritish Shorthair\nDr. Smith",
    start: "2026-07-03T13:30:00",
    end: "2026-07-03T14:00:00",
    className: "vaccine",
  },
  {
    id: "13",
    title: "Leo — Wellness\nGolden Retriever\nDr. Patel",
    start: "2026-07-04T09:30:00",
    end: "2026-07-04T10:15:00",
    className: "wellness",
  },
  {
    id: "14",
    title: "Nala — Dental\nRagdoll Cat\nDr. Singh",
    start: "2026-07-04T11:00:00",
    end: "2026-07-04T12:00:00",
    className: "dental",
  },
  {
    id: "15",
    title: "Jack — Follow-up\nBorder Collie\nDr. Lee",
    start: "2026-07-05T15:30:00",
    end: "2026-07-05T16:15:00",
    className: "followup",
  },
];

function Calender() {
  const {language} = useContext(SettingsContext);

  return (
    <div className="mt-10 w-full h-182.5 p-3 rounded-3xl bg-white shadow dark:bg-slate-900">
      <FullCalendar
        height={700}
        expandRows={false}
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="timeGridWeek"
        headerToolbar={false}
        allDaySlot={false}
        nowIndicator
        editable
        selectable
        slotMinTime="08:00:00"
        slotMaxTime="17:00:00"
        slotDuration="00:30:00"
        scrollTime="08:00:00"
        scrollTimeReset={false}
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
        slotLabelFormat={{
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }}
        locale={language === "en" ? "en-gb" : "ar-dz"}
        events={events}
        eventContent={(info) => {
          const [pet, breed, doctor] = info.event.title.split("\n");

          return (
            <div className="px-2 py-1 text-[11px] leading-tight">
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
