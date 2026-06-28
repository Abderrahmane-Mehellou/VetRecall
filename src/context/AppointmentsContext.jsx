import {createContext, useState} from "react";

const AppointmentsContext = createContext();

export function AppointmentsProvider({children}) {
  const [week, setweek] = useState(0);
  const [type, setType] = useState("Week");
  return (
    <AppointmentsContext.Provider value={{week, setweek, type, setType}}>
      {children}
    </AppointmentsContext.Provider>
  );
}

export default AppointmentsContext;
