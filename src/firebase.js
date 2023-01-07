// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACQm3sEfO5O0ffhLpNYnnRNqgaS99pulk",
  authDomain: "todo-app-9b429.firebaseapp.com",
  projectId: "todo-app-9b429",
  storageBucket: "todo-app-9b429.appspot.com",
  messagingSenderId: "986685832847",
  appId: "1:986685832847:web:fb4f63c20dbbc361ab7afa",
  measurementId: "G-75KC8J1RCT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);