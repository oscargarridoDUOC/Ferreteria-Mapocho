document.addEventListener('DOMContentLoaded', function() {
    renderProducto();

    // Evento para el botón de 'Añadir al carrito'
    const addToCartButton = document.getElementById("btn-add-to-cart");

    if (addToCartButton) {
        addToCartButton.addEventListener('click', () => {
            const urlParams = new URLSearchParams(window.location.search);
            const productoId = urlParams.get('id');
            
            // Suponiendo que el array 'productos' está cargado globalmente
            const productoEncontrado = productos.find(p => p.id == productoId);

            if (productoEncontrado) {
                addToCart(productoEncontrado);
                alert(`${productoEncontrado.nombre} ha sido añadido al carrito.`);
            } else {
                alert("Producto no encontrado.");
            }
        });
    }
});

function renderProducto() {
    const urlParams = new URLSearchParams(window.location.search);
    const productoId = urlParams.get('id');

    const productoEncontrado = productos.find(p => p.id == productoId);

    if (productoEncontrado) {
        document.getElementById("tituloProducto").innerText = productoEncontrado.nombre;
        document.getElementById("descripcionProducto").innerText = productoEncontrado.descripcion;
        document.getElementById("precioProducto").innerText = `$${productoEncontrado.precio.toLocaleString()}`;

        const carouselInner = document.getElementById("carousel-imagenes");
        carouselInner.innerHTML = ''; // Limpia el carrusel antes de llenarlo

        productoEncontrado.imagenes.forEach((imagenUrl, index) => {
            const carouselItem = document.createElement('div');
            carouselItem.className = `carousel-item h-100 ${index === 0 ? 'active' : ''}`;
            carouselItem.innerHTML = `<img src="${imagenUrl}" class="d-block mx-auto h-100" alt="Producto ${productoEncontrado.nombre}" style="object-fit: contain;">`;
            carouselInner.appendChild(carouselItem);
        });
        
    } else {
        document.getElementById("tituloProducto").innerText = "Producto no encontrado";
        document.getElementById("descripcionProducto").innerText = "";
        document.getElementById("precioProducto").innerText = "";
        document.getElementById("carousel-imagenes").innerHTML = "";
    }
}

// Función para agregar al carrito
function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingItem = cart.find(item => item.id === product.id);

    if (existingItem) {
        existingItem.cantidad++;
    } else {
        const numericPrice = parseInt(product.precio);
        cart.push({ ...product, cantidad: 1, precio: numericPrice });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    // Llama a la función de tu navFooter para actualizar el contador
    if (typeof renderCartCount !== 'undefined') {
        renderCartCount();
    }
}