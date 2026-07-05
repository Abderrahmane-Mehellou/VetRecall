import {
  MdOutlineDarkMode,
  MdNotificationsNone,
  MdOutlineLightMode,
} from "react-icons/md";
import {IoIosArrowDown} from "react-icons/io";
import {FaSearch} from "react-icons/fa";
import {IoMenu} from "react-icons/io5";
import {PiSignOutBold} from "react-icons/pi";
import {useContext, useRef, useState} from "react";
import SettingsContext from "../../context/SettingsContext";
import { useAuth } from "../../hooks/useAuth";
import { signOutUser } from "../../service/auth.service";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function Header() {
  const navigation = useNavigate()
  const {darkMode, setDarkMode, language, setLanguage} =
    useContext(SettingsContext);
  const panelRef = useRef();
  const {user, clinic} = useAuth();
  const firstName = user?.fullName.split(" ")[0] || "User";
  const secondName = user?.fullName.split(" ")[1] || "User";

  const [showPanel, setShowPanel] = useState(false);

  // Function to handle sign out
  async function handleSignOut(e) {
    e.preventDefault();
    await signOutUser();
    console.log("Sign out clicked");
    navigation("/login");
    toast.success("Signed out successfully!");
  }
  return (
    <header
      dir={language === "en" ? "ltr" : "rtl"}
      className="flex flex-row fixed items-center top-0 right-0 left-72 z-50 h-16 justify-between p-4 border-b border-gray-200 bg-blue-100 dark:bg-slate-900 dark:text-white"
    >
      <div className="relative hidden flex-row items-center gap-4 desktop:flex">
        <input
          className={`w-72 h-9 ${language === "en" ? "pl-10" : "pr-10"} rounded-full bg-gray-50 text-sm border-gray-300 shadow-2xl focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-600`}
          placeholder={
            language == "ar"
              ? "ابحث عن موعد, حيوان..."
              : "Search patients, owners, appointments…"
          }
        />
        <div
          className={`absolute ${language === "ar" ? "right-3" : "left-3"} text-gray-500`}
        >
          <FaSearch />
        </div>
      </div>
      <div className=" cursor-pointer hover:bg-gray-200 px-3 py-2 rounded-full dark:hover:bg-slate-700 flex desktop:hidden">
        <span>
          <IoMenu />
        </span>
      </div>
      <div className="flex flex-row items-center gap-4">
        <div
          className="cursor-pointer hover:bg-gray-200 px-3 py-2 rounded-full dark:hover:bg-slate-700"
          onClick={() => setLanguage(language === "en" ? "ar" : "en")}
        >
          {language === "en" ? "ar" : "en"}
        </div>
        <div
          className="cursor-pointer hover:bg-gray-200 p-2 rounded-full dark:hover:bg-slate-700 transition-all"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? (
            <MdOutlineLightMode size={25} />
          ) : (
            <MdOutlineDarkMode size={25} />
          )}
        </div>
        <div className="cursor-pointer hover:bg-gray-200 p-2 rounded-full dark:hover:bg-slate-700">
          <MdNotificationsNone size={25} />
        </div>
        <div
          className="relative flex flex-row items-center gap-2 cursor-pointer hover:bg-blue-100 px-3 py-2 rounded-full transition-all duration-300 dark:hover:bg-slate-700"
          onClick={() => setShowPanel((show) => !show)}
        >
          <div className="flex justify-center items-center w-10 h-10 rounded-full bg-blue-200 overflow-hidden object-cover dark:text-slate-700">
            PA
          </div>
          <div className="hidden tablet:flex desktop:flex flex-row gap-2">
            <p className="text-sm font-medium">Dr. {firstName}</p>
            <IoIosArrowDown />
          </div>
          {showPanel && (
            <div
              className="
absolute
top-15
right-0
z-auto
w-56
bg-white
dark:bg-slate-800
dark:text-white
shadow-xl
border
border-gray-200
dark:border-slate-700
rounded-2xl
p-4
"
            >
              <ul>
                <li>
                  <h1 className="font-bold">Dr.{firstName} {secondName}</h1>
                  <p className="font-thin text-sm">clinic Owner</p>
                </li>
                <hr />
                <li>{language === "en" ? "Profile Settings" : "الإعدادات"}</li>
                <li>{language === "en" ? "Billing" : "الفوترة"}</li>
                <hr />
                <li className="flex items-center gap-2 mt-3" onClick={(e) => handleSignOut(e)}>
                  <PiSignOutBold color="red" />
                  <h1>{language === "en" ? "Sign out" : "تسجيل الخروج"}</h1>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
