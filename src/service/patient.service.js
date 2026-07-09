import {db} from "../firebase/firebase";
import {
  collection,
  addDoc,
  serverTimestamp,
  getDocs,
  query,
  where,
  deleteDoc,
  doc,
} from "firebase/firestore";

export async function getPatients(clinicId) {
  const q = query(
    collection(db, "patients"),
    where("clinicId", "==", clinicId),
  );

  const snapshot = await getDocs(q);

  return snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}));
}

export async function deletePatient(id){
  await deleteDoc(doc(db, "patients", id))
}


export async function createPatient(patient, clinicId) {
  const docRef = await addDoc(collection(db, "patients"), {
    ...patient,
    clinicId,
    createdAt: serverTimestamp(),
  });

  return docRef.id;
}