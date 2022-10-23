// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB8pzhUiSp2VK6RqMh_w1QeUKpr5csfXE0",
  authDomain: "tecnostore-5ad9f.firebaseapp.com",
  projectId: "tecnostore-5ad9f",
  storageBucket: "tecnostore-5ad9f.appspot.com",
  messagingSenderId: "685069594421",
  appId: "1:685069594421:web:66cf8e30f098246522a67c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
