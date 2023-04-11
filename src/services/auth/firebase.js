import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDroKzGiPQrH9Sk4MgYCeVEb6jSdfQdhFA",
  authDomain: "cs303-sci.firebaseapp.com",
  projectId: "cs303-sci",
  storageBucket: "cs303-sci.appspot.com",
  messagingSenderId: "663584332019",
  appId: "1:663584332019:web:044b12507e8f172a9e3f86",
  measurementId: "G-5N8Z22DB7K",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
