// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-68a7a.firebaseapp.com",
  projectId: "mern-blog-68a7a",
  storageBucket: "mern-blog-68a7a.appspot.com",
  messagingSenderId: "597831382245",
  appId: "1:597831382245:web:a1d332e017691b066c900c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);