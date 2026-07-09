import {generateInitial, getAvatarColors, getColors} from "../../utils/helpers";
import {FiMoreHorizontal} from "react-icons/fi";
import ActionsMenu from "./ActionsMenu";
import { useState } from "react";
import { deletePatient } from "../../service/patient.service";
import toast from "react-hot-toast";
import { QueryClient, useQuery } from "@tanstack/react-query";

function Row({item}) {
  const [isLoading, setIsLoading] = useState(false)
  const hasLastVisit = item.lastVisit && !isNaN(new Date(item.lastVisit));
  const hasNextAppointment =
    item.nextAppointment && !isNaN(new Date(item.nextAppointment));

  async function onEdit(Item) {
    try{
      setIsLoading(true);
    } catch(err) {
      console.error("error with: ", err.message)
    } finally {
      setIsLoading(false)
    }
  }

  async function onDelete(Item) {
    try{
      setIsLoading(true);

      await deletePatient(Item.id)

      await QueryClient.invalidateQueries({
        queryKey: ["patients", clinic.id],
      });

      toast.success("Deleted successfully")
    } catch(err) {
      console.error("error with: ", err.message)
    } finally {
      setIsLoading(false)
    }
  }
  return (
    <div
      className="flex items-center w-full px-4 py-3 border-b border-slate-100 dark:border-slate-700
                     hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors"
    >
      <div className="flex items-center gap-3 flex-[2] min-w-0">
        <span
          className={`flex items-center justify-center w-9 h-9 rounded-full text-sm font-semibold shrink-0
                      ${getAvatarColors(item.name)}`}
        >
          {generateInitial(item.name)}
        </span>
        <div className="min-w-0">
          <p className="text-sm font-semibold text-slate-900 dark:text-white truncate">
            {item.name}
          </p>
          <p className="text-xs text-slate-400 dark:text-slate-500 truncate">
            {item.ownerName}
          </p>
        </div>
      </div>

      <p className="flex-1 text-sm text-slate-600 dark:text-slate-300 truncate">
        {item.species}
      </p>

      <p className="flex-[2] text-sm text-slate-600 dark:text-slate-300 truncate">
        {item.breed}
      </p>

      <p className="flex-1 text-sm text-slate-600 dark:text-slate-300">
        {item.age}
      </p>

      <p className="flex-[2] text-sm text-slate-500 dark:text-slate-400">
        {hasLastVisit ? new Date(item.lastVisit).toLocaleDateString() : "—"}
      </p>

      <p className="flex-[2] text-sm text-slate-500 dark:text-slate-400">
        {hasNextAppointment
          ? new Date(item.nextAppointment).toLocaleDateString()
          : "—"}
      </p>

      <div className="flex-[2]">
        <span
          className={`inline-block text-xs font-medium px-3 py-1 rounded-full ${getColors(item.status)}`}
        >
          {item.status}
        </span>
      </div>

      <ActionsMenu
        onEdit={() => onEdit?.(item)}
        onDelete={() => onDelete?.(item)}
      />
    </div>
  );
}

export default Row;
