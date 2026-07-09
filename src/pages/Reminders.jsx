import {FaPlus} from "react-icons/fa";
import {TbBellRinging} from "react-icons/tb";
import Summary from "../components/reminders/Summary";
import Main from "../components/reminders/Main";

function Reminders() {
  return (
    <div className="max-h-screen flex flex-col gap-5">
      <Header />
      <Summary />
      <Main />
    </div>
  );
}

export default Reminders;

function Header() {
  return (
    <div className="flex mt-16 justify-between items-center w-full">
      <div className="flex items-center gap-4">
        <div
          className="w-11 h-11 rounded-2xl bg-blue-100 dark:bg-blue-500/10
                         flex items-center justify-center shrink-0"
        >
          <TbBellRinging
            className="text-blue-700 dark:text-blue-400"
            size={22}
          />
        </div>
        <div>
          <h1 className="text-2xl font-semibold text-slate-900 dark:text-white">
            Reminder center
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">
            Automate vaccination, wellness, and follow-up outreach
          </p>
        </div>
      </div>

    </div>
  );
}
