document.addEventListener('DOMContentLoaded', () => {
    // Inserta el contenido del nav y el footer solo si los elementos existen
    const navigatorElement = document.getElementById("navigator");
    if (navigatorElement) {
        navigatorElement.innerHTML = navBar();
    }

    const footerElement = document.getElementById("footer");
    if (footerElement) {
        footerElement.innerHTML = footer();
    }

    // Llama a la función que contiene la lógica para el formulario de suscripción
    checkSub();
    
    // Llama a la función para actualizar el contador del carrito
    renderCartCount();
});

function navBar() {
    return `
        <div class="container-fluid">
            <a class="navbar-brand" href="/index.html">
                <img src="/assets/img/logo.webp" alt="Bootstrap" height="40"> Ferretería Mapocho
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link " aria-current="page" href="/index.html">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/html/productos.html">Productos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/html/nosotros.html">Nosotros</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/html/blogs.html">Blogs</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/html/contacto.html">Contacto</a>
                    </li>
                </ul>
                <a href="/html/carrito.html" id="cart">
                    🛒
                    <span id="cuenta-carrito">0</span>
                </a>
            </div>
        </div>
    `;
}

function footer() {
    return `
        <div class="container">
            <div class="row align-items-center">

                <div class="col-md-6 mb-3 mb-md-0">
                    <div class="mb-2 fw-bold">ferreteriamapocho.com</div>
                </div>

                <div class="col-md-6 text-md-end">
                    <div class="mb-2">
                        Mantente informado!
                    </div>
                    <form class="d-flex justify-content-md-end" id="suscripcionForm">
                        <input type="email" class="form-control w-auto me-2" placeholder="Escribe tu correo" id="suscripcionEmail" required>
                        <button class="btn btn-dark" type="submit">Suscribete</button>
                    </form>
                </div>
            </div>
        </div>
    `;
}

// Nueva función para actualizar el contador del carrito
function renderCartCount() {
    const cuentaCarritoSpan = document.getElementById("cuenta-carrito");
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const totalItems = cart.reduce((sum, item) => sum + item.cantidad, 0);
    if (cuentaCarritoSpan) {
        cuentaCarritoSpan.innerText = totalItems;
    }
}

function checkSub(){
    // Asigna el evento al formulario de suscripción
    const suscripcionForm = document.getElementById('suscripcionForm');
    
    // Verifica si el formulario existe
    if (suscripcionForm) {
        suscripcionForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const emailInput = document.getElementById('suscripcionEmail');
            const email = emailInput.value;

            if (email && email.includes('@') && email.includes('.')) {
                alert(`¡Gracias por suscribirte con el correo: ${email}!`);
                emailInput.value = '';
            } else {
                alert('Por favor, introduce un correo electrónico válido.');
            }
        });
    }
}