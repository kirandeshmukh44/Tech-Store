// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDTLalmp7Cz4Chzc1Svdc9SP9ZqHLWoi90",
    authDomain: "python-fsd.firebaseapp.com",
    projectId: "python-fsd",
    storageBucket: "python-fsd.firebasestorage.app",
    messagingSenderId: "421934504690",
    appId: "1:421934504690:web:5dadf600399a53709a8e6b",
    measurementId: "G-BWT72RXR7G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)