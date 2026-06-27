import {db} from "../firebase/firebase";
import {collection, addDoc} from "firebase/firestore";

export async function addOwner(owner) {
  return await addDoc(collection(db, "petOwners"), owner);
}
