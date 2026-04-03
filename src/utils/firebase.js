// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGLnD2U4QUklQkGe3CSyKkntpNFLMfirs",
  authDomain: "cart-ee6e1.firebaseapp.com",
  projectId: "cart-ee6e1",
  storageBucket: "cart-ee6e1.firebasestorage.app",
  messagingSenderId: "527220725688",
  appId: "1:527220725688:web:aaf92f4fd188df6db2214d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();