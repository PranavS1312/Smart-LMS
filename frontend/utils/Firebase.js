import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY ,
  authDomain: "smart-lms-69290.firebaseapp.com",
  projectId: "smart-lms-69290",
  storageBucket: "smart-lms-69290.firebasestorage.app",
  messagingSenderId: "112426809433",
  appId: "1:112426809433:web:a82959b6c2f8ca95f39948"
 
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
export {auth,provider}