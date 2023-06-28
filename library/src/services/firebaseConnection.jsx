// Import the functions you need from the SDKs you need
// Instalar npm install firebase
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQ5_gBMLU8upK_rjZqphTadHpF5OnbFy4",
  authDomain: "illusionslibrary.firebaseapp.com",
  projectId: "illusionslibrary",
  storageBucket: "illusionslibrary.appspot.com",
  messagingSenderId: "172043982714",
  appId: "1:172043982714:web:5762c04c8fe559e14ca8c3"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp)
export {db}