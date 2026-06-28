import {GrFormPrevious, GrFormNext} from "react-icons/gr";

const PAGE_SIZE = 10;

function Footer({page, setPage, total}) {
  const totalPages = Math.ceil(total / PAGE_SIZE);

  const from = total === 0 ? 0 : (page - 1) * PAGE_SIZE + 1;
  const to = Math.min(page * PAGE_SIZE, total);

  return (
    <div className="flex justify-between items-center min-h-15 p-5">
      <p>
        Showing {from}-{to} of {total}
      </p>

      <div className="flex items-center gap-5">
        <button
          onClick={() => setPage((page) => page - 1)}
          disabled={page === 1}
          className={`flex items-center gap-2 px-4 py-2 rounded-2xl transition-all dark:bg-slate-800 dark:hover:bg-slate-700
            ${
              page === 1
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-slate-400 hover:bg-slate-300 cursor-pointer"
            }`}
        >
          <GrFormPrevious />
          Previous
        </button>

        <span className="font-medium">
          {page} / {totalPages || 1}
        </span>

        <button
          onClick={() => setPage((page) => page + 1)}
          disabled={page === totalPages || totalPages === 0}
          className={`flex items-center gap-2 px-4 py-2 rounded-2xl transition-all dark:bg-slate-800 dark:hover:bg-slate-700
            ${
              page === totalPages || totalPages === 0
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-slate-400 hover:bg-slate-300 cursor-pointer"
            }`}
        >
          Next
          <GrFormNext />
        </button>
      </div>
    </div>
  );
}

export default Footer;
