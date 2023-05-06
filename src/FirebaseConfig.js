import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'

// Import the functions you need from the SDKs you need

// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUHWbaUztrBY_J9kecKoCcjdW7VgHUtZw",
  authDomain: "typing-speed-test-a22a9.firebaseapp.com",
  projectId: "typing-speed-test-a22a9",
  storageBucket: "typing-speed-test-a22a9.appspot.com",
  messagingSenderId: "287687571301",
  appId: "1:287687571301:web:174155ba3c9153b3bd538c",
  measurementId: "G-Y1BXFPZE0C"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
// const analytics = getAnalytics(app);

export {auth, db}