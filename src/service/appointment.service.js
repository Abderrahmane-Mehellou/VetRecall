import {db} from "../firebase/firebase";
import {collection, addDoc} from "firebase/firestore";

export async function addAppointment(appointment) {
  return await addDoc(collection(db, "appointments"), appointment);
}
