import AppointmentsActions from "../components/appointments/AppointmentsActions";
import Calender from "../components/appointments/Calender";
import {AppointmentsProvider} from "../context/AppointmentsContext";

function Appointments() {
  return (
    <AppointmentsProvider>
      <div className="h-auto mt-16">
        <div className="flex justify-between">
          <div>
            <h1 className="text-4xl font-bold">Appointments</h1>
            <h3 className="text-gray-500">Week of Jun 23 – 29, 2026</h3>
          </div>
          <AppointmentsActions />
        </div>
        <div className="flex flex-col w-full justify-around">
          <Calender />
        </div>
      </div>
    </AppointmentsProvider>
  );
}

export default Appointments;
