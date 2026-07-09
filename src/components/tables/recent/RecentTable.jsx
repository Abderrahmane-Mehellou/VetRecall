import {useContext} from "react";
import SettingsContext from "../../../context/SettingsContext";
import Table from "./Table";

import { usePatients } from "../../../hooks/usePatients";

function RecentTable() {
  const {data: patients, isLoading} = usePatients();
  const {language} = useContext(SettingsContext);
  return (
    <div className="flex items-stretch justify-center col-span-4 flex-col w-full h-112.5 px-10 bg-white rounded-3xl dark:bg-slate-800 dark:text-white">
      <div className="">
        <h1 className="text-xl font-bold">
          {language === "en" ? "Recent Patients" : "بيانات المواعيد"}
        </h1>
        <h2 className="text-gray-400">
          {language === "en"
            ? "Latest activity in your clinic"
            : "عدد الحجوزات مقابل عدد الحجوزات المنجزة خلال الاثني عشر شهرًا الماضية"}
        </h2>
      </div>
      <div className="w-full h-80 mt-6 overflow-scroll scrollbar-none">
        <Table data={patients} isLoading={isLoading} />
      </div>
    </div>
  );
}

export default RecentTable;
