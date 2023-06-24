// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBL-WYZJkqrtocom49lXiJhfKQAXXN9q84",
  authDomain: "blogpost-de454.firebaseapp.com",
  projectId: "blogpost-de454",
  storageBucket: "blogpost-de454.appspot.com",
  messagingSenderId: "313184965631",
  appId: "1:313184965631:web:ec211fadbca60af5988dca",
  measurementId: "G-ZMZYDHFD9N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
// export const analytics = getAnalytics(app);