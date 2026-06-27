import {Outlet} from "react-router-dom";
import {useContext} from "react";

import Sidebar from "../components/Sidebar";
import Header from "../components/layouts/Header";
import SettingsContext from "../context/SettingsContext";

function AppLayout() {
  const {language} = useContext(SettingsContext);

  return (
    <div className="flex w-full">
      <Sidebar />

      <main
        className={`
          flex-1
          min-h-screen
          bg-blue-50
          dark:bg-slate-950
          dark:text-white
          transition-all
          p-7
          ${language === "en" ? "desktop:ml-72" : "desktop:mr-72"}
        `}
      >
        <Header />
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
