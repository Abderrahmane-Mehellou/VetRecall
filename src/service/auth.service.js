import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,
} from "firebase/auth";
import {auth, db, googleProvider} from "../firebase/firebase";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";

export async function registerUser(userData) {
  const {email, password} = userData;
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );
    return userCredential.user;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function signInWithGoogle() {
  const result = await signInWithPopup(auth, googleProvider);

  const user = result.user;

  const ref = doc(db, "users", user.uid);

  const snapshot = await getDoc(ref);

  if (!snapshot.exists()) {
    await setDoc(ref, {
      uid: user.uid,
      name: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
      provider: "google",
      createdAt: serverTimestamp(),
    });
  }

  return user;
}

export async function loginUser(userData) {
  const {email, password} = userData;
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password,
    );
    return userCredential.user;
  } catch (error) {
    console.error(error.code)
    console.error(error.message)
    throw error
  }
}

export async function signOutUser() {
  try {
    await auth.signOut();
  } catch (error) {
    throw new Error(error.message);
  }
}
