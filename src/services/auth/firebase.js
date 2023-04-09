import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "test",
  authDomain: "test",
  projectId: "test",
  storageBucket: "test",
  messagingSenderId: "test",
  appId: "test",
  measurementId: "test",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);
