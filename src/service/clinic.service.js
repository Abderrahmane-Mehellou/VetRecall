import {db} from "../firebase/firebase";
import {collection, addDoc, doc, getDoc} from "firebase/firestore";

export async function createClinic(clinicData) {
  const docRef = await addDoc(collection(db, "clinics"), {
    ...clinicData,
    createdAt: serverTimestamp(),
  });

  return docRef.id;
}

export async function getClinicById(clinicId) {
  const clinicRef = doc(db, "clinics", clinicId);

  const clinicSnap = await getDoc(clinicRef);

  if (clinicSnap.exists()) {
    return {
      id: clinicSnap.id,
      ...clinicSnap.data(),
    };
  } else {
    throw new Error("Clinic not found");
  }
}
