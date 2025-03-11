import { initializeApp } from "firebase/app"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { getFirestore, doc, setDoc } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBAdaj6AItJ80QZP4Fj_8AcMK63S7Lf3qI",
    authDomain: "betbuttonappdb.firebaseapp.com",
    projectId: "betbuttonappdb",
    storageBucket: "betbuttonappdb.firebasestorage.app",
    messagingSenderId: "340173846898",
    appId: "1:340173846898:web:93de5961fa719c003f05eb",
    measurementId: "G-HPW28ZC4F7"
};

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)

export { auth, db, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, doc, setDoc }