const campoSenha = document.getElementById("senha");
const btnSenha = document.querySelector("#mostrar-senha");

btnSenha.addEventListener("click", function () {

    campoSenha.type = campoSenha.type === "password" ? "text" : "password";

})