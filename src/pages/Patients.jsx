import {useQuery} from "@tanstack/react-query";
import {getPatients} from "../service/patient.service";
import Header from "../components/patients/Header";
import Table from "../components/patients/Table";
import {useState, useMemo, useEffect} from "react";

const PAGE_SIZE = 10;

function Patients() {
  const [searchQuery, setSearchQuery] = useState("");
  const [species, setSpecies] = useState("all");
  const [status, setStatus] = useState("all");
  const [page, setPage] = useState(1);

  const {data: patients = [], isLoading} = useQuery({
    queryKey: ["patients"],
    queryFn: getPatients,
  });

  const filteredPatients = useMemo(() => {
    return patients.filter((p) => {
      const matchSearch =
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.breed.toLowerCase().includes(searchQuery.toLowerCase());

      const matchSpecies =
        species === "all" || p.species.toLowerCase() === species.toLowerCase();

      const matchStatus =
        status === "all" || p.status.toLowerCase() === status.toLowerCase();

      return matchSearch && matchSpecies && matchStatus;
    });
  }, [patients, searchQuery, species, status]);

  useEffect(() => {
    setPage(1);
  }, [searchQuery, species, status]);

  const start = (page - 1) * PAGE_SIZE;
  const paginatedPatients = filteredPatients.slice(start, start + PAGE_SIZE);

  return (
    <div className="mt-16 space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-11 h-11 rounded-2xl bg-blue-100 flex items-center justify-center flex-shrink-0">
            <i className="ti ti-paw text-blue-700 text-xl" />
          </div>
          <div>
            <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Patients
            </h1>
            <p className="text-sm text-gray-400 mt-0.5">
              {isLoading
                ? "Loading..."
                : `${filteredPatients.length} patients found`}
            </p>
          </div>
        </div>

        <button className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-xl transition-colors cursor-pointer">
          <i className="ti ti-plus text-sm" />
          Add patient
        </button>
      </div>

      {/* Table card */}
      <div className="w-full rounded-3xl bg-white shadow-sm dark:bg-slate-900">
        <Header
          setSearchQuery={setSearchQuery}
          setSpecies={setSpecies}
          setStatus={setStatus}
        />
        <Table
          patients={paginatedPatients}
          isLoading={isLoading}
          page={page}
          setPage={setPage}
          total={filteredPatients.length}
        />
      </div>
    </div>
  );
}

export default Patients;
