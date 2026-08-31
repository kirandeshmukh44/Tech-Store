// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAqe3FHLakrMkwr8mdtIGGAAEW2qIqJC5A",
    authDomain: "tech-store-525d1.firebaseapp.com",
    projectId: "tech-store-525d1",
    storageBucket: "tech-store-525d1.firebasestorage.app",
    messagingSenderId: "12952746894",
    appId: "1:12952746894:web:f19e43a6b363d5afb442df",
    measurementId: "G-5SXHDD7XRG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const db = getFirestore(app);

