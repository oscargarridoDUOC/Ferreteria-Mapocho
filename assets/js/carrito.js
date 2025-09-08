// Cargar carrito desde localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartItemsContainer = document.getElementById("cart-container");
const cartTotalUnidades = document.getElementById("cantidad");
const cartTotalFinal = document.getElementById("total-final");
const carritoVacio = document.getElementById("carrito-vacio");
const btnComprar = document.getElementById("btn-pagar");
const btnReiniciar = document.getElementById("reiniciar");

// Renderizar carrito
function renderCart() {
    if (!cartItemsContainer) return;

    cartItemsContainer.innerHTML = "";
    let totalUnidades = 0;
    let totalFinal = 0;

    if (cart.length === 0) {
        if (carritoVacio) carritoVacio.style.display = 'block';
        if (btnComprar) btnComprar.disabled = true;
    } else {
        if (carritoVacio) carritoVacio.style.display = 'none';
        if (btnComprar) btnComprar.disabled = false;
        cart.forEach(item => {
            const itemHTML = `
                <div class="list-group-item d-flex align-items-center mb-3 p-3 border rounded">
                    <img src="${item.imagen}" class="img-fluid rounded me-4" style="width: 100px; height: 100px; object-fit: cover;" alt="${item.nombre}">
                    <div class="flex-grow-1">
                        <h5 class="fw-bold mb-1">${item.nombre}</h5>
                        <p class="mb-1 text-muted">${item.descripcion}</p>
                        <span class="text-success fw-bold">$${item.precio}</span>
                    </div>
                    <div class="d-flex align-items-center">
                        <button class="btn btn-sm btn-outline-secondary me-2 decrease-btn" data-id="${item.id}">-</button>
                        <span class="cantidad fw-bold me-2">${item.cantidad}</span>
                        <button class="btn btn-sm btn-outline-secondary increase-btn" data-id="${item.id}">+</button>
                        <button class="btn btn-sm btn-danger ms-3 remove-btn" data-id="${item.id}">X</button>
                    </div>
                </div>
            `;
            cartItemsContainer.innerHTML += itemHTML;
            totalUnidades += item.cantidad;
            totalFinal += parseFloat(item.precio) * item.cantidad; // Aquí se corrigió el problema
        });
    }

    if (cartTotalUnidades) cartTotalUnidades.innerText = totalUnidades;
    if (cartTotalFinal) cartTotalFinal.innerText = totalFinal.toLocaleString();

    // Actualiza el contador del carrito en el navbar
    renderCartCount();
}

// Lógica de manipulación del carrito
if (cartItemsContainer) {
    cartItemsContainer.addEventListener('click', (e) => {
        const target = e.target;
        if (target.classList.contains('remove-btn')) {
            const id = target.getAttribute('data-id');
            removeItem(id);
        }
        if (target.classList.contains('increase-btn')) {
            const id = target.getAttribute('data-id');
            updateQuantity(id, 1);
        }
        if (target.classList.contains('decrease-btn')) {
            const id = target.getAttribute('data-id');
            updateQuantity(id, -1);
        }
    });
}

function updateQuantity(id, change) {
    const item = cart.find(p => p.id == id);
    if (item) {
        item.cantidad += change;
        if (item.cantidad <= 0) {
            removeItem(id);
        } else {
            localStorage.setItem("cart", JSON.stringify(cart));
            renderCart();
            if (typeof renderCartCount !== 'undefined') {
                renderCartCount();
            }
        }
    }
}

function removeItem(id) {
    cart = cart.filter(p => p.id != id);
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
    if (typeof renderCartCount !== 'undefined') {
        renderCartCount();
    }
}

// Botones de control
if (btnComprar) {
    btnComprar.addEventListener("click", () => {
        alert("Compra realizada con éxito! ✅");
        cart = [];
        localStorage.removeItem("cart");
        window.location.href = "/index.html"; 
        renderCart();
        if (typeof renderCartCount !== 'undefined') {
            renderCartCount();
        }
    });
}

if (btnReiniciar) {
    btnReiniciar.addEventListener("click", () => {
        cart = [];
        localStorage.removeItem("cart");
        renderCart();
        if (typeof renderCartCount !== 'undefined') {
            renderCartCount();
        }
    });
}


// Renderizar carrito al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    if (window.location.pathname.includes('/html/carrito.html')) {
        renderCart();
        if (typeof renderCartCount !== 'undefined') {
            renderCartCount();
        }
    }
});