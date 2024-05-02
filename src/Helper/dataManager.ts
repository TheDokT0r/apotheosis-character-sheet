import { getApp, type FirebaseApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDoc, getFirestore, doc, updateDoc } from "firebase/firestore";
import firebaseApp from "./firebaseManager";

export async function getCharacterSheet(): Promise<CharacterSheet | null> {
  const auth = getAuth(firebaseApp);

  const user = auth.currentUser;
  if (!user) return null;

  const db = getFirestore(firebaseApp);
  const docSnap = await getDoc(doc(db, "sheets", user.uid));
  if (!docSnap.exists()) return null;

  const data = docSnap.data();

  return data as CharacterSheet;
}

type DataType = "basic_info" | "attributes" | "skills" | "status";

export async function updateCharacterSheet<T>(data: T, dataType: DataType) {
  const auth = getAuth();
  const user = auth.currentUser;
  if (!user) return;

  const db = getFirestore(firebaseApp);
  const docRef = doc(db, "sheets", user.uid);
  await updateDoc(docRef, { [dataType]: data });
}
