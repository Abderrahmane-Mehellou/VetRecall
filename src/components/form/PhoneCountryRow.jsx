import countries from "world-countries";
import {FiPhone, FiChevronDown} from "react-icons/fi";

function PhoneCountryRow({formData, setFormData}) {
  const countriesData = countries
    .filter((c) => c.idd.root)
    .map((c) => ({
      name: c.name.common,
      code: c.cca2,
      dialCode: c.idd.root + (c.idd.suffixes ? (c.idd.suffixes[0] ?? "") : ""),
      flag: c.flag,
    }))
    .sort((a, b) => a.name.localeCompare(b.name));

  const selectedCountry =
    countriesData.find((c) => c.name === formData.country) ||
    countriesData.find((c) => c.code === "GB");

  function handleCountryChange(e) {
    const country = countriesData.find((c) => c.code === e.target.value);

    setFormData((prev) => ({
      ...prev,
      country: country.name,
      countryCode: country.code,
      dialCode: country.dialCode,
    }));
  }

  function handlePhoneChange(e) {
    const onlyNumbers = e.target.value.replace(/\D/g, "");

    setFormData((prev) => ({
      ...prev,
      phone: onlyNumbers,
    }));
  }

  return (
    <div className="flex gap-4 w-full">
      {/* Country */}

      <div className="flex flex-col gap-2 flex-1">
        <label className="text-sm font-medium text-slate-700 dark:text-slate-200">
          Country
        </label>

        <div className="relative">
          <select
            value={selectedCountry.code}
            onChange={handleCountryChange}
            className="
              w-full h-12
              rounded-full
              bg-gray-100
              dark:bg-slate-700
              text-gray-700
              dark:text-white
              pl-4 pr-10
              outline-none
              focus:ring-2
              focus:ring-blue-300
              appearance-none
              cursor-pointer
              transition-all
            "
          >
            {countriesData.map((country) => (
              <option key={country.code} value={country.code}>
                {country.flag} {country.name}
              </option>
            ))}
          </select>

          <FiChevronDown
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
            size={18}
          />
        </div>
      </div>

      {/* Phone */}

      <div className="flex flex-col gap-2 flex-1">
        <label className="text-sm font-medium text-slate-700 dark:text-slate-200">
          Phone Number
        </label>

        <div
          className="
            flex flex-row items-center
            h-12
            rounded-full
            bg-gray-100
            dark:bg-slate-700
            focus-within:ring-2
            focus-within:ring-blue-300
            transition-all
          "
        >
          <FiPhone className="ml-4 text-gray-400" size={16} />

          <span className="mx-3 flex items-center gap-2 whitespace-nowrap text-sm font-medium text-gray-500 dark:text-gray-300">
            <span className="text-lg leading-none">{selectedCountry.flag}</span>
            <span>{selectedCountry.dialCode}</span>
          </span>

          <div className="w-px h-6 bg-gray-300 dark:bg-slate-500" />

          <input
            type="tel"
            value={formData.phone}
            onChange={handlePhoneChange}
            placeholder="7911 123456"
            className="
              flex-1
              h-full
              bg-transparent
              px-4
              outline-none
              text-sm
              text-gray-700
              dark:text-white
              placeholder:text-gray-400
            "
          />
        </div>
      </div>
    </div>
  );
}

export default PhoneCountryRow;
