import {createContext, use, useEffect, useState} from "react";
const SettingsContext = createContext();

export const SettingsProvider = ({children}) => {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    window.document.body.dir = language === "ar" ? "rtl" : "ltr";
    window.document.body.lang = language;
  }, [language]);

  useEffect(() => {
    if (!darkMode) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.toggle("dark");
    }
  }, [darkMode]);

  return (
    <SettingsContext.Provider
      value={{darkMode, setDarkMode, language, setLanguage}}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export default SettingsContext;
