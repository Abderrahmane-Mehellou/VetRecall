import {createContext, useEffect, useState} from "react";
import {onAuthStateChanged} from "firebase/auth";

import {auth} from "../firebase/firebase";
import { getUserById } from "../service/user.service";
import { getClinicById } from "../service/clinic.service";

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

      } catch (err) {
        console.error(err);

        setFirebaseUser(null);
        setUser(null);
        setClinic(null);

      } finally {
        setLoading(false);
      }
    });

    return unsubscribe;
  }, []);

  const refreshUser = async () => {
    if (!firebaseUser) return;

    const currentUser = await getUserById(firebaseUser.uid);

    setUser(currentUser);
  };

  const refreshClinic = async () => {
    if (!user?.clinicId) return;

    const currentClinic = await getClinicById(user.clinicId);

    setClinic(currentClinic);
  };

  const value = {
    firebaseUser,

    user,
    setUser,

    clinic,
    setClinic,

    refreshUser,
    refreshClinic,

    loading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContext;
