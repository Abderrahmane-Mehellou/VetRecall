import {useState} from "react";
import Table from "./Table";
import { useAppointments } from "../../hooks/useAppointments";
import Spinner from "../../ui/Spinner"

const views = [
  {label: "All", value: "all"},
  {label: "Scheduled", value: "scheduled"},
  {label: "Overdue", value: "overdue"},
  {label: "Canceled", value: "canceled"},
];

function TableContainer() {

  const {data: reminders, isLoading} = useAppointments();

  const [active, setActive] = useState("all");

  const filteredReminders = reminders?.filter(
    (r) => active === "all" || r?.status?.toLowerCase() === active.toLowerCase(),
  );

  if (isLoading) return <Spinner /> 

  return (
    <div
      className="flex flex-col flex-4 gap-4 bg-white dark:bg-slate-800
                     border border-slate-200 dark:border-slate-700 rounded-2xl p-4 shadow-sm"
    >
      <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-700 rounded-xl p-1 w-fit">
        {views.map((v) => (
          <button
            key={v.value}
            onClick={() => setActive(v.value)}
            className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
              active === v.value
                ? "bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-sm"
                : "text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white"
            }`}
          >
            {v.label}
          </button>
        ))}
      </div>

      <Table reminders={filteredReminders} />
    </div>
  );
}

export default TableContainer;
