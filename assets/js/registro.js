document.addEventListener('DOMContentLoaded', () => {
    const formRegistro = document.getElementById('formRegistro');

    if (formRegistro) {
        const mensajeRegistro = document.createElement('div');
        formRegistro.appendChild(mensajeRegistro);

        formRegistro.addEventListener('submit', function(e) {
            e.preventDefault();

            const correo = document.getElementById('email').value.trim();
            const confirmarCorreo = document.getElementById('confirmEmail').value.trim();
            const contraseña = document.getElementById('password').value;
            const confirmarContraseña = document.getElementById('confirmPassword').value;

            const errores = [];
            
            // VALIDACION DEL FORMULARIO
            if (correo !== confirmarCorreo) {
                errores.push("Los correos no coinciden.");
            }

            if (!(correo.endsWith("@duocuc.cl") || correo.endsWith("@profesor.duocuc.cl"))) {
                errores.push("Solo se permiten correos @duocuc.cl o @profesor.duocuc.cl.");
            }

            if (contraseña !== confirmarContraseña) {
                errores.push("Las contraseñas no coinciden.");
            }

            let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

            if (usuarios.some(u => u.correo === correo)) {
                errores.push("Este correo ya está registrado.");
            }

            // NO RETORNA NADA CUANDO HAY ERRORES
            if (errores.length > 0) {
                mensajeRegistro.textContent = errores.join(" ");
                mensajeRegistro.style.color = "red";
                return;
            }

            // REGISTRA CUANDO NO HAY ERRORES
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