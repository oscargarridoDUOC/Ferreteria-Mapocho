document.addEventListener('DOMContentLoaded', () => {
    const formContacto = document.getElementById("formContacto");

    formContacto.addEventListener('submit', function(e) {
        e.preventDefault();

        // Obtenemos los valores de los campos directamente
        const nombre = document.getElementById("nombreCompleto").value.trim();
        const correo = document.getElementById("correo").value.trim();
        const contenido = document.getElementById("contenido").value.trim();
        
        // VALIDACIÓN DE DATOS
        if (nombre === "" || correo === "" || contenido === "") {
            alert("Todos los campos son obligatorios. Por favor, completa el formulario.");
            return;
        }
        
        alert("¡Mensaje enviado correctamente!");
        formContacto.reset();
        window.location.href = "/index.html"; 
    });
});