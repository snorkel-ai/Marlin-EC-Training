import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA6KgmU6DE_dQY9VM5Wn8dM-yhE3IGjYs4",
  authDomain: "marlin-ec-training.firebaseapp.com",
  projectId: "marlin-ec-training",
  storageBucket: "marlin-ec-training.firebasestorage.app",
  messagingSenderId: "909399010808",
  appId: "1:909399010808:web:f433c10f7b5eafe22f7a0d"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);