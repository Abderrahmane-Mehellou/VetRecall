// Table.jsx
import Row from "./Row";
import TableHeader from "./TableHeader";

function Table({reminders}) {
  if (!reminders.length)
    return (
      <div className="flex flex-col items-center justify-center h-48 gap-2">
        <i className="ti ti-mail-off text-3xl text-gray-300 dark:text-slate-600" />
        <p className="text-sm text-gray-400">No reminders found</p>
      </div>
    );

  return (
    <div className="h-125 overflow-scroll scrollbar-none">
      <TableHeader />
      {reminders.map((infos) => (
        <Row item={infos} key={infos.id} />
      ))}
    </div>
  );
}

export default Table;
