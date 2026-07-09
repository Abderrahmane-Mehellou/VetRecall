import {useContext} from "react";
import {TbCalendarPlus, TbPlus} from "react-icons/tb";
import SettingsContext from "../../context/SettingsContext";
import {getIconAndColor} from "../../utils/helpers";
import "../../styles/calender.css";

const appointmentTypes = [
  {
    name: "Vaccination visit",
    value: "vaccination",
    desc: "Routine immunization",
  },
  {name: "Wellness exam", value: "wellness", desc: "General health checkup"},
  {name: "Follow-up", value: "follow-up", desc: "Post-treatment review"},
  {name: "Dental cleaning", value: "dental", desc: "Oral hygiene care"},
  {name: "First check", value: "first-check", desc: "New patient intake"},
  {name: "Consultation", value: "consultation", desc: "Advice and diagnosis"},
];

function AddScheduled({onAdd}) {
  const {language} = useContext(SettingsContext);

  return (
    <div
      className="flex flex-col flex-1 w-full px-6 py-6 bg-white dark:bg-slate-800 rounded-3xl
                     border border-slate-200 dark:border-slate-700 shadow-sm"
    >
      <div className="flex items-center justify-between mb-4">
        <div>
          <h1 className="text-base font-semibold text-slate-900 dark:text-white">
            {language === "en" ? "Quick add" : "إضافة سريعة"}
          </h1>
          <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">
            {language === "en"
              ? "Select a type to schedule"
              : "اختر نوع الموعد"}
          </p>
        </div>
        <TbCalendarPlus
          className="text-slate-400 dark:text-slate-500"
          size={22}
        />
      </div>

      <div className="flex flex-col gap-2 overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {appointmentTypes.map((item) => (
          <AppointmentItem key={item.value} item={item} onAdd={onAdd} />
        ))}
      </div>
    </div>
  );
}

export default AddScheduled;

function AppointmentItem({item, onAdd}) {
  const {colors, Icon} = getIconAndColor(item.value);
  const [bgColor, textColor] = colors.split(" ");

  return (
    <button
      type="button"
      onClick={() => onAdd?.(item)}
      className="group flex items-center gap-3 w-full px-3 py-2.5 rounded-2xl text-left
                 border border-slate-200 dark:border-slate-600
                 hover:border-slate-300 dark:hover:border-slate-500
                 hover:bg-slate-50 dark:hover:bg-slate-700
                 transition-all duration-150 cursor-pointer"
    >
      <div
        className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${bgColor}`}
      >
        <Icon className={`text-base ${textColor}`} />
      </div>

      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-slate-800 dark:text-white truncate">
          {item.name}
        </p>
        <p className="text-xs text-slate-400 dark:text-slate-400 mt-0.5 truncate">
          {item.desc}
        </p>
      </div>

      <div
        className="w-7 h-7 rounded-lg border border-slate-200 dark:border-slate-500
                       bg-slate-50 dark:bg-slate-800 flex items-center justify-center
                       text-slate-400 dark:text-slate-300
                       group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600
                       transition-all duration-150 shrink-0"
      >
        <TbPlus size={14} />
      </div>
    </button>
  );
}
