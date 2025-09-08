document.addEventListener('DOMContentLoaded', () => {
    // Toda la lógica que interactúa con el DOM debe ir aquí dentro
    const formRegistro = document.getElementById('formRegistro');

    // Verifica si el formulario existe antes de continuar
    if (formRegistro) {
        const mensajeRegistro = document.createElement('div');
        mensajeRegistro.style.marginTop = "10px";
        formRegistro.appendChild(mensajeRegistro);

        formRegistro.addEventListener('submit', function(e) {
            e.preventDefault();

            const correo = document.getElementById('email').value.trim();
            const confirmarCorreo = document.getElementById('confirmEmail').value.trim();
            const contraseña = document.getElementById('password').value;
            const confirmarContraseña = document.getElementById('confirmPassword').value;

            if (correo !== confirmarCorreo) {
                mensajeRegistro.textContent = "Los correos no coinciden";
                mensajeRegistro.style.color = "red";
                return;
            }

            if (!(correo.endsWith("@duocuc.cl") || correo.endsWith("@profesor.duocuc.cl"))) {
                mensajeRegistro.textContent = "Solo se permiten correos @duocuc.cl o @profesor.duocuc.cl";
                mensajeRegistro.style.color = "red";
                return;
            }

            if (contraseña !== confirmarContraseña) {
                mensajeRegistro.textContent = "Las contraseñas no coinciden";
                mensajeRegistro.style.color = "red";
                return;
            }

            let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

            if (usuarios.some(u => u.correo === correo)) {
                mensajeRegistro.textContent = "Este correo ya está registrado";
                mensajeRegistro.style.color = "red";
                return;
            }

            usuarios.push({ correo, contraseña });
            localStorage.setItem("usuarios", JSON.stringify(usuarios));

            mensajeRegistro.textContent = "Registro exitoso";
            mensajeRegistro.style.color = "green";

            setTimeout(() => {
                alert("¡Registro exitoso!");
                window.location.href = "/index.html";
            }, 500);

            formRegistro.reset();
        });
    }
});