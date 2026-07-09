import {useState} from "react";
import {useQueryClient} from "@tanstack/react-query";
import {useAuth} from "../../hooks/useAuth";
import toast from "react-hot-toast";
import {FaPlus} from "react-icons/fa";
import { addAppointment } from "../../service/appointment.service";

const initialFormData = {
  petName: "",
  date: "",
  status: "scheduled",
  type: "",
  notes: "",
  ownerName: "",
  doctor: "",
  duration: 0,
};

function Form({setShowForm}) {
  const {clinic} = useAuth();
  const queryClient = useQueryClient();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState(initialFormData);

  function handleChange(e) {
    const {name, value} = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: name === "duration" ? Number(value) : value,
    }));
  }

  async function handleSubmitForm(e) {
    e.preventDefault();
    try {
        setIsLoading(true);

        await addAppointment(clinic.id, formData)

        await queryClient.invalidateQueries({
          queryKey: ["appointments", clinic.id],
        });

        toast.success("Appointment added successfully");

        setFormData(initialFormData);
        
        setShowForm(false);

    } catch (err) {
      console.error("error adding", err.message);
      toast.error("Something went wrong, please try again");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/30 backdrop-blur-sm pt-24 px-4 overflow-y-auto">
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
            Add New Appointment
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Register a new appointment to your clinic.
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
                name="petName"
                required
                value={formData.petName}
                onChange={handleChange}
                className={inputClass}
              />
            </Field>

            <Field label="Type" required>
              <select
                required
                name="type"
                value={formData.type}
                onChange={handleChange}
                className={inputClass}
              >
                <option value="">Select type</option>
                <option value="vaccination">Vaccination visit</option>
                <option value="wellness">Wellness exam</option>
                <option value="follow-up">Follow-up</option>
                <option value="dental">Dental cleaning</option>
                <option value="first-check">First check</option>
                <option value="consultation">Consultation</option>
              </select>
            </Field>

            <Field label="Date" required>
              <input
                type="datetime-local"
                name="date"
                placeholder="Persian"
                required
                value={formData.date}
                onChange={handleChange}
                className={inputClass}
              />
            </Field>

            <Field label="Duration (minutes)" required>
              <input
                type="number"
                name="duration"
                min={5}
                step={5}
                value={formData.duration}
                onChange={handleChange}
                className={inputClass}
              />
            </Field>

            <Field label="Status" required>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className={inputClass}
              >
                <option value="">Select Status</option>
                <option value="Scheduled">Scheduled</option>
                <option value="Overdue">Overdue</option>
                <option value="Canceled">Canceled</option>
              </select>
            </Field>
            <Field label="Owner Name" required>
              <input
                type="text"
                placeholder="Maria Jonas"
                name="ownerName"
                required
                value={formData.ownerName}
                onChange={handleChange}
                className={inputClass}
              />
            </Field>

            <Field label="Doctor Name" required>
              <input
                type="text"
                placeholder="Dr. Patel"
                name="doctor"
                required
                value={formData.doctor}
                onChange={handleChange}
                className={inputClass}
              />
            </Field>
          </div>

          <Field label="Appointment Notes">
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
              {isLoading ? "Adding..." : "Add Appointment"}
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
