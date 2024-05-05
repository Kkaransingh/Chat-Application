import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA71sogVwPnJ_ZhXygq2Lpx8mBrmjyEQyQ",
  authDomain: "dfdg-e3a0b.firebaseapp.com",
  projectId: "dfdg-e3a0b",
  storageBucket: "dfdg-e3a0b.appspot.com",
  messagingSenderId: "1017805733669",
  appId: "1:1017805733669:web:b791246e8e13da408164cc",
  measurementId: "G-55BKZPEKCW"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
