import {FaPlus} from "react-icons/fa";
import Summary from "../components/reminders/Summary";
import Main from "../components/reminders/Main";

function Reminders() {
  return (
    <div className="h-auto mt-16 flex flex-col gap-5">
      <Header />
      <Summary /> 
      <Main /> 
    </div>
  );
}

export default Reminders;

function Header() {
  return (
    <div className="flex justify-between items-center w-full">
      <div className="flex items-center gap-4">
        <div className="w-11 h-11 rounded-2xl bg-blue-100 flex items-center justify-center flex-shrink-0">
          <i className="ti ti-bell-ringing text-blue-700 text-xl" />
        </div>
        <div>
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Reminder center
          </h1>
          <p className="text-sm text-gray-400 mt-0.5">
            Automate vaccination, wellness, and follow-up outreach
          </p>
        </div>
      </div>

      <button className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-xl transition-colors cursor-pointer">
        <FaPlus className="text-xs" />
        Schedule reminder
      </button>
    </div>
  );
}
