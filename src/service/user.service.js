import {doc, getDoc} from "firebase/firestore";
import {db} from "../firebase/firebase";

export async function getUserById(uid) {
  const snapshot = await getDoc(doc(db, "users", uid));

  if (!snapshot.exists()) {
    throw new Error("User not found");
  }

  return {
    id: snapshot.id,
    ...snapshot.data(),
  };
}

