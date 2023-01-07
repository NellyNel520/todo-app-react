// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYZAwABXrtULjo5W_FJNq1BBKUgrr5yXg",
  authDomain: "todo-app-b571f.firebaseapp.com",
  projectId: "todo-app-b571f",
  storageBucket: "todo-app-b571f.appspot.com",
  messagingSenderId: "1013075752196",
  appId: "1:1013075752196:web:a3052512aceefb27358c51",
  measurementId: "G-VFPRWK2WHV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)