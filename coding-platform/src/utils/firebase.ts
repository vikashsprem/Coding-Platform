// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDLGrNIhgdxgZ7T_m-Nq7ACEnATzi4DlGg",
    authDomain: "coding-platform-5b8b3.firebaseapp.com",
    projectId: "coding-platform-5b8b3",
    storageBucket: "coding-platform-5b8b3.appspot.com",
    messagingSenderId: "441410257074",
    appId: "1:441410257074:web:1c34e890fa6d8ab5cd89ab",
    measurementId: "G-HCHL20XZ0D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);