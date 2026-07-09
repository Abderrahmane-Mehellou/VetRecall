function TableHeader() {
  return (
    <div
      className="flex items-center w-full h-12 px-4
                     border-y border-slate-200 dark:border-slate-700
                     bg-slate-50 dark:bg-slate-900"
    >
      <p className="flex-[2] text-xs font-medium text-slate-400 dark:text-slate-500 uppercase tracking-wide">
        Patient
      </p>
      <p className="flex-1 text-xs font-medium text-slate-400 dark:text-slate-500 uppercase tracking-wide">
        Species
      </p>
      <p className="flex-[2] text-xs font-medium text-slate-400 dark:text-slate-500 uppercase tracking-wide">
        Breed
      </p>
      <p className="flex-1 text-xs font-medium text-slate-400 dark:text-slate-500 uppercase tracking-wide">
        Age
      </p>
      <p className="flex-[2] text-xs font-medium text-slate-400 dark:text-slate-500 uppercase tracking-wide">
        Last visit
      </p>
      <p className="flex-[2] text-xs font-medium text-slate-400 dark:text-slate-500 uppercase tracking-wide">
        Next appointment
      </p>
      <p className="flex-[2] text-xs font-medium text-slate-400 dark:text-slate-500 uppercase tracking-wide">
        Status
      </p>
      <div className="w-8 shrink-0" />
    </div>
  );
}

export default TableHeader;
