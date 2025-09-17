// INICIALIZACIÓN DE LAS FUNCIONES
document.addEventListener("DOMContentLoaded", () => {
    initEventListeners();
    renderCart();
});
// CARGA EL CARRITO DESDE EL LOCALSTORAGE O LISTA VACIA
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// BUSCA LOS ELEMENTO YA CARGADOS PARA NO REPETIR
const dom = {
    cartItemsContainer: document.getElementById("cart-container"),
    cartTotalUnidades: document.getElementById("cantidad"),
    cartTotalFinal: document.getElementById("total-final"),
    carritoVacio: document.getElementById("carrito-vacio"),
    btnComprar: document.getElementById("btn-pagar"),
    btnReiniciar: document.getElementById("reiniciar"),
};

//RENDERIZA LOS PRODUCTOS DEL CARRITO Y ACTUALIZA EL RESUMEN
function renderCart() {
    if (!dom.cartItemsContainer) return;

    // LOGICA PARA MOSTRAR CUANDO EL CARRO ESTÁ VACÍO O NO
    const isCartEmpty = cart.length === 0;
    dom.carritoVacio.style.display = isCartEmpty ? 'block' : 'none';
    dom.btnComprar.disabled = isCartEmpty;

    let totalUnidades = 0;
    let totalFinal = 0;

    if (!isCartEmpty) {
        dom.cartItemsContainer.innerHTML = cart.map(item => {
            totalUnidades += item.cantidad;
            totalFinal += parseFloat(item.precio) * item.cantidad;
            return `
                <div class="list-group-item d-flex align-items-center mb-3 p-3 border rounded">
                    <div class="imagen-contenedor me-4">
                        <img src="${item.imagen}" class="img-fluid rounded ratio ratio-1x1 object-fit-cover" alt="${item.nombre}">
                    </div>
                    
                    <div class="flex-grow-1">
                        <h5 class="fw-bold mb-1">${item.nombre}</h5>
                        <p class="mb-1 text-muted">${item.descripcion}</p>
                        <span class="text-success fw-bold">$${item.precio.toLocaleString('es-CL')}</span>
                    </div>
                    <div class="d-flex align-items-center">
                        <button class="btn btn-sm btn-outline-secondary me-2 decrease-btn" data-id="${item.id}">-</button>
                        <span class="cantidad fw-bold me-2">${item.cantidad}</span>
                        <button class="btn btn-sm btn-outline-secondary increase-btn" data-id="${item.id}">+</button>
                        <button class="btn btn-sm btn-danger ms-3 remove-btn" data-id="${item.id}">X</button>
                    </div>
                </div>
            `;
        }).join('');
    } else {
        dom.cartItemsContainer.innerHTML = '';
    }

    dom.cartTotalUnidades.innerText = totalUnidades;
    dom.cartTotalFinal.innerText = totalFinal.toLocaleString('es-CL');
    // ACTUALIZA EL CARRITO DEL NAVBAR
    if (typeof renderCartCount === 'function') {
        renderCartCount();
    }
}
// LOGICA DE LOS BOTONES CARRITO
function handleCartAction(e) {
    const btn = e.target.closest('button');
    if (!btn) return;

    const id = btn.getAttribute('data-id');
    let item = cart.find(p => p.id == id);

    if (!item) return;

    if (btn.classList.contains('remove-btn')) {
        // BORRAR ITEM
        cart = cart.filter(p => p.id != id);
    } else if (btn.classList.contains('increase-btn')) {
        // AUMENTAR CANTIDAD
        item.cantidad += 1;
    } else if (btn.classList.contains('decrease-btn')) {
        // DISMINUIR CANTIDAD
        item.cantidad -= 1;
        // SI LLEGA CANTIDAD A 0, BORRA ITEM
        if (item.cantidad <= 0) {
            cart = cart.filter(p => p.id != id);
        }
    }

    // GUARDA EL CARRITO EN EL LOCAL STORAGE
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
}

// FUNCION DE ESCUCHA
function initEventListeners() {
    if (dom.cartItemsContainer) {
        dom.cartItemsContainer.addEventListener('click', handleCartAction);
    }
    //BOTON DE COMPRA
    if (dom.btnComprar) {
        dom.btnComprar.addEventListener("click", () => {
            alert("Compra realizada con éxito! ✅");
            cart = [];
            localStorage.removeItem("cart");
            window.location.href = "/index.html"; 
        });
    }
    //REINCIA EL CARRITO
    if (dom.btnReiniciar) {
        dom.btnReiniciar.addEventListener("click", () => {
            cart = [];
            localStorage.removeItem("cart");
            renderCart();
        });
    }
}