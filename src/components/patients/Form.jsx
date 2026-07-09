import {useState} from "react";
import {useQueryClient} from "@tanstack/react-query";
import {useAuth} from "../../hooks/useAuth";
import {createPatient} from "../../service/patient.service";
import toast from "react-hot-toast";
import {FaPlus} from "react-icons/fa";

const initialFormData = {
  name: "",
  age: "",
  gender: "",
  breed: "",
  species: "",
  weight: "",
  status: "Active",
  ownerName: "",
  lastVisit: "",
  nextAppointment: "",
  notes: "",
};

function Form({setShowForm}) {
  const {clinic} = useAuth();
  const queryClient = useQueryClient();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState(initialFormData);

  function handleChange(e) {
    const {name, value} = e.target;
    setFormData((prev) => ({...prev, [name]: value}));
  }

  async function handleSubmitForm(e) {
    e.preventDefault();
    try {
      setIsLoading(true);
      await createPatient(formData, clinic.id);

      toast.success(`${formData.name} added successfully`);

      queryClient.invalidateQueries({queryKey: ["patients", clinic.id]});

      setFormData(initialFormData);
    } catch (err) {
      console.error("error adding", err.message);
      toast.error("Something went wrong, please try again");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/30 backdrop-blur-sm pt-7 px-4 overflow-y-auto">
      <div className="w-full max-w-2xl rounded-3xl max-h-225 bg-white dark:bg-slate-800 p-8 shadow-2xl">
        {/* Header */}
        <div className="relative">
          <button
            type="button"
            onClick={() => setShowForm(false)}
            className="absolute top-0 right-0 text-xl text-slate-400 hover:text-slate-700
                       dark:hover:text-white cursor-pointer"
          >
            ✕
          </button>

          <h1 className="text-2xl font-semibold text-slate-900 dark:text-white">
            Add New Patient
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Register a new pet to your clinic.
          </p>

          <hr className="my-6 border-slate-200 dark:border-slate-700" />
        </div>

        {/* Form */}
        <form className="space-y-2" onSubmit={handleSubmitForm}>
          <div className="grid grid-cols-2 gap-3">
            <Field label="Pet Name" required>
              <input
                type="text"
                placeholder="Luna"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className={inputClass}
              />
            </Field>

            <Field label="Species" required>
              <select
                required
                name="species"
                value={formData.species}
                onChange={handleChange}
                className={inputClass}
              >
                <option value="">Select species</option>
                <option>Dog</option>
                <option>Cat</option>
                <option>Bird</option>
                <option>Rabbit</option>
                <option>Reptile</option>
                <option>Other</option>
              </select>
            </Field>

            <Field label="Breed" required>
              <input
                type="text"
                name="breed"
                placeholder="Persian"
                required
                value={formData.breed}
                onChange={handleChange}
                className={inputClass}
              />
            </Field>

            <Field label="Gender" required>
              <select
                required
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className={inputClass}
              >
                <option value="">Select gender</option>
                <option>Male</option>
                <option>Female</option>
              </select>
            </Field>

            <Field label="Age" required>
              <input
                type="text"
                placeholder="2 years"
                name="age"
                required
                value={formData.age}
                onChange={handleChange}
                className={inputClass}
              />
            </Field>

            <Field label="Weight" required>
              <input
                type="text"
                placeholder="3.2 Kg"
                name="weight"
                required
                value={formData.weight}
                onChange={handleChange}
                className={inputClass}
              />
            </Field>
          </div>

          <Field label="Owner Name" required>
            <input
              type="text"
              name="ownerName"
              placeholder="Emily Davis"
              required
              value={formData.ownerName}
              onChange={handleChange}
              className={inputClass}
            />
          </Field>

          <Field label="Status" required>
            <select
              required
              name="status"
              value={formData.status}
              onChange={handleChange}
              className={inputClass}
            >
              <option>Active</option>
              <option>Reminder Sent</option>
              <option>Overdue</option>
            </select>
          </Field>

          <div className="grid grid-cols-2 gap-5">
            <Field label="Last Visit">
              <input
                type="datetime-local"
                name="lastVisit"
                value={formData.lastVisit}
                onChange={handleChange}
                className={inputClass}
              />
            </Field>

            <Field label="Next Appointment">
              <input
                type="datetime-local"
                name="nextAppointment"
                value={formData.nextAppointment}
                onChange={handleChange}
                className={inputClass}
              />
            </Field>
          </div>

          <Field label="Medical Notes">
            <textarea
              rows={4}
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              placeholder="Requires monthly flea treatment..."
              className={`${inputClass} resize-none`}
            />
          </Field>

          <div className="flex justify-end gap-3 pt-4 border-t border-slate-200 dark:border-slate-700">
            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="px-5 py-3 rounded-xl border border-slate-300 dark:border-slate-600
                         text-slate-700 dark:text-slate-200
                         hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors cursor-pointer"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={isLoading}
              className="flex items-center gap-2 px-5 py-3 rounded-xl text-white font-medium
                         bg-blue-600 hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed
                         transition-colors cursor-pointer"
            >
              <FaPlus size={14} />
              {isLoading ? "Adding..." : "Add Patient"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

const inputClass =
  "rounded-xl border border-slate-300 dark:border-slate-600 px-4 py-3 outline-none " +
  "bg-white dark:bg-slate-900 text-slate-900 dark:text-white " +
  "focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors";

function Field({label, required, children}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {children}
    </div>
  );
}

export default Form;
