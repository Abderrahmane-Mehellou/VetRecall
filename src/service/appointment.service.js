import {db} from "../firebase/firebase";import {
  collection,
  addDoc,
  serverTimestamp,
  query,
  where,
  getDocs,
} from "firebase/firestore";

export async function addAppointment(clinicId, appointment){
  const docRef = await addDoc(collection(db, "appointments"), {
    ...appointment,
    clinicId: clinicId,
    createdAt: serverTimestamp(),
  });
  
    return docRef.id;
}

export async function getAppointments(clinicId) {
  const q = query(
    collection(db, "appointments"),
    where("clinicId", "==", clinicId),
  );

  const snapshot = await getDocs(q);

  return snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}));
}