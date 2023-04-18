import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "test",
  authDomain: "test",
  projectId: "test",
  storageBucket: "test",
  messagingSenderId: "test",
  appId: "test",
  measurementId: "test",
};
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
