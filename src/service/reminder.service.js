import {db} from "../firebase/firebase";
import {collection, addDoc} from "firebase/firestore";

export async function addReminder(clinicId, reminder) {
  const docRef = await addDoc(collection(db, "reminders"), {
    ...reminder,
    clinicId: clinicId,
    createdAt: serverTimestamp(),
  });

  return docRef.id;
}