import {useContext} from "react";
import SettingsContext from "../../../context/SettingsContext";
import upcomingReminders from "../../../data/upcomingReminders.json";
import Table from "./Table";

function UpcomingTable() {
  const {language} = useContext(SettingsContext);
  return (
    <div className="flex items-stretch justify-center col-span-2 flex-col w-full h-112.5 px-10 bg-white rounded-3xl dark:bg-slate-800 dark:text-white">
      <div className="">
        <h1 className="text-xl font-bold">
          {language === "en" ? "Upcoming Reminders" : " تذكيرات قادمة"}
        </h1>
        <h2 className="text-gray-400">
          {language === "en" ? "Next 5 scheduled" : "الخمس مواعيد القادمة"}
        </h2>
      </div>
      <div className="w-full h-80 mt-6 overflow-scroll scrollbar-none">
        <Table data={upcomingReminders} />
      </div>
    </div>
  );
}

export default UpcomingTable;
