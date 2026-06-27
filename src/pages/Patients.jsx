import {TiPlus} from "react-icons/ti";

function Patients() {
  return (
    <div className="mt-16 space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold">Patients</h1>
          <p className="text-gray-500">10 active patients across your clinic</p>
        </div>

        <button className="flex items-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-white transition hover:bg-blue-500 cursor-pointer">
          <TiPlus className="text-xl" />
          <span>Add Patient</span>
        </button>
      </div>

      <div className="min-h-[500px] rounded-3xl bg-white p-6 shadow-sm dark:bg-slate-900">
        {/* Patients table or charts go here */}
      </div>
    </div>
  );
}

export default Patients;
