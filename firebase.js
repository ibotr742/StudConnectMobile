// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwbPG6zJbeFcwj6ggUTMqr0-o54hamqbU",
  authDomain: "studconnect-545b9.firebaseapp.com",
  projectId: "studconnect-545b9",
  storageBucket: "studconnect-545b9.appspot.com",
  messagingSenderId: "752899818534",
  appId: "1:752899818534:web:16201ace450a84a44f12e7",
  measurementId: "G-R30LMWPT9L",
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
