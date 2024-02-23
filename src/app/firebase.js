// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDzsfs_TFg3f2yQ2LMecu4m1I14TIjTXGY",
    authDomain: "godfather-f9173.firebaseapp.com",
    projectId: "godfather-f9173",
    storageBucket: "godfather-f9173.appspot.com",
    messagingSenderId: "853816095397",
    appId: "1:853816095397:web:d46105bb7b459c7068d34c",
    measurementId: "G-QP3CJ5ESMJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);