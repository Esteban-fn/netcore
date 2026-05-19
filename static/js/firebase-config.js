// ARRUMAR POIS ESTÁ ERRADO!


// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js"; // Liga o Firebase.
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js"; // Analytics do site.
import { getAuth } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js"; // Liga o sistema de login/autenticação.
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKB3YDyOli9OtFgebxqqneVSqhe4Pw6ic",
  authDomain: "topologias-8c184.firebaseapp.com",
  projectId: "topologias-8c184",
  storageBucket: "topologias-8c184.firebasestorage.app",
  messagingSenderId: "210640256865",
  appId: "1:210640256865:web:833abf1c4c8b13958f4f20",
  measurementId: "G-PGCVKKM23P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export { auth };