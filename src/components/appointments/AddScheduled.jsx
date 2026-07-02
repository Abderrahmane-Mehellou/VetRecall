import {useContext} from "react";
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
    <div className="flex flex-col flex-1 w-full px-6 py-6 bg-white rounded-3xl dark:bg-slate-800">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h1 className="text-base font-semibold dark:text-white">
            {language === "en" ? "Quick add" : "إضافة سريعة"}
          </h1>
          <p className="text-xs text-gray-400 mt-0.5">
            {language === "en"
              ? "Select a type to schedule"
              : "اختر نوع الموعد"}
          </p>
        </div>
        <i className="ti ti-calendar-plus text-xl text-gray-400" />
      </div>

      <div className="flex flex-col gap-2 overflow-y-auto scrollbar-none">
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
    <div
      onClick={() => onAdd?.(item)}
      className="group flex items-center gap-3 px-3 py-2.5 rounded-2xl border border-black/10 hover:border-black/20 hover:bg-gray-50 dark:border-white/10 dark:hover:bg-slate-700 transition-all cursor-pointer"
    >
      <div
        className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${bgColor}`}
      >
        <Icon className={`text-base ${textColor}`} />
      </div>

      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-gray-800 dark:text-white">
          {item.name}
        </p>
        <p className="text-xs text-gray-400 mt-0.5">{item.desc}</p>
      </div>

      <div className="w-7 h-7 rounded-lg border border-black/10 bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all flex-shrink-0">
        <i className="ti ti-plus text-sm" />
      </div>
    </div>
  );
}
