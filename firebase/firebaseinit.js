// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, getRedirectResult, GoogleAuthProvider, signInWithRedirect, signOut, signInWithEmailAndPassword } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCi2F-yQtHBZ410Jn6pu3f72Cd-PbpoXew",
    authDomain: "fall-risk-assessment-2fb44.firebaseapp.com",
    projectId: "fall-risk-assessment-2fb44",
    storageBucket: "fall-risk-assessment-2fb44.appspot.com",
    messagingSenderId: "166324756583",
    appId: "1:166324756583:web:83b7b8b1a927d50eb2b4c2",
    measurementId: "G-NW5EPL0VT7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const provider = new GoogleAuthProvider(app);
const auth = getAuth(app);
const db = getFirestore(app);
const rt = getDatabase(app);
// const signInWithEmail = signInWithEmailAndPassword(app);


export { auth, db };