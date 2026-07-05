import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { deleteClinicLogo, uploadClinicLogo } from "../../service/storage.service";
import { updateClinic } from "../../service/clinic.service";
import toast from "react-hot-toast";

export function Profile() {
  const {clinic, setClinic, refreshClinic} = useAuth();
  console.log(clinic.logo);

  const [form, setForm] = useState({
    name: clinic.name,
    email: clinic.email,
    phone: clinic.phone,
    city: clinic.city,
    address: clinic.address,
  });
  const [logoPreview, setLogoPreview] = useState(
    clinic.logo || "/images/default-clinic-logo.png",
  );

  useEffect(() => {
    setLogoPreview(clinic?.logo || "/images/default-clinic-logo.png");
  }, [clinic?.logo]);

  function handleFieldChange(field) {
    return (e) => setForm((prev) => ({...prev, [field]: e.target.value}));
  }

  async function handleLogoChange(e) {
    const file = e.target.files?.[0];
    if (!file) return;

    setLogoPreview(URL.createObjectURL(file));
    // TODO: upload `file` to your backend / storage here

    const logoURL = await uploadClinicLogo(clinic.id, file);

    const res = await updateClinic(clinic.id, {logo: logoURL});
    console.log(res);

    setClinic((prev) => ({
      ...prev,
      logo: logoURL,
    }));

    await refreshClinic();

    toast.success("Logo uploaded successfully");

    console.log(res);
  }

  async function handleRemoveLogo() {
    try {
      await deleteClinicLogo(clinic.id);

      await updateClinic(clinic.id, {
        logo: "",
      });

      setClinic((prev) => ({
        ...prev,
        logo: "",
      }));

      await refreshClinic();

      setLogoPreview("/images/default-clinic-logo.png");

      toast.success("Logo deleted successfully");
    } catch (err) {
      console.error(err);
    }
  }

  async function handleSubmitForm(e) {
    e.preventDefault();

    if (!form) return;

    await updateClinic(clinic.id, form);

    setClinic((prev) => ({...prev, ...form}));

    await refreshClinic();

    toast.success("Informations updated successfully");
  }

  const fields = [
    {key: "name", label: "Clinic name", type: "text"},
    {key: "email", label: "Email", type: "email"},
    {key: "phone", label: "Phone", type: "tel"},
    {key: "city", label: "City", type: "text"},
    {key: "address", label: "Address", type: "text"},
  ];

  return (
    <div className="px-7 py-5 max-w-2xl">
      <h1 className="text-xl font-semibold text-slate-900 dark:text-white">
        Clinic profile
      </h1>
      <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
        Public details shown to your clients.
      </p>

      <div className="flex items-center gap-4 mt-6">
        <img
          src={logoPreview}
          alt="Clinic logo"
          className="w-20 h-20 rounded-2xl object-cover border border-slate-200 dark:border-slate-700"
        />

        <label
          className="cursor-pointer rounded-xl border-2 border-dashed border-slate-300 dark:border-slate-600
                           px-6 py-4 text-sm text-slate-600 dark:text-slate-300
                           hover:border-indigo-500 hover:text-indigo-600 transition-colors duration-150"
        >
          Upload clinic logo
          <input
            type="file"
            accept="image/png,image/jpeg,image/webp"
            className="hidden"
            onChange={handleLogoChange}
          />
        </label>

        <button
          type="button"
          onClick={handleRemoveLogo}
          className="text-sm text-slate-500 dark:text-slate-400 hover:text-red-600 dark:hover:text-red-400
                     transition-colors duration-150 cursor-pointer"
        >
          Remove
        </button>
      </div>

      <form onSubmit={handleSubmitForm}>
        <div className="mt-8 space-y-5">
          {fields.map(({key, label, type}) => (
            <div key={key} className="flex flex-col gap-1.5">
              <label
                htmlFor={key}
                className="text-sm font-medium text-slate-700 dark:text-slate-300"
              >
                {label}
              </label>
              <input
                id={key}
                type={type}
                value={form[key]}
                onChange={handleFieldChange(key)}
                className="w-full px-3.5 py-2.5 rounded-lg text-sm
              border border-slate-200 dark:border-slate-700
              bg-white dark:bg-slate-800 text-slate-900 dark:text-white
              placeholder:text-slate-400
              focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-500
              transition-colors duration-150"
              />
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-end">
          <button
            type="submit"
            className="px-5 py-2.5 rounded-lg text-sm font-medium text-white
          bg-indigo-600 hover:bg-indigo-700 transition-colors duration-150 cursor-pointer"
          >
            Save changes
          </button>
        </div>
      </form>
    </div>
  );
}
