import {GrFormNext} from "react-icons/gr";
import {GrFormPrevious} from "react-icons/gr";
import {FaPlus} from "react-icons/fa";
import {useContext} from "react";
import AppointmentsContext from "../../context/AppointmentsContext";

function AppointmentsActions() {
  const {week} = useContext(AppointmentsContext);
  console.log(week);
  return (
    <div className="flex justify-between items-center gap-6 text-sm">
      <div className="flex items-center gap-4 bg-white h-10 rounded-full">
        <button className="hover:bg-blue-200 transition-all rounded-full p-3 cursor-pointer">
          <GrFormPrevious />
        </button>
        <p>This Week</p>
        <button className="hover:bg-blue-200 transition-all rounded-full p-3 cursor-pointer">
          <GrFormNext />
        </button>
      </div>
      <div className="flex justify-between items-center gap-4 h-10 bg-white rounded-full text-gray-500">
        <p className="hover:bg-blue-200 transition-all rounded-full px-3 py-2 cursor-pointer">
          Day
        </p>
        <p className="hover:bg-blue-200 transition-all rounded-full px-3 py-2 cursor-pointer">
          Week
        </p>
        <p className="hover:bg-blue-200 transition-all rounded-full px-3 py-2 cursor-pointer">
          Month
        </p>
      </div>
      <button className="flex justify-between items-center gap-4 bg-blue-600 px-4 py-2 rounded-full h-10 hover:bg-blue-400 cursor-pointer transition-all">
        <FaPlus />
        New appointment
      </button>
    </div>
  );
}

export default AppointmentsActions;
