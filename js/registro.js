console.log("Conectado :D");

const formulario = document.querySelector("#formulario");

formulario.addEventListener("submit", function(e){
    e.preventDefault();

    const pass = document.querySelector(".pass").value;
    const c_pass = document.querySelector(".c-pass").value; 

    if(pass != c_pass){
        alert("Las Contraseñas NO Coinciden. Intente de Nuevo.");
    }else{
        window.location="index.html"; 
    }
});