// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "",
  authDomain: "placement-portal-26300.firebaseapp.com",
  projectId: "placement-portal-26300",
  storageBucket: "placement-portal-26300.appspot.com",
  messagingSenderId: "1052355511843",
  appId: "1:1052355511843:web:1004443387841869ef1396",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
