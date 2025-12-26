import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBuIJn51-jHIk-_YzTQo003SGs4pt8ErgI",
  authDomain: "vanokhi-newsletter.firebaseapp.com",
  projectId: "vanokhi-newsletter",
  storageBucket: "vanokhi-newsletter.firebasestorage.app",
  messagingSenderId: "1063337093480",
  appId: "1:1063337093480:web:3a3ded79b6d68500ad4edd",
  measurementId: "G-C9FQHTQ07S",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
