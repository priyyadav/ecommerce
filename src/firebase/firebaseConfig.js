// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8WUlHKXy6QQMbJOPV-4gWDATgmcyJaHY",
  authDomain: "ecommerce-37abb.firebaseapp.com",
  projectId: "ecommerce-37abb",
  storageBucket: "ecommerce-37abb.appspot.com",
  messagingSenderId: "681977193860",
  appId: "1:681977193860:web:d9777ff2fe64ceaac669d1",
  measurementId: "G-BCDQDEJSNS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }