// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-d4350.firebaseapp.com",
  projectId: "mern-estate-d4350",
  storageBucket: "mern-estate-d4350.appspot.com",
  messagingSenderId: "845275512202",
  appId: "1:845275512202:web:a40029400270cba73c5c73",
  measurementId: "G-XGTPWPGE6F"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);


