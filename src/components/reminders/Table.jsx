import {TbMailOff} from "react-icons/tb";
import Row from "./Row";
import TableHeader from "./TableHeader";

function Table({reminders}) {
  if (!reminders?.length) {
    return (
      <div className="flex flex-col items-center justify-center h-48 gap-2">
        <TbMailOff className="text-slate-300 dark:text-slate-600" size={28} />
        <p className="text-sm text-slate-400 dark:text-slate-500">
          No reminders found
        </p>
        <p className="text-sm text-gray-400 dark:text-gray-500">
          Add some appointments for automatic generating of the reminders.
        </p>
      </div>
    );
  }

  return (
    <div
      className="h-[32rem] overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden
                     rounded-xl border border-slate-200 dark:border-slate-700"
    >
      <TableHeader />
      {reminders?.map((infos) => (
        <Row item={infos} key={infos.id} />
      ))}
    </div>
  );
}

export default Table;
