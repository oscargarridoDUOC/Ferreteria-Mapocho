document.addEventListener('DOMContentLoaded', () => {
    // ESCUCHA LOS CAMPOS
    const formLogin = document.getElementById('formLogin');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    if (!formLogin || !emailInput || !passwordInput) {
        console.error('Uno o más elementos del formulario no fueron encontrados. Revisa los ID.');
        return;
    }

    // VALIDACIÓN DE INICIO DE SESIÓN
    const mensajeLogin = document.createElement('div');
    mensajeLogin.className = 'mt-2 text-center';
    formLogin.appendChild(mensajeLogin);

    formLogin.addEventListener('submit', (e) => {
        e.preventDefault();

        // RECOPILA LOS DATOS
        const correo = emailInput.value.trim();
        const contraseña = passwordInput.value;

        mensajeLogin.textContent = '';
        mensajeLogin.style.color = '';

        // OBTIENE LOS USUARIO REGISTRADOS
        const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

        // BUSCAR COINCIDENCIA CON USUARIOS REGISTRADOS
        const usuario = usuarios.find(u => u.correo === correo && u.contraseña === contraseña);

        if (usuario) {
            mensajeLogin.textContent = '¡Has iniciado sesión exitosamente! 🎉';
            mensajeLogin.style.color = 'green';
            
            // REDIRIGE AL USUARIO
            setTimeout(() => {
                alert('¡Has iniciado sesión exitosamente!');
                window.location.href = '/index.html';
            }, 500);
        } else {
            mensajeLogin.textContent = 'Usuario o contraseña incorrecta 😞';
            mensajeLogin.style.color = 'red';
        }
    });
});