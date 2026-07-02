import {useContext} from "react";
import SettingsContext from "../../../context/SettingsContext";

const engagementStats = [
  {id: 1, title: "Email opens", value: 84},
  {id: 2, title: "SMS reads", value: 92},
  {id: 3, title: "Click-through", value: 38},
  {id: 4, title: "Re-booking", value: 67},
];

function Engagement() {
  const {language} = useContext(SettingsContext);
  return (
    <div className="flex items-stretch justify-center col-span-2 flex-col w-full h-[210px] px-10 py-5 bg-white rounded-3xl dark:bg-slate-800 dark:text-white">
      <div className="">
        <h1 className="text-xl font-bold">
          {language === "en" ? "Client engagement" : "التفاعل مع العملاء"}
        </h1>
        <h2 className="text-gray-400">
          {language === "en"
            ? "How owners interact with recalls"
            : "كيفية تفاعل المالكين مع عمليات الاستدعاء"}
        </h2>
      </div>
      <div className="w-full h-80 mt-6">
        <EngagementRow />
      </div>
    </div>
  );
}

export default Engagement;

function EngagementRow() {
  return (
    <div className="grid grid-cols-4 gap-3">
      {engagementStats.map((stat) => (
        <EngagementCard stat={stat} key={stat.id} />
      ))}
    </div>
  );
}

function EngagementCard({stat}) {
  return (
    <div className="flex flex-col flex-1 gap-3 bg-gray-100 border border-black/5 rounded-2xl p-4 dark:bg-slate-800 dark:border-white/5">
      <div>
        <p className="text-xs text-gray-400">{stat.title}</p>
        <p className="text-2xl font-semibold text-gray-900 dark:text-white mt-1">
          {stat.value}%
        </p>
      </div>

      {/* Progress bar */}
      <div className="w-full h-1.5 bg-gray-100 dark:bg-slate-700 rounded-full overflow-hidden">
        <div
          className="h-full bg-blue-600 rounded-full transition-all duration-500"
          style={{width: `${stat.value}%`}}
        />
      </div>
    </div>
  );
}