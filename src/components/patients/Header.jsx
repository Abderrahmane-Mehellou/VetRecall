import {useState, useRef, useEffect, useMemo} from "react";
import {
  TbCircleDot,
  TbPaw,
  TbCat,
  TbCircleCheck,
  TbAlertCircle,
  TbBell,
  TbActivity,
  TbSearch,
  TbChevronDown,
  TbCheck,
} from "react-icons/tb";
import {LuRabbit, LuBird} from "react-icons/lu";
// Known icons for common values — anything not listed here falls back to a generic icon
const speciesIcons = {
  dog: TbPaw,
  cat: TbCat,
  rabbit: LuRabbit,
  bird: LuBird
};

const statusIcons = {
  active: TbCircleCheck,
  overdue: TbAlertCircle,
  "reminder sent": TbBell,
};

function buildOptions(patients, key, iconMap, fallbackIcon, allLabel) {
  const unique = new Map();

  patients.forEach((p) => {
    const raw = p[key];
    if (!raw) return;
    const value = raw.toLowerCase();
    if (!unique.has(value)) unique.set(value, raw);
  });

  const dynamicOptions = [...unique.entries()]
    .sort((a, b) => a[1].localeCompare(b[1]))
    .map(([value, label]) => ({
      value,
      label,
      Icon: iconMap[value] || fallbackIcon,
    }));

  return [
    {value: "all", label: allLabel, Icon: TbCircleDot},
    ...dynamicOptions,
  ];
}

function Dropdown({icon: TriggerIcon, items, onChange}) {
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("all");
  const ref = useRef();

  // If the currently selected value no longer exists in the options
  // (e.g. the last patient with that species/status was removed), fall back to "all"
  useEffect(() => {
    if (!items.some((item) => item.value === selectedValue)) {
      setSelectedValue("all");
    }
  }, [items, selectedValue]);

  useEffect(() => {
    const handler = (e) => {
      if (!ref.current?.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const selected =
    items.find((item) => item.value === selectedValue) ?? items[0];

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 bg-slate-50 dark:bg-slate-700
                   border border-slate-200 dark:border-slate-600 rounded-xl px-3 py-2
                   min-w-[130px] cursor-pointer hover:border-slate-300 dark:hover:border-slate-500
                   transition-colors"
      >
        <TriggerIcon className="text-slate-500 dark:text-slate-400" size={16} />
        <span className="text-sm text-slate-800 dark:text-white flex-1 text-left truncate">
          {selected.label}
        </span>
        <TbChevronDown
          className={`text-slate-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          size={16}
        />
      </button>

      {open && (
        <div
          className="absolute top-[calc(100%+6px)] left-0 min-w-[180px] max-h-64 overflow-y-auto
                         bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700
                         rounded-xl p-1.5 z-50 shadow-lg"
        >
          {items.map((item) => (
            <button
              type="button"
              key={item.value}
              onClick={() => {
                setSelectedValue(item.value);
                onChange(item.value);
                setOpen(false);
              }}
              className="flex items-center gap-2 w-full px-2.5 py-2 rounded-lg text-sm
                         text-slate-800 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-700
                         transition-colors cursor-pointer"
            >
              <item.Icon
                className="text-slate-400 dark:text-slate-500"
                size={16}
              />
              <span className="flex-1 text-left truncate">{item.label}</span>
              {selected.value === item.value && (
                <TbCheck
                  className="text-blue-600 dark:text-blue-400"
                  size={16}
                />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function Header({setSearchQuery, patients, setSpecies, setStatus}) {
  const speciesOptions = useMemo(
    () => buildOptions(patients, "species", speciesIcons, TbPaw, "All species"),
    [patients],
  );

  const statusOptions = useMemo(
    () =>
      buildOptions(patients, "status", statusIcons, TbActivity, "Any status"),
    [patients],
  );

  return (
    <div className="p-3">
      <header
        className="flex items-center gap-2.5 bg-white dark:bg-slate-800
                          border border-slate-200 dark:border-slate-700 rounded-2xl px-3.5 py-2.5"
      >
        <div
          className="flex items-center gap-2 flex-1 bg-slate-50 dark:bg-slate-700
                         border border-slate-200 dark:border-slate-600 rounded-xl px-3.5 py-2"
        >
          <TbSearch className="text-slate-400" size={17} />
          <input
            type="text"
            placeholder="Search by pet, owner, or ID…"
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-transparent border-none outline-none text-sm text-slate-800 dark:text-white
                       placeholder-slate-400 w-full"
          />
        </div>

        <Dropdown icon={TbPaw} items={speciesOptions} onChange={setSpecies} />
        <Dropdown
          icon={TbActivity}
          items={statusOptions}
          onChange={setStatus}
        />
      </header>
    </div>
  );
}

export default Header;
