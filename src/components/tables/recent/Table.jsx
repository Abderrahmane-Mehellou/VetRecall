import Spinner from "../../../ui/Spinner";
import {
  generateInitial,
  getAvatarColors,
  getColors,
} from "../../../utils/helpers";
import {FaPaw} from "react-icons/fa";

function Table({data, isLoading}) {

  const today = new Date().toDateString()
  const recentPatients = data?.filter((patient) => (
    new Date(patient.lastVisit).toDateString() === today
  ))

  if (isLoading) return <Spinner size="lg" color="teal" /> 

  return (
    <div
      className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200
                     dark:border-slate-700 shadow-sm p-6"
    >
      {recentPatients?.length !== 0 ? (
        <div className="divide-y divide-slate-100 dark:divide-slate-700">
          {recentPatients?.map((item) => (
            <TableItem item={item} key={item.id} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center text-center py-10">
          <div
            className="w-11 h-11 rounded-full bg-slate-100 dark:bg-slate-700
                           flex items-center justify-center mb-3"
          >
            <FaPaw className="text-slate-400 dark:text-slate-500" size={16} />
          </div>
          <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
            No recent patients
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Last visits will show up here as they come in.
          </p>
        </div>
      )}
    </div>
  );
}

export default Table;

function TableItem({item}) {
  return (
    <div className="flex items-center justify-between gap-4 py-3.5 first:pt-0 last:pb-0">
      <div className="flex items-center gap-3 min-w-0">
        <span
          className={`shrink-0 flex items-center justify-center w-10 h-10 rounded-full
                      text-sm font-semibold ${getAvatarColors(item.status)}`}
        >
          {generateInitial(item.name)}
        </span>

        <div className="min-w-0">
          <div className="flex items-center gap-1.5">
            <h3 className="font-semibold text-sm text-slate-900 dark:text-white truncate">
              {item.name}
            </h3>
            <span className="text-slate-300 dark:text-slate-600">&bull;</span>
            <span className="text-sm text-slate-500 dark:text-slate-400 truncate">
              {item.breed}
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-slate-400 dark:text-slate-500 mt-0.5">
            <span>Owner {item.owner}</span>
            <span>&bull;</span>
            <span>Last visit {item.lastVisit}</span>
          </div>
        </div>
      </div>

      <span
        className={`shrink-0 px-3 py-1 rounded-full text-xs font-medium ${getColors(item.status)}`}
      >
        {item.status}
      </span>
    </div>
  );
}
