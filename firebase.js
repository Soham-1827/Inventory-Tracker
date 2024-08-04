// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "inventory-management-9670c.firebaseapp.com",
  projectId: "inventory-management-9670c",
  storageBucket: "inventory-management-9670c.appspot.com",
  messagingSenderId: "6028606627",
  appId: "1:6028606627:web:e0b7e21987c1c916c31316",
  measurementId: "G-ES78NSYBLQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export {firestore}