// login-script.js
import { auth } from "./firebase-config.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

let formulario = document.getElementById('meuFormulario');

formulario.addEventListener('submit', function(event) {
    event.preventDefault();

    let email = document.getElementById('usuario').value;
    let senha = document.getElementById('senha').value;

    // Função do Firebase para autenticar
    signInWithEmailAndPassword(auth, email, senha)
      .then((userCredential) => {
          // Login bem-sucedido
          const user = userCredential.user;
          console.log("Conectado como:", user.email);
          alert("Acesso autorizado! Conectando à rede...");
          window.location.href = "dashboard.html"; 
      })
      .catch((error) => {
          // Erro no login (senha errada, usuário não existe, etc)
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error("Erro ao conectar:", errorCode, errorMessage);
          
          alert("Falha na autenticação: Verifique suas credenciais.");
      });
});