//console.log("hello world!")

//alert("hello world!")

//var nome = "nicolas"
//let nome = "nicolas"


//const nome = "nicolas"


const CampoSenha = document.getElementById("senha");
const CampoSenha = document.querySelector("#mostrar-senha");



btnSenha.addEventListener("click", Function()  {


    if(CampoSenha.type == "password"){
    CampoSenha.type = "text";
}
    else {
    CampoSenha.type = "password";
}
})


console.log("senha");