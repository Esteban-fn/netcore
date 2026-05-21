// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyDKB3YDyOli9OtFgebxqqneVSqhe4Pw6ic",
  authDomain: "topologias-8c184.firebaseapp.com",
  projectId: "topologias-8c184",
  storageBucket: "topologias-8c184.firebasestorage.app",
  messagingSenderId: "210640256865",
  appId: "1:210640256865:web:833abf1c4c8b13958f4f20",
  measurementId: "G-PGCVKKM23P"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

// Exporta o auth para ser usado em outros arquivos
export { auth };