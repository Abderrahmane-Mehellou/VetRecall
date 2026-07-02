import {useContext} from "react";
import AddScheduled from "../components/appointments/AddScheduled";
import Calender from "../components/appointments/Calender";
import ScheduledToday from "../components/appointments/ScheduledToday";
import AppointmentsContext, {
  AppointmentsProvider,
} from "../context/AppointmentsContext";

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
    title: "Luna — Dental Cleaning\nPersian Cat\nDr. Singh",
    start: "2026-06-28T13:00:00",
    end: "2026-06-28T14:00:00",
    className: "dental",
  },
  {
    id: "3",
    title: "Bella — Wellness Exam\nPoodle\nDr. Patel",
    start: "2026-06-29T16:00:00",
    end: "2026-06-29T17:00:00",
    className: "wellness",
  },
  {
    id: "4",
    title: "Whiskers — Consultation\nMaine Coon\nDr. Lee",
    start: "2026-06-29T10:30:00",
    end: "2026-06-29T11:15:00",
    className: "consultation",
  },
  {
    id: "5",
    title: "Charlie — First Check\nLabrador\nDr. Lee",
    start: "2026-06-29T14:30:00",
    end: "2026-06-29T16:30:00",
    className: "first-check",
  },
  {
    id: "6",
    title: "Buddy — Follow-up\nBeagle\nDr. Patel",
    start: "2026-06-30T11:15:00",
    end: "2026-06-30T12:00:00",
    className: "follow-up",
  },
  {
    id: "7",
    title: "Lucy — Vaccination\nFrench Bulldog\nDr. Smith",
    start: "2026-06-30T15:00:00",
    end: "2026-06-30T15:30:00",
    className: "vaccination",
  },
  {
    id: "8",
    title: "Rocky — Wellness Exam\nGerman Shepherd\nDr. Patel",
    start: "2026-07-01T08:30:00",
    end: "2026-07-01T09:15:00",
    className: "wellness",
  },
  {
    id: "9",
    title: "Daisy — Dental Cleaning\nSiamese Cat\nDr. Singh",
    start: "2026-07-01T10:30:00",
    end: "2026-07-01T11:30:00",
    className: "dental",
  },
  {
    id: "10",
    title: "Milo — Follow-up\nCocker Spaniel\nDr. Patel",
    start: "2026-07-01T14:00:00",
    end: "2026-07-01T14:45:00",
    className: "follow-up",
  },
  {
    id: "11",
    title: "Oscar — Consultation\nBulldog\nDr. Lee",
    start: "2026-07-02T09:00:00",
    end: "2026-07-02T11:00:00",
    className: "consultation",
  },
  {
    id: "12",
    title: "Coco — Vaccination\nBritish Shorthair\nDr. Smith",
    start: "2026-07-03T13:30:00",
    end: "2026-07-03T14:00:00",
    className: "vaccination",
  },
  {
    id: "13",
    title: "Leo — First Check\nGolden Retriever\nDr. Patel",
    start: "2026-07-04T09:30:00",
    end: "2026-07-04T10:15:00",
    className: "first-check",
  },
  {
    id: "14",
    title: "Nala — Dental Cleaning\nRagdoll Cat\nDr. Singh",
    start: "2026-07-04T11:00:00",
    end: "2026-07-04T12:00:00",
    className: "dental",
  },
  {
    id: "15",
    title: "Jack — Follow-up\nBorder Collie\nDr. Lee",
    start: "2026-07-05T15:30:00",
    end: "2026-07-05T16:15:00",
    className: "follow-up",
  },
];

function Appointments() {
  const todayEvents = events.filter(
    (event) =>
      new Date(event.start).toDateString() === new Date().toDateString(),
  );

  return (
    <AppointmentsProvider>
      <div className="mt-16 space-y-6">
        {/* Header */}
        <Header />

        {/* Calendar */}
        <Calender events={events} />

        {/* Bottom row */}
        <div className="flex flex-row gap-4">
          <ScheduledToday todayEvents={todayEvents} />
          <AddScheduled />
        </div>
      </div>
    </AppointmentsProvider>
  );
}

export default Appointments;

function Header() {
  const {week} = useContext(AppointmentsContext);

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="w-11 h-11 rounded-2xl bg-blue-100 flex items-center justify-center flex-shrink-0">
          <i className="ti ti-calendar-event text-blue-700 text-xl" />
        </div>
        <div>
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Appointments
          </h1>
          <p className="text-sm text-gray-400 mt-0.5">
            {week ? `Week of ${week}` : "Loading..."}
          </p>
        </div>
      </div>

      <button className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-xl transition-colors cursor-pointer">
        <i className="ti ti-plus text-sm" />
        New appointment
      </button>
    </div>
  );
}
