import {useState, useRef, useEffect} from "react";

const options = {
  species: [
    {value: "all", label: "All species", icon: "ti-circle-dot"},
    {value: "dog", label: "Dog", icon: "ti-paw"},
    {value: "cat", label: "Cat", icon: "ti-cat"},
  ],
  status: [
    {value: "all", label: "Any status", icon: "ti-circle-dot"},
    {value: "active", label: "Active", icon: "ti-circle-check"},
    {value: "overdue", label: "Overdue", icon: "ti-alert-circle"},
  ],
};

function Dropdown({icon, items, onChange}) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(items[0]);
  const ref = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (!ref.current?.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 bg-gray-50 border border-black/10 rounded-xl px-3 py-2 min-w-[130px] cursor-pointer hover:border-black/20 transition-colors dark:bg-slate-800 "
      >
        <i className={`ti ${icon} text-gray-500 text-sm`} />
        <span className="text-sm text-gray-800 flex-1 text-left dark:text-white">
          {selected.label}
        </span>
        <i
          className={`ti ti-chevron-down text-gray-400 text-sm transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="absolute top-[calc(100%+6px)] left-0 min-w-[160px] bg-white border border-black/15 rounded-xl p-1.5 z-50 shadow-sm cursor-pointer dark:bg-slate-800 ">
          {items.map((item) => (
            <button
              key={item.value}
              onClick={() => {
                setSelected(item);
                onChange(item.value);
                setOpen(false);
              }}
              className="flex items-center gap-2 w-full px-2.5 py-2 rounded-lg text-sm text-gray-800 hover:bg-gray-50 transition-colors dark:text-white dark:hover:bg-slate-700"
            >
              <i className={`ti ${item.icon} text-gray-400 text-sm`} />
              <span className="flex-1 text-left">{item.label}</span>
              {selected.value === item.value && (
                <i className="ti ti-check text-blue-600 text-sm" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function Header({setSearchQuery, setSpecies, setStatus}) {
  return (
    <div className="p-3">
      <header className="flex items-center gap-2.5 bg-white border border-black/10 rounded-2xl px-3.5 py-2.5 dark:bg-slate-800">
        <div className="flex items-center gap-2 flex-1 bg-gray-50 border border-black/10 rounded-xl px-3.5 py-2 dark:bg-slate-700">
          <i className="ti ti-search text-gray-400 text-base" />
          <input
            type="text"
            placeholder="Search by pet, owner, or ID…"
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-transparent border-none outline-none text-sm text-gray-800 placeholder-gray-400 w-full dark:text-white"
          />
        </div>
        <Dropdown icon="ti-paw" items={options.species} onChange={setSpecies} />
        <Dropdown
          icon="ti-activity"
          items={options.status}
          onChange={setStatus}
        />
      </header>
    </div>
  );
}

export default Header;
