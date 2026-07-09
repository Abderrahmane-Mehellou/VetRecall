import {useQuery} from "@tanstack/react-query";
import {getPatients} from "../service/patient.service";
import Header from "../components/patients/Header";
import Table from "../components/patients/Table";
import {useState, useMemo, useEffect} from "react";
import Form from "../components/patients/Form";
import {useAuth} from "../hooks/useAuth";
import {TbPaw} from "react-icons/tb";
import {FaPlus} from "react-icons/fa";
import { usePatients } from "../hooks/usePatients";

const PAGE_SIZE = 10;

function Patients() {
  const [searchQuery, setSearchQuery] = useState("");
  const [species, setSpecies] = useState("all");
  const [status, setStatus] = useState("all");
  const [page, setPage] = useState(1);
  const [showForm, setShowForm] = useState(false);

  const {data: patients = [], isLoading} = usePatients();

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
      <HeaderPage
        filteredPatients={filteredPatients}
        isLoading={isLoading}
        setShowForm={setShowForm}
      />

      <div
        className="w-full rounded-3xl bg-white dark:bg-slate-800
                       border border-slate-200 dark:border-slate-700 shadow-sm"
      >
        <Header
          setSearchQuery={setSearchQuery}
          patients={patients}
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

      {showForm && <Form setShowForm={setShowForm} />}
    </div>
  );
}

export default Patients;

function HeaderPage({filteredPatients, isLoading, setShowForm}) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div
          className="w-11 h-11 rounded-2xl bg-blue-100 dark:bg-blue-500/10
                         flex items-center justify-center shrink-0"
        >
          <TbPaw className="text-blue-700 dark:text-blue-400" size={22} />
        </div>
        <div>
          <h1 className="text-2xl font-semibold text-slate-900 dark:text-white">
            Patients
          </h1>
          <p className="text-sm text-slate-400 dark:text-slate-500 mt-0.5">
            {isLoading
              ? "Loading..."
              : `${filteredPatients.length} patients found`}
          </p>
        </div>
      </div>

      <button
        type="button"
        onClick={() => setShowForm(true)}
        className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium
                   text-white bg-blue-600 hover:bg-blue-700
                   transition-colors duration-150 cursor-pointer"
      >
        <FaPlus size={12} />
        Add patient
      </button>
    </div>
  );
}
