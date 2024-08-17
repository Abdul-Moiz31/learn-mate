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
//  apiKey: "YOUR_API_KEY",
 authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
 projectId: "YOUR_PROJECT_ID",
 storageBucket: "YOUR_PROJECT_ID.appspot.com",
 messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
 appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
