// Import the functions you need from the SDKs you need

import firebase from "firebase";
import "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDaN7c6siBo8Gu9PYpGfvSRTwKsNPythPc",
  authDomain: "care-for-you-67ef9.firebaseapp.com",
  projectId: "care-for-you-67ef9",
  storageBucket: "care-for-you-67ef9.appspot.com",
  messagingSenderId: "530036575447",
  appId: "1:530036575447:web:b46b64ad44f04526dbb492",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;
