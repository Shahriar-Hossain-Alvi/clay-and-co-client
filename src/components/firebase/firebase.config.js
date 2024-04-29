// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBw1FdIMGEZdz6y0foouxSuJ698Hj09Hpo",
  authDomain: "clay-and-co.firebaseapp.com",
  projectId: "clay-and-co",
  storageBucket: "clay-and-co.appspot.com",
  messagingSenderId: "426928004802",
  appId: "1:426928004802:web:cecda4cc7776a47fc1e55b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;