import {db} from "../firebase/firebase";
import {collection, addDoc} from "firebase/firestore";

export async function addClinic(clinic) {
  return await addDoc(collection(db, "clinics"), clinic);
}
