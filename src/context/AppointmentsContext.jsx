import {createContext, useState} from "react";

const AppointmentsContext = createContext();

export function AppointmentsProvider({children}) {
  const [week, setWeek] = useState("");
  return (
    <AppointmentsContext.Provider value={{week, setWeek}}>
      {children}
    </AppointmentsContext.Provider>
  );
}

export default AppointmentsContext;
