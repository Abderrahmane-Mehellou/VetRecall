import {db} from "../firebase/firebase";
import {collection, addDoc, doc, getDoc, serverTimestamp, updateDoc, query, where, getDocs} from "firebase/firestore";

export async function createClinic(clinicData) {
  const docRef = await addDoc(collection(db, "clinics"), {
    ...clinicData,
    createdAt: serverTimestamp(),
  });

  return docRef.id;
}

export async function getUserClinicById(uid) {
  const q = query(collection(db, "clinics"), where("createdBy", "==", uid));

  const snapshot = await getDocs(q);

  if (snapshot.empty) {
    return null;
  }

  const clinicDoc = snapshot.docs[0];

  return {
    id: clinicDoc.id,
    ...clinicDoc.data(),
  };
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

export async function updateClinic(clinicId, data){
  await updateDoc(doc(db, "clinics", clinicId), data);
}