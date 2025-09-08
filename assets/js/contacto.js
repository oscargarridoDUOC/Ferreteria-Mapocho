document.addEventListener('DOMContentLoaded', () => {
    const formContacto = document.getElementById("formContacto");

    formContacto.addEventListener('submit', function(e) {
        e.preventDefault(); // Evita que el formulario se envíe automáticamente

        let nombre = document.getElementById("nombreCompleto").value;
        let correo = document.getElementById("correo").value;
        let contenido = document.getElementById("contenido").value;

        // Validaciones
        const esNombreValido = validarFull("nombre", nombre);
        const esCorreoValido = validarFull("correo", correo);
        const esContenidoValido = validarFull("contenido", contenido);

        if (esNombreValido && esCorreoValido && esContenidoValido) {
            alert("¡Mensaje enviado correctamente!");
            formContacto.reset(); // Limpia el formulario
            window.location.href = "/index.html"; // Asegúrate de que esta ruta sea correcta
        }
    });
});


function validarFull(atributo, valor) {
    if (validarCampos(valor)) {
        return true;
    } else {
        alert(`El campo ${atributo} está vacío.`);
        return false;
    }
}

function validarCampos(texto) {
    return texto.trim() !== "";
}