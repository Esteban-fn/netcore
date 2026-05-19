import { auth } from "./firebase-config.js"; // “pega o auth do outro arquivo”


console.log(auth);








let formulario = document.getElementById('meuFormulario'); // “JS, pega o form que tem esse id: meuFormulario”

formulario.addEventListener('submit', function(event) { // “JS, quando o formulário for enviado, faça isso”
    event.preventDefault(); // Sem isso a página recarrega e você perde os dados”

let usuario = document.getElementById('usuario').value; // “JS, pega o campo de usuário”
let senha = document.getElementById('senha').value; // “JS, pega o campo de senha”

    console.log(usuario)
    console.log(senha)

})