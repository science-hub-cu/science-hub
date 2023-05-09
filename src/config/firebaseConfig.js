import { initializeApp } from "firebase/app";
import { getAuth, initializeAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getReactNativePersistence } from "firebase/auth/react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDroKzGiPQrH9Sk4MgYCeVEb6jSdfQdhFA",
  authDomain: "cs303-sci.firebaseapp.com",
  projectId: "cs303-sci",
  storageBucket: "cs303-sci.appspot.com",
  messagingSenderId: "663584332019",
  appId: "1:663584332019:web:044b12507e8f172a9e3f86",
  measurementId: "G-5N8Z22DB7K",
  storageBucket: "gs://cs303-sci.appspot.com",
};
export const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
