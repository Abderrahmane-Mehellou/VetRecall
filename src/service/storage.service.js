import {ref, uploadBytes, getDownloadURL, deleteObject} from "firebase/storage";
import {storage} from "../firebase/firebase";

export async function uploadClinicLogo(clinicId, file) {
  const storageRef = ref(storage, `clinics/${clinicId}/logo`);

  await uploadBytes(storageRef, file);

  const downloadURL = await getDownloadURL(storageRef);

  console.log(downloadURL)

  return downloadURL;
}

export async function deleteClinicLogo(clinicId){
    const storageRef = ref(storage, `clinics/${clinicId}/logo`);

    await deleteObject(storageRef);

}