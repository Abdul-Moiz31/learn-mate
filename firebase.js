// import { initializeApp } from 'firebase/app';
// import { getFirestore } from 'firebase/firestore';
// const firebaseConfig = {
//  apiKey: "YOUR_API_KEY",
//  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
//  projectId: "YOUR_PROJECT_ID",
//  storageBucket: "YOUR_PROJECT_ID.appspot.com",
//  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
//  appId: "YOUR_APP_ID"
// };
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
// export default db;

// Key : 
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDGo0O9PQWOU7Ampy7viN-ks8XVSA7q0V8",

  authDomain: "pacedream-1f09d.firebaseapp.com",

  projectId: "pacedream-1f09d",

  storageBucket: "pacedream-1f09d.appspot.com",

  messagingSenderId: "630159727060",

  appId: "1:630159727060:web:112571ad5881d0537c1e41",

  measurementId: "G-957JETLKHB"

  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
