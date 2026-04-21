let total = 0;

// función aritmética
function sumar(precio) {
    total = total + precio;
    document.getElementById("total").innerText = total;
}

// validación simple
function validar() {
    let nombre = document.getElementById("nombre").value;

    if (nombre === "") {
        alert("Ingrese su nombre");
        return false;
    }
}