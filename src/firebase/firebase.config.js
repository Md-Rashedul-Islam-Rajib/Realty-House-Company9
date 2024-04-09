// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJfJ-uMxINbHdMhXuOGuhd12f48cRJ5_k",
  authDomain: "assignment-9-a08cd.firebaseapp.com",
  projectId: "assignment-9-a08cd",
  storageBucket: "assignment-9-a08cd.appspot.com",
  messagingSenderId: "1042344365827",
  appId: "1:1042344365827:web:5fb722e2faa9a06f882336"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;