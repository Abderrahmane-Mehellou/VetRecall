import {useContext, useRef, useState, useEffect} from "react";
import {
  MdOutlineDarkMode,
  MdNotificationsNone,
  MdOutlineLightMode,
} from "react-icons/md";
import {IoIosArrowDown} from "react-icons/io";
import {FaSearch} from "react-icons/fa";
import {IoMenu} from "react-icons/io5";
import {PiSignOutBold} from "react-icons/pi";
import {useNavigate} from "react-router-dom";
import toast from "react-hot-toast";
import SettingsContext from "../../context/SettingsContext";
import {useAuth} from "../../hooks/useAuth";
import {signOutUser} from "../../service/auth.service";
import NotificationsContext from "../../context/NotificationsContext";

function Header() {
  const navigate = useNavigate();
  const {hasUnread} = useContext(NotificationsContext);
  const {darkMode, setDarkMode, language, setLanguage} =
    useContext(SettingsContext);
  const {user, clinic} = useAuth();
  const panelRef = useRef();
  const [showPanel, setShowPanel] = useState(false);

  const fullName = user?.fullName?.trim() || "User";
  const [firstName, secondName = ""] = fullName.split(" ");
  const initials = (firstName[0] + (secondName[0] || "")).toUpperCase();

  useEffect(() => {
    const handler = (e) => {
      if (!panelRef.current?.contains(e.target)) setShowPanel(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  async function handleSignOut(e) {
    e.preventDefault()
    try {
      await signOutUser();
      toast.success("Signed out successfully!");
      navigate("/login");
    } catch (err) {
      toast.error("Failed to sign out");
      console.error(err);
    }
  }

  function handleNavigate(e) {
    e.preventDefault();
    navigate("notifications");
  }

  const isRtl = language !== "en";

  return (
    <header
      dir={isRtl ? "rtl" : "ltr"}
      className={`fixed top-0 z-40 h-16 flex items-center justify-between px-4
                  bg-white dark:bg-slate-900
                  border-b border-slate-200 dark:border-slate-700
                  ${isRtl ? "right-72 left-0" : "left-72 right-0"}`}
    >
      {/* Search */}
      <div className="relative hidden desktop:flex items-center">
        <FaSearch
          className={`absolute text-slate-400 ${isRtl ? "right-3" : "left-3"}`}
          size={14}
        />
        <input
          type="text"
          placeholder={
            language === "ar"
              ? "ابحث عن موعد, حيوان..."
              : "Search patients, owners, appointments…"
          }
          className={`w-72 h-9 rounded-full text-sm outline-none
                      bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white
                      placeholder:text-slate-400
                      focus:ring-2 focus:ring-blue-500/40 focus:bg-white dark:focus:bg-slate-700
                      transition-colors
                      ${isRtl ? "pr-10 pl-4" : "pl-10 pr-4"}`}
        />
      </div>

      {/* Mobile menu toggle */}
      <button
        type="button"
        aria-label="Open menu"
        className="flex desktop:hidden items-center justify-center w-9 h-9 rounded-full
                   text-slate-600 dark:text-slate-300
                   hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors cursor-pointer"
      >
        <IoMenu size={20} />
      </button>

      {/* Right side actions */}
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => setLanguage(language === "en" ? "ar" : "en")}
          className="w-9 h-9 flex items-center justify-center rounded-full text-sm font-medium
                     text-slate-600 dark:text-slate-300
                     hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors cursor-pointer uppercase"
        >
          {language === "en" ? "ar" : "en"}
        </button>

        <button
          type="button"
          aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          onClick={() => setDarkMode(!darkMode)}
          className="w-9 h-9 flex items-center justify-center rounded-full
                     text-slate-600 dark:text-slate-300
                     hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors cursor-pointer"
        >
          {darkMode ? (
            <MdOutlineLightMode size={20} />
          ) : (
            <MdOutlineDarkMode size={20} />
          )}
        </button>

        <button
          type="button"
          aria-label="Notifications"
          onClick={handleNavigate}
          className="relative w-9 h-9 flex items-center justify-center rounded-full
             text-slate-600 dark:text-slate-300
             hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors cursor-pointer"
        >
          <MdNotificationsNone size={20} />
          {hasUnread && (
            <span className="absolute w-2 h-2 rounded-full bg-red-600 top-1 right-2" />
          )}
        </button>

        {/* User menu */}
        <div ref={panelRef} className="relative">
          <button
            type="button"
            onClick={() => setShowPanel((v) => !v)}
            className="flex items-center gap-2 pl-1.5 pr-3 py-1.5 rounded-full
                       hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors cursor-pointer"
          >
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center shrink-0
                             bg-indigo-100 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-400
                             text-xs font-semibold"
            >
              {initials}
            </div>
            <div className="hidden tablet:flex items-center gap-1.5">
              <p className="text-sm font-medium text-slate-700 dark:text-white">
                Dr. {firstName}
              </p>
              <IoIosArrowDown
                className={`text-slate-400 transition-transform duration-200 ${showPanel ? "rotate-180" : ""}`}
                size={14}
              />
            </div>
          </button>

          {showPanel && (
            <div
              className={`absolute top-[calc(100%+8px)] w-56 rounded-2xl p-2 z-50
                          bg-white dark:bg-slate-800
                          border border-slate-200 dark:border-slate-700 shadow-xl
                          ${isRtl ? "left-0" : "right-0"}`}
            >
              <div className="px-2.5 py-2">
                <p className="text-sm font-semibold text-slate-900 dark:text-white">
                  Dr. {fullName}
                </p>
                <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">
                  {clinic?.name || "Clinic owner"}
                </p>
              </div>

              <hr className="my-1.5 border-slate-100 dark:border-slate-700" />

              <button
                type="button"
                onClick={() => navigate("/settings")}
                className="w-full text-left px-2.5 py-2 rounded-lg text-sm
                           text-slate-700 dark:text-slate-200
                           hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors cursor-pointer"
              >
                {language === "en" ? "Profile Settings" : "الإعدادات"}
              </button>
              <button
                type="button"
                onClick={() => navigate("/settings/billing")}
                className="w-full text-left px-2.5 py-2 rounded-lg text-sm
                           text-slate-700 dark:text-slate-200
                           hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors cursor-pointer"
              >
                {language === "en" ? "Billing" : "الفوترة"}
              </button>

              <hr className="my-1.5 border-slate-100 dark:border-slate-700" />

              <button
                type="button"
                onClick={(e) => handleSignOut(e)}
                className="flex items-center gap-2.5 w-full px-2.5 py-2 rounded-lg text-sm
                           text-red-600 dark:text-red-400
                           hover:bg-red-50 dark:hover:bg-red-500/10 transition-colors cursor-pointer"
              >
                <PiSignOutBold size={15} />
                {language === "en" ? "Sign out" : "تسجيل الخروج"}
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
