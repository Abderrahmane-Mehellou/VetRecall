import {useState, useRef, useEffect} from "react";
import {FiMoreHorizontal, FiEdit2, FiTrash2} from "react-icons/fi";

function ActionsMenu({onEdit, onDelete}) {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (!ref.current?.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        aria-label="More options"
        onClick={() => setOpen((v) => !v)}
        className="w-8 h-8 flex items-center justify-center rounded-lg
                   text-slate-400 dark:text-slate-500
                   hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-slate-700 dark:hover:text-white
                   transition-colors cursor-pointer"
      >
        <FiMoreHorizontal size={16} />
      </button>

      {open && (
        <div
          className="absolute right-0 top-[calc(100%+6px)] min-w-[160px]
                         bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700
                         rounded-xl p-1.5 z-50 shadow-lg"
        >
          <button
            type="button"
            onClick={() => {
              onEdit?.();
              setOpen(false);
            }}
            className="flex items-center gap-2.5 w-full px-2.5 py-2 rounded-lg text-sm
                       text-slate-700 dark:text-slate-200
                       hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors cursor-pointer"
          >
            <FiEdit2 size={15} className="text-slate-400 dark:text-slate-500" />
            Edit
          </button>

          <button
            type="button"
            onClick={() => {
              onDelete?.();
              setOpen(false);
            }}
            className="flex items-center gap-2.5 w-full px-2.5 py-2 rounded-lg text-sm
                       text-red-600 dark:text-red-400
                       hover:bg-red-50 dark:hover:bg-red-500/10 transition-colors cursor-pointer"
          >
            <FiTrash2 size={15} />
            Delete
          </button>
        </div>
      )}
    </div>
  );
}

export default ActionsMenu;
