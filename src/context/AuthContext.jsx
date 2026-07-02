import {createContext, useEffect, useState} from "react";
import {onAuthStateChanged} from "firebase/auth";

import {auth} from "../firebase/firebase";
// import {getUserById} from "../services/userService";
// import {getClinicById} from "../services/clinicService";

const AuthContext = createContext();

export function AuthProvider({children}) {
  const [firebaseUser, setFirebaseUser] = useState(null);
  const [user, setUser] = useState(null);
  const [clinic, setClinic] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      try {
        if (!firebaseUser) {
          setFirebaseUser(null);
          setUser(null);
          setClinic(null);
          setLoading(false);
          return;
        }

        setFirebaseUser(firebaseUser);

        const currentUser = await getUserById(firebaseUser.uid);
        setUser(currentUser);

        if (currentUser?.clinicId) {
          const currentClinic = await getClinicById(currentUser.clinicId);
          setClinic(currentClinic);
        }

        setLoading(false);
      } catch (err) {
        console.error(err);

        setFirebaseUser(null);
        setUser(null);
        setClinic(null);

        setLoading(false);
      }
    });

    return unsubscribe;
  }, []);

  const value = {
    firebaseUser,

    user,
    setUser,

    clinic,
    setClinic,

    loading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContext;
