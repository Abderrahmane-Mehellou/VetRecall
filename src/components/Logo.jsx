import {Link} from "react-router-dom";
import {useAuth} from "../hooks/useAuth";

function Logo() {
  const {clinic} = useAuth();

  return (
    <Link to="/" className="flex items-center gap-3 group">
      <div className="w-12 h-12 shrink-0 rounded-full overflow-hidden border border-slate-200 dark:border-slate-700">
        <img
          src={clinic?.logo || "/images/default-clinic-logo.png"}
          alt={clinic?.name ? `${clinic.name} logo` : "Clinic logo"}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="min-w-0">
        <p className="font-extrabold text-xl text-slate-900 dark:text-white leading-tight">
          Vet
          <span className="text-blue-600 dark:text-indigo-400">Recall</span>
        </p>
        <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
          {clinic?.name || "Your clinic"}
        </p>
      </div>
    </Link>
  );
}

export default Logo;
