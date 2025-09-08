document.addEventListener('DOMContentLoaded', () => {
    // ESCUCHA LOS BOTONES PARA AGREGAR AL CARRITO DESDE EL PREVIEW DEL PRODUCTO
    document.getElementById("productos").addEventListener('click', (e) => {
        if (e.target.classList.contains('add-to-cart')) {
            const productId = e.target.dataset.id;
            const product = productos.find(p => p.id == productId);

            if (product) {
                addToCart(product);
            }
        }
    });
    
    //RENDERIZA LOS PRODUCTOS
    document.getElementById("productos").innerHTML = renderProductos();
});
//FUNCIÓN PARA RENDERIZAR PRODUCTOS
function renderProductos() {
    let html = '';
    productos.forEach(producto => {
        html += `
            <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                <div class="card h-100 shadow-sm border-0">
                    <img src="${producto.imagen}" class="card-img-top p-3" alt="Producto">
                    <div class="card-body text-center">
                        <h5 class="card-title fw-bold mb-2">
                            <a href="producto.html?id=${producto.id}" class="text-decoration-none text-dark">${producto.nombre}</a>
                        </h5>
                        <p class="card-text text-muted small mb-2">${producto.descripcion}</p>
                        <p class="fw-bold fs-5 text-primary mb-3">$${producto.precio}</p>
                        <div class="d-grid gap-2">
                            <button class="btn btn-outline-primary btn-sm add-to-cart" data-id="${producto.id}">Agregar al carrito 🛒</button>
                            <a class="btn btn-dark btn-sm" href="producto.html?id=${producto.id}">Ver detalles</a>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });
    return html;
}

// FUNCIÓN PARA AGREGAR AL CARRITO
function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingItem = cart.find(item => item.id === product.id);

    if (existingItem) {
        existingItem.cantidad++;
    } else {
        cart.push({ ...product, cantidad: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    
    if (typeof renderCartCount !== 'undefined') {
        renderCartCount();
    }
    alert(`${product.nombre} ha sido añadido al carrito.`);
}