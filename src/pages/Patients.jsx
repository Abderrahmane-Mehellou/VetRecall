import {useQuery} from "@tanstack/react-query";
import {TiPlus} from "react-icons/ti";
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
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold">Patients</h1>
          <p className="text-gray-500">
            {filteredPatients.length} patients found
          </p>
        </div>

        <button className="flex items-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-white transition hover:bg-blue-500 cursor-pointer">
          <TiPlus className="text-xl" />
          <span>Add Patient</span>
        </button>
      </div>

      <div className="min-h-125 w-full rounded-3xl bg-white shadow-sm dark:bg-slate-900">
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
