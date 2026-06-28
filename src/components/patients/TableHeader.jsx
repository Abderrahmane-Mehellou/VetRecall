function TableHeader() {
  return (
    <div className="flex justify-around p-3 items-center w-full h-12 text-start border-y border-gray-300 bg-gray-100 text-gray-500 font-mono dark:bg-slate-900">
      <div className="flex-2">Patient</div>
      <p className="flex-1">Species</p>
      <p className="flex-2">Breed</p>
      <p className="flex-1">Age</p>
      <p className="flex-2">Last visit</p>
      <p className="flex-2">Next appointment</p>
      <p className="flex-2">Status</p>
      <p className="flex-1">Action</p>
    </div>
  );
}

export default TableHeader;
