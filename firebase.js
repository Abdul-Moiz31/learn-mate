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
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBo7C47j-ZxLjhEdYPLzSUR81hrgkoRNs8",
  authDomain: "learn-mate-e1438.firebaseapp.com",
  projectId: "learn-mate-e1438",
  storageBucket: "learn-mate-e1438.appspot.com",
  messagingSenderId: "89765481839",
  appId: "1:89765481839:web:312252fc5bb01913a9ac9a",
  measurementId: "G-G38RQPXTVR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };