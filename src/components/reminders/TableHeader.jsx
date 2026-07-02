// TableHeader.jsx
function TableHeader() {
  return (
    <div className="flex items-center px-4 py-2.5 border-b border-black/5 dark:border-white/5 bg-gray-50 dark:bg-slate-900 rounded-t-xl">
      <p className="flex-2 text-xs font-medium text-gray-400 uppercase tracking-wide">
        Patient
      </p>
      <p className="flex-2 text-xs font-medium text-gray-400 uppercase tracking-wide">
        Reminder type
      </p>
      <p className="flex-1 text-xs font-medium text-gray-400 uppercase tracking-wide">
        Channel
      </p>
      <p className="flex-2 text-xs font-medium text-gray-400 uppercase tracking-wide">
        Scheduled
      </p>
      <p className="flex-1 text-xs font-medium text-gray-400 uppercase tracking-wide">
        Status
      </p>
    </div>
  );
}

export default TableHeader;
