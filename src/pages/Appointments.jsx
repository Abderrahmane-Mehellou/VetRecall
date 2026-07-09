import {useContext, useState} from "react";
import {TbCalendarEvent} from "react-icons/tb";
import {FaPlus} from "react-icons/fa";
import AddScheduled from "../components/appointments/AddScheduled";
import Calender from "../components/appointments/Calender";
import ScheduledToday from "../components/appointments/ScheduledToday";
import AppointmentsContext, {
  AppointmentsProvider,
} from "../context/AppointmentsContext";
import Form from "../components/appointments/Form";
import {useAppointments} from "../hooks/useAppointments"
import Spinner from "../ui/Spinner"
import app from "../firebase/firebase";
import { formatAppointmentEvent } from "../utils/helpers";




function Appointments() {
  const [showForm, setShowForm] = useState(false)
  
  const {data: appointments = [], isLoading} = useAppointments()

  
  const events = appointments.map((appointment) => formatAppointmentEvent(appointment));
  
  const todayEvents = events.filter(
    (event) =>
      new Date(event.start).toDateString() === new Date().toDateString(),
  );
  
  if (isLoading) return <Spinner size="lg" color="teal" />; 

  return (
    <AppointmentsProvider>
      <div className="mt-16 space-y-6">
        <Header setShowForm={setShowForm} />
        <Calender events={events} />

        <div className="flex flex-col md:flex-row gap-4">
          <ScheduledToday todayEvents={todayEvents} />
          <AddScheduled />
        </div>
      </div>
      {showForm && <Form setShowForm={setShowForm}/> }
    </AppointmentsProvider>
  );
}

export default Appointments;

function Header({setShowForm}) {
  const {week} = useContext(AppointmentsContext);
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div
          className="w-11 h-11 rounded-2xl bg-blue-100 dark:bg-blue-100/10
                         flex items-center justify-center shrink-0"
        >
          <TbCalendarEvent
            className="text-blue-600 dark:text-blue-400"
            size={22}
          />
        </div>
        <div>
          <h1 className="text-2xl font-semibold text-slate-900 dark:text-white">
            Appointments
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">
            {week ? `Week of ${week}` : "Loading..."}
          </p>
        </div>
      </div>

      <button
        type="button"
        onClick={() => setShowForm(true)}
        className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium
                   text-white bg-blue-600 hover:bg-blue-700
                   transition-colors duration-150 cursor-pointer"
        
      >
        <FaPlus size={12} />
        New appointment
      </button>
    </div>
  );
}
