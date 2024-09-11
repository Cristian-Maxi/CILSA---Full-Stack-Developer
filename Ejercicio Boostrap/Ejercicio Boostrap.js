function ModoOscuro() {
    document.querySelector("body").classList.toggle("modo-oscuro");
    document.querySelector("h1").classList.toggle("modo-oscuro");
    document.querySelector("form").classList.toggle("modo-oscuro");
    document.querySelector(".boton button").classList.toggle("modo-oscuro")
    document.querySelectorAll("input").forEach(input => input.classList.toggle("modo-oscuro"));
    document.querySelector("#boton-oscuro").classList.toggle("modo-oscuro")
}

function ComprobarCampos(event) {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let pais = document.getElementById("pais").value;

    const regex = /\d/; // Expresión regular para buscar números
    let mensajeError = ""; // Variable para guardar el mensaje de error

    if (regex.test(nombre)) {
        mensajeError += "Error: El campo Nombre no debe contener números.\n";
    }

    if (regex.test(apellido)) {
        mensajeError += "Error: El campo Apellido no debe contener números.\n";
    }

    if (regex.test(pais)) {
        mensajeError += "Error: El campo País no debe contener números.\n";
    }

    // Si hay errores, mostramos el mensaje y prevenimos el envío
    if (mensajeError) {
        alert(mensajeError);
        event.preventDefault(); // Evita el envío del formulario
        return false;
    }

    return true; // Permite el envío del formulario si no hay números en los campos
}