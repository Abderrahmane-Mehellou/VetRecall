import {doc, getDoc, setDoc} from "firebase/firestore";
import {db} from "../firebase/firebase";

export async function getUserById(uid) {
  const snapshot = await getDoc(doc(db, "users", uid));

  if (!snapshot.exists()) {
    return null;
  }

  return {
    id: snapshot.id,
    ...snapshot.data(),
  };
}

export async function createUser(userData) {
  await setDoc(doc(db, "users", userData.uid), {
    ...userData,
    createdAt: new Date(),
  });

  return userData.uid;
}
