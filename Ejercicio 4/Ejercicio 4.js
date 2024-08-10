function ModoOscuro() {
    document.querySelector("body").classList.toggle("modo-oscuro");
    document.querySelector("form").classList.toggle("modo-oscuro");
    document.querySelector(".boton button").classList.toggle("modo-oscuro")
    document.querySelectorAll("input").forEach(input => input.classList.toggle("modo-oscuro"));
    document.querySelector("#boton-oscuro").classList.toggle("modo-oscuro")
}