// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBVZko0G74lH9JnlNnm-atJf6h5_yGn-cE",
  authDomain: "task1-cloud.firebaseapp.com",
  projectId: "task1-cloud",
  storageBucket: "task1-cloud.firebasestorage.app",
  messagingSenderId: "1068394509339",
  appId: "1:1068394509339:web:a8e04446d299ab8b8334be",
  measurementId: "G-WKC4YWY7WW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const DB = getFirestore(app);

export default DB;