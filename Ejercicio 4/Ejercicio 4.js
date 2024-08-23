function ModoOscuro() {
    document.querySelector("body").classList.toggle("modo-oscuro");
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

    if (regex.test(nombre)) {
        alert("Error: El campo Nombre no debe contener números.");
        event.preventDefault(); // Evita el envío del formulario
        return false;
    }

    if (regex.test(apellido)) {
        alert("Error: El campo Apellido no debe contener números.");
        event.preventDefault(); // Evita el envío del formulario
        return false;
    }

    if (regex.test(pais)) {
        alert("Error: El campo Pais no debe contener números.");
        event.preventDefault(); // Evita el envío del formulario
        return false;
    }
    

    return true; // Permite el envío del formulario si no hay números en los campos
}