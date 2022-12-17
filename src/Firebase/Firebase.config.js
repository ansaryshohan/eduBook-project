// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXpOzq1FdVuOakEhgAWJl79lZAm298Kf0",
  authDomain: "edubook-assignment-10.firebaseapp.com",
  projectId: "edubook-assignment-10",
  storageBucket: "edubook-assignment-10.appspot.com",
  messagingSenderId: "1089252657053",
  appId: "1:1089252657053:web:9d808ad30b7545f0011174"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app