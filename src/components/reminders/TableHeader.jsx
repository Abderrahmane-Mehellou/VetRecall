function TableHeader() {
  return (
    <div
      className="flex items-center px-4 py-2.5 border-b border-slate-200 dark:border-slate-700
                     bg-slate-50 dark:bg-slate-900 sticky top-0 rounded-t-xl"
    >
      <p className="flex-[2] text-xs font-medium text-slate-400 dark:text-slate-500 uppercase tracking-wide">
        Patient
      </p>
      <p className="flex-[2] text-xs font-medium text-slate-400 dark:text-slate-500 uppercase tracking-wide">
        Reminder type
      </p>
      <p className="flex-1 text-xs font-medium text-slate-400 dark:text-slate-500 uppercase tracking-wide">
        Channel
      </p>
      <p className="flex-[2] text-xs font-medium text-slate-400 dark:text-slate-500 uppercase tracking-wide">
        Scheduled
      </p>
      <p className="flex-1 text-xs font-medium text-slate-400 dark:text-slate-500 uppercase tracking-wide">
        Status
      </p>
    </div>
  );
}

export default TableHeader;
