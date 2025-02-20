// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth'
// import { GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGw3vObIrlYfLOz6_Z_K4DvrDj7iWiyXU",
  authDomain: "lokacraft-hmo.firebaseapp.com",
  projectId: "lokacraft-hmo",
  storageBucket: "lokacraft-hmo.firebasestorage.app",
  messagingSenderId: "725527797021",
  appId: "1:725527797021:web:89fe63d0246490825ed5f4",
  measurementId: "G-GN4TSZ8BJM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app)
// const provider = new GoogleAuthProvider();
const db = getFirestore(app);
const storage = getStorage(app)

export { app, db, storage, auth }