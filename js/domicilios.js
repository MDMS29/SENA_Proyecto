import { 
    guardarDatos 
} from "./js/funciones.js";

const formulario = document.querySelector("#formulario");


formulario.addEventListener("submit", guardarDatos);