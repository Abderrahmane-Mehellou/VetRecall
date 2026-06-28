import {db} from "../firebase/firebase";
import {collection, addDoc, getDocs} from "firebase/firestore";

export async function addPatient(patient) {
  return await addDoc(collection(db, "patients"), patient);
}

export async function getPatients(id) {
  try {
    const snapshot = await getDocs(collection(db, "patients"));

    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.error(error);
    throw error;
  }
}
