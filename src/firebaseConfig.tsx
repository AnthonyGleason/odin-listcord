import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDJtXUh4snJAGCFCRrBN7hwLHmGgifskQ0",
  authDomain: "listcord-37356.firebaseapp.com",
  projectId: "listcord-37356",
  storageBucket: "listcord-37356.appspot.com",
  messagingSenderId: "611687402828",
  appId: "1:611687402828:web:ad93c8baea0de5a0b453e9",
  measurementId: "G-Q5740SWFQD"
};

export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
