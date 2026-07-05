import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "firebase/auth";
import {auth} from "../firebase/firebase";
import {getClinicById} from "./clinic.service";

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
    throw new Error(error.message);
  }
}

export async function signOutUser() {
  try {
    await auth.signOut();
  } catch (error) {
    throw new Error(error.message);
  }
}
