// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTpTwxJvllED74L5XZMY6-dPQlwP5LD84",
  authDomain: "netflixgpt-28daf.firebaseapp.com",
  projectId: "netflixgpt-28daf",
  storageBucket: "netflixgpt-28daf.appspot.com",
  messagingSenderId: "103182876288",
  appId: "1:103182876288:web:13d9703f7b473435bbf065",
  measurementId: "G-L6X4BEJF0X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();