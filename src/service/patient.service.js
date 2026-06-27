import {db} from "../firebase/firebase";
import {collection, addDoc} from "firebase/firestore";

export async function addPatient(patient) {
  return await addDoc(collection(db, "patients"), patient);
}
