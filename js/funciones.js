
let infoPedido = [];
let info = {};

export const guardarDatos = (e) => {
    e.preventDefault();
    const doc = document.querySelector(".doc")
    const nom = document.querySelector(".nombres")
    const ape = document.querySelector(".apellidos")
    const tel = document.querySelector(".tel")
    const dir = document.querySelector(".direccion")
    const fecha = document.querySelector(".fecha")
    const hora = document.querySelector(".hora")
    const motivo = document.querySelector(".motivo")

    info = {
        "Documento: " : doc,
        "Nombres: " : nom,
        "Apellidos: " : ape,
        "Telefono: " : tel,
        "Direccion: " : dir,
        "Fecha: " : fecha,
        "Hora: " : hora,
        "Motivo: " : motivo
    }

    infoPedido.push(info);
    formulario.reset
}