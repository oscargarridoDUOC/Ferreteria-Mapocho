document.addEventListener('DOMContentLoaded', () => {
    const formLogin = document.getElementById('formLogin');
    
    if (!formLogin) {
        console.error('El formulario con ID "formLogin" no fue encontrado.');
        return;
    }

    const mensajeLogin = document.createElement('div');
    mensajeLogin.style.marginTop = "10px";
    formLogin.appendChild(mensajeLogin);

    formLogin.addEventListener('submit', function(e) {
        e.preventDefault();

        const correo = document.getElementById('email').value.trim();
        const contraseña = document.getElementById('password').value;

        const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

        const usuario = usuarios.find(u => u.correo === correo && u.contraseña === contraseña);

        if (usuario) {
            // Muestra el mensaje en la página
            mensajeLogin.textContent = "¡Has iniciado sesión exitosamente!";
            mensajeLogin.style.color = "green";

            // Muestra la alerta y luego redirige
            setTimeout(() => {
                alert("¡Has iniciado sesión exitosamente!");
                window.location.href = "/index.html"; // Asegúrate de que esta ruta sea correcta
            }, 500);
        } else {
            mensajeLogin.textContent = "Usuario o contraseña incorrecta";
            mensajeLogin.style.color = "red";
        }
    });
});