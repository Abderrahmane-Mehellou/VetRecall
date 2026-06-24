import {Outlet} from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/layouts/Header";
import {useContext} from "react";
import SettingsContext from "../context/SettingsContext";

function AppLayout() {
  const {language} = useContext(SettingsContext);
  return (
    <div className="flex flex-row h-screen w-full">
      <Sidebar />
      <div
        className={`w-full bg-blue-50  ${language === "en" ? "ml-0 desktop:ml-72" : "mr-0 desktop:mr-72"}`}
      >
        <Header />
        <Outlet />
      </div>
    </div>
  );
}

export default AppLayout;
