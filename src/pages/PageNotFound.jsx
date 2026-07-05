import {Link} from "react-router-dom";
import {FaHouse} from "react-icons/fa6";

function PageNotFound() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-6
                     bg-white dark:bg-slate-900 text-center"
    >
      <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 tracking-wide">
        404
      </p>

      <h1 className="mt-3 text-3xl sm:text-4xl font-semibold text-slate-900 dark:text-white tracking-tight">
        Page not found
      </h1>

      <p className="mt-3 max-w-sm text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
        Sorry, we couldn't find the page you're looking for. It may have been
        moved or the URL might be incorrect.
      </p>

      <div className="mt-8 flex items-center gap-3">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium
                     bg-indigo-600 text-white hover:bg-indigo-700 transition-colors duration-150"
        >
          <FaHouse size={14} />
          Back to home
        </Link>

        <button
          onClick={() => window.history.back()}
          className="px-4 py-2.5 rounded-lg text-sm font-medium
                     text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700
                     hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors duration-150"
        >
          Go back
        </button>
      </div>
    </div>
  );
}

export default PageNotFound;
