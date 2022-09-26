// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgUmgs8jlVTkKvxroU7MFc0yq32bmXIu0",
  authDomain: "generatify.firebaseapp.com",
  projectId: "generatify",
  storageBucket: "generatify.appspot.com",
  messagingSenderId: "1085772655274",
  appId: "1:1085772655274:web:4ac61b09bbf14c4255fed3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const environment = {
  production: true
};
