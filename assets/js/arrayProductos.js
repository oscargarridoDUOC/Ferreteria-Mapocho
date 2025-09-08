// ARRAY CON LOS PRODUCTOS Y SUS ATRIBUTOS
const productos = [
    {
        id: 1,
        nombre: "Taladro Percutor",
        descripcion: "Taladro eléctrico de 550W ideal para perforar mampostería, hormigón y metal.",
        precio: 35990,
        imagen: "https://www.easy.cl/_next/image?url=https%3A%2F%2Feasycl.vteximg.com.br%2Farquivos%2Fids%2F4898742%2F1397398-0000-001.jpg%3Fv%3D638737164699500000&w=640&q=75",
        imagenes: [
            "https://www.easy.cl/_next/image?url=https%3A%2F%2Feasycl.vteximg.com.br%2Farquivos%2Fids%2F4898742%2F1397398-0000-001.jpg%3Fv%3D638737164699500000&w=640&q=75",
            "https://www.easy.cl/_next/image?url=https%3A%2F%2Feasycl.vteximg.com.br%2Farquivos%2Fids%2F4898750%2F1397398-0000-002.jpg%3Fv%3D638785292396530000&w=640&q=75",
            "https://www.easy.cl/_next/image?url=https%3A%2F%2Feasycl.vteximg.com.br%2Farquivos%2Fids%2F4898742%2F1397398-0000-001.jpg%3Fv%3D638737164699500000&w=640&q=75"
        ]
    },
    {
        id: 2,
        nombre: "Kit de Herramientas 52 pcs",
        descripcion: "Maletín de 52 piezas con alicates, destornilladores y llaves. Ideal para reparaciones domésticas.",
        precio: 25490,
        imagen: "https://www.easy.cl/_next/image?url=https%3A%2F%2Feasycl.vteximg.com.br%2Farquivos%2Fids%2F4898742%2F1397398-0000-001.jpg%3Fv%3D638737164699500000&w=640&q=75",
        imagenes: [
            "https://www.easy.cl/_next/image?url=https%3A%2F%2Feasycl.vteximg.com.br%2Farquivos%2Fids%2F4898742%2F1397398-0000-001.jpg%3Fv%3D638737164699500000&w=640&q=75",
            "https://www.easy.cl/_next/image?url=https%3A%2F%2Feasycl.vteximg.com.br%2Farquivos%2Fids%2F4898750%2F1397398-0000-002.jpg%3Fv%3D638785292396530000&w=640&q=75",
            "https://www.easy.cl/_next/image?url=https%3A%2F%2Feasycl.vteximg.com.br%2Farquivos%2Fids%2F4898742%2F1397398-0000-001.jpg%3Fv%3D638737164699500000&w=640&q=75"
        ]
    },
    {
        id: 3,
        nombre: "Esmeril Angular 820W",
        descripcion: "Herramienta de uso profesional para desbaste y corte de metales.",
        precio: 49990,
        imagen: "https://www.easy.cl/_next/image?url=https%3A%2F%2Feasycl.vteximg.com.br%2Farquivos%2Fids%2F4898742%2F1397398-0000-001.jpg%3Fv%3D638737164699500000&w=640&q=75",
        imagenes: [
            "https://www.easy.cl/_next/image?url=https%3A%2F%2Feasycl.vteximg.com.br%2Farquivos%2Fids%2F4898742%2F1397398-0000-001.jpg%3Fv%3D638737164699500000&w=640&q=75",
            "https://www.easy.cl/_next/image?url=https%3A%2F%2Feasycl.vteximg.com.br%2Farquivos%2Fids%2F4898750%2F1397398-0000-002.jpg%3Fv%3D638785292396530000&w=640&q=75",
            "https://www.easy.cl/_next/image?url=https%3A%2F%2Feasycl.vteximg.com.br%2Farquivos%2Fids%2F4898742%2F1397398-0000-001.jpg%3Fv%3D638737164699500000&w=640&q=75"
        ]
    },
    {
        id: 4,
        nombre: "Sierra Circular",
        descripcion: "Sierra eléctrica de 1200W, ideal para cortes precisos en madera y tableros.",
        precio: 52990,
        imagen: "https://www.easy.cl/_next/image?url=https%3A%2F%2Feasycl.vteximg.com.br%2Farquivos%2Fids%2F4898742%2F1397398-0000-001.jpg%3Fv%3D638737164699500000&w=640&q=75",
        imagenes: [
            "https://www.easy.cl/_next/image?url=https%3A%2F%2Feasycl.vteximg.com.br%2Farquivos%2Fids%2F4898742%2F1397398-0000-001.jpg%3Fv%3D638737164699500000&w=640&q=75",
            "https://www.easy.cl/_next/image?url=https%3A%2F%2Feasycl.vteximg.com.br%2Farquivos%2Fids%2F4898750%2F1397398-0000-002.jpg%3Fv%3D638785292396530000&w=640&q=75",
            "https://www.easy.cl/_next/image?url=https%3A%2F%2Feasycl.vteximg.com.br%2Farquivos%2Fids%2F4898742%2F1397398-0000-001.jpg%3Fv%3D638737164699500000&w=640&q=75"
        ]
    },
    {
        id: 5,
        nombre: "Lijadora Orbital",
        descripcion: "Lijadora para acabados finos en superficies de madera y metal.",
        precio: 38990,
        imagen: "https://www.easy.cl/_next/image?url=https%3A%2F%2Feasycl.vteximg.com.br%2Farquivos%2Fids%2F4898742%2F1397398-0000-001.jpg%3Fv%3D638737164699500000&w=640&q=75",
        imagenes: [
            "https://www.easy.cl/_next/image?url=https%3A%2F%2Feasycl.vteximg.com.br%2Farquivos%2Fids%2F4898742%2F1397398-0000-001.jpg%3Fv%3D638737164699500000&w=640&q=75",
            "https://www.easy.cl/_next/image?url=https%3A%2F%2Feasycl.vteximg.com.br%2Farquivos%2Fids%2F4898750%2F1397398-0000-002.jpg%3Fv%3D638785292396530000&w=640&q=75",
            "https://www.easy.cl/_next/image?url=https%3A%2F%2Feasycl.vteximg.com.br%2Farquivos%2Fids%2F4898742%2F1397398-0000-001.jpg%3Fv%3D638737164699500000&w=640&q=75"
        ]
    },
    {
        id: 6,
        nombre: "Set de Destornilladores 10 pcs",
        descripcion: "Juego de 10 destornilladores de precisión para electrónica y hogar.",
        precio: 7990,
        imagen: "https://www.easy.cl/_next/image?url=https%3A%2F%2Feasycl.vteximg.com.br%2Farquivos%2Fids%2F4898742%2F1397398-0000-001.jpg%3Fv%3D638737164699500000&w=640&q=75",
        imagenes: [
            "https://www.easy.cl/_next/image?url=https%3A%2F%2Feasycl.vteximg.com.br%2Farquivos%2Fids%2F4898742%2F1397398-0000-001.jpg%3Fv%3D638737164699500000&w=640&q=75",
            "https://www.easy.cl/_next/image?url=https%3A%2F%2Feasycl.vteximg.com.br%2Farquivos%2Fids%2F4898750%2F1397398-0000-002.jpg%3Fv%3D638785292396530000&w=640&q=75",
            "https://www.easy.cl/_next/image?url=https%3A%2F%2Feasycl.vteximg.com.br%2Farquivos%2Fids%2F4898742%2F1397398-0000-001.jpg%3Fv%3D638737164699500000&w=640&q=75"
        ]
    },
    {
        id: 7,
        nombre: "Amoladora Eléctrica",
        descripcion: "Amoladora de banco de 150W para afilar herramientas y lijar objetos.",
        precio: 42990,
        imagen: "https://www.easy.cl/_next/image?url=https%3A%2F%2Feasycl.vteximg.com.br%2Farquivos%2Fids%2F4898742%2F1397398-0000-001.jpg%3Fv%3D638737164699500000&w=640&q=75",
        imagenes: [
            "https://www.easy.cl/_next/image?url=https%3A%2F%2Feasycl.vteximg.com.br%2Farquivos%2Fids%2F4898742%2F1397398-0000-001.jpg%3Fv%3D638737164699500000&w=640&q=75",
            "https://www.easy.cl/_next/image?url=https%3A%2F%2Feasycl.vteximg.com.br%2Farquivos%2Fids%2F4898750%2F1397398-0000-002.jpg%3Fv%3D638785292396530000&w=640&q=75",
            "https://www.easy.cl/_next/image?url=https%3A%2F%2Feasycl.vteximg.com.br%2Farquivos%2Fids%2F4898742%2F1397398-0000-001.jpg%3Fv%3D638737164699500000&w=640&q=75"
        ]
    },
    {
        id: 8,
        nombre: "Nivel de Burbuja Magnético",
        descripcion: "Nivel de 60 cm con base magnética, ideal para trabajos de plomería y construcción.",
        precio: 12500,
        imagen: "https://www.easy.cl/_next/image?url=https%3A%2F%2Feasycl.vteximg.com.br%2Farquivos%2Fids%2F4898742%2F1397398-0000-001.jpg%3Fv%3D638737164699500000&w=640&q=75",
        imagenes: [
            "https://www.easy.cl/_next/image?url=https%3A%2F%2Feasycl.vteximg.com.br%2Farquivos%2Fids%2F4898742%2F1397398-0000-001.jpg%3Fv%3D638737164699500000&w=640&q=75",
            "https://www.easy.cl/_next/image?url=https%3A%2F%2Feasycl.vteximg.com.br%2Farquivos%2Fids%2F4898750%2F1397398-0000-002.jpg%3Fv%3D638785292396530000&w=640&q=75",
            "https://www.easy.cl/_next/image?url=https%3A%2F%2Feasycl.vteximg.com.br%2Farquivos%2Fids%2F4898742%2F1397398-0000-001.jpg%3Fv%3D638737164699500000&w=640&q=75"
        ]
    },
    {
        id: 9,
        nombre: "Cinta Métrica 5m",
        descripcion: "Cinta métrica de 5 metros con carcasa de goma antideslizante.",
        precio: 5990,
        imagen: "https://www.easy.cl/_next/image?url=https%3A%2F%2Feasycl.vteximg.com.br%2Farquivos%2Fids%2F4898742%2F1397398-0000-001.jpg%3Fv%3D638737164699500000&w=640&q=75",
        imagenes: [
            "https://www.easy.cl/_next/image?url=https%3A%2F%2Feasycl.vteximg.com.br%2Farquivos%2Fids%2F4898742%2F1397398-0000-001.jpg%3Fv%3D638737164699500000&w=640&q=75",
            "https://www.easy.cl/_next/image?url=https%3A%2F%2Feasycl.vteximg.com.br%2Farquivos%2Fids%2F4898750%2F1397398-0000-002.jpg%3Fv%3D638785292396530000&w=640&q=75",
            "https://www.easy.cl/_next/image?url=https%3A%2F%2Feasycl.vteximg.com.br%2Farquivos%2Fids%2F4898742%2F1397398-0000-001.jpg%3Fv%3D638737164699500000&w=640&q=75"
        ]
    },
    {
        id: 10,
        nombre: "Pistola de Silicona",
        descripcion: "Pistola aplicadora de silicona para sellado y reparación.",
        precio: 15990,
        imagen: "https://www.easy.cl/_next/image?url=https%3A%2F%2Feasycl.vteximg.com.br%2Farquivos%2Fids%2F4898742%2F1397398-0000-001.jpg%3Fv%3D638737164699500000&w=640&q=75",
        imagenes: [
            "https://www.easy.cl/_next/image?url=https%3A%2F%2Feasycl.vteximg.com.br%2Farquivos%2Fids%2F4898742%2F1397398-0000-001.jpg%3Fv%3D638737164699500000&w=640&q=75",
            "https://www.easy.cl/_next/image?url=https%3A%2F%2Feasycl.vteximg.com.br%2Farquivos%2Fids%2F4898750%2F1397398-0000-002.jpg%3Fv%3D638785292396530000&w=640&q=75",
            "https://www.easy.cl/_next/image?url=https%3A%2F%2Feasycl.vteximg.com.br%2Farquivos%2Fids%2F4898742%2F1397398-0000-001.jpg%3Fv%3D638737164699500000&w=640&q=75"
        ]
    },
    {
        id: 11,
        nombre: "Alicate Universal",
        descripcion: "Alicate de cromo-vanadio de 8 pulgadas, con mordazas dentadas.",
        precio: 6500,
        imagen: "https://www.easy.cl/_next/image?url=https%3A%2F%2Feasycl.vteximg.com.br%2Farquivos%2Fids%2F4898742%2F1397398-0000-001.jpg%3Fv%3D638737164699500000&w=640&q=75",
        imagenes: [
            "https://www.easy.cl/_next/image?url=https%3A%2F%2Feasycl.vteximg.com.br%2Farquivos%2Fids%2F4898742%2F1397398-0000-001.jpg%3Fv%3D638737164699500000&w=640&q=75",
            "https://www.easy.cl/_next/image?url=https%3A%2F%2Feasycl.vteximg.com.br%2Farquivos%2Fids%2F4898750%2F1397398-0000-002.jpg%3Fv%3D638785292396530000&w=640&q=75",
            "https://www.easy.cl/_next/image?url=https%3A%2F%2Feasycl.vteximg.com.br%2Farquivos%2Fids%2F4898742%2F1397398-0000-001.jpg%3Fv%3D638737164699500000&w=640&q=75"
        ]
    },
    {
        id: 12,
        nombre: "Llave Inglesa Ajustable",
        descripcion: "Llave de 10 pulgadas, ideal para tornillos y tuercas de diferentes tamaños.",
        precio: 8990,
        imagen: "https://www.easy.cl/_next/image?url=https%3A%2F%2Feasycl.vteximg.com.br%2Farquivos%2Fids%2F4898742%2F1397398-0000-001.jpg%3Fv%3D638737164699500000&w=640&q=75",
        imagenes: [
            "https://www.easy.cl/_next/image?url=https%3A%2F%2Feasycl.vteximg.com.br%2Farquivos%2Fids%2F4898742%2F1397398-0000-001.jpg%3Fv%3D638737164699500000&w=640&q=75",
            "https://www.easy.cl/_next/image?url=https%3A%2F%2Feasycl.vteximg.com.br%2Farquivos%2Fids%2F4898750%2F1397398-0000-002.jpg%3Fv%3D638785292396530000&w=640&q=75",
            "https://www.easy.cl/_next/image?url=https%3A%2F%2Feasycl.vteximg.com.br%2Farquivos%2Fids%2F4898742%2F1397398-0000-001.jpg%3Fv%3D638737164699500000&w=640&q=75"
        ]
    },
    {
        id: 13,
        nombre: "Compresor de Aire",
        descripcion: "Compresor portátil de 24 litros, para inflar neumáticos, pintar y usar herramientas neumáticas.",
        precio: 89990,
        imagen: "https://www.easy.cl/_next/image?url=https%3A%2F%2Feasycl.vteximg.com.br%2Farquivos%2Fids%2F4898742%2F1397398-0000-001.jpg%3Fv%3D638737164699500000&w=640&q=75",
        imagenes: [
            "https://www.easy.cl/_next/image?url=https%3A%2F%2Feasycl.vteximg.com.br%2Farquivos%2Fids%2F4898742%2F1397398-0000-001.jpg%3Fv%3D638737164699500000&w=640&q=75",
            "https://www.easy.cl/_next/image?url=https%3A%2F%2Feasycl.vteximg.com.br%2Farquivos%2Fids%2F4898750%2F1397398-0000-002.jpg%3Fv%3D638785292396530000&w=640&q=75",
            "https://www.easy.cl/_next/image?url=https%3A%2F%2Feasycl.vteximg.com.br%2Farquivos%2Fids%2F4898742%2F1397398-0000-001.jpg%3Fv%3D638737164699500000&w=640&q=75"
        ]
    },
    {
        id: 14,
        nombre: "Caja de Herramientas Metálica",
        descripcion: "Caja de herramientas de acero con 3 bandejas desplegables.",
        precio: 15490,
        imagen: "https://www.easy.cl/_next/image?url=https%3A%2F%2Feasycl.vteximg.com.br%2Farquivos%2Fids%2F4898742%2F1397398-0000-001.jpg%3Fv%3D638737164699500000&w=640&q=75",
        imagenes: [
            "https://www.easy.cl/_next/image?url=https%3A%2F%2Feasycl.vteximg.com.br%2Farquivos%2Fids%2F4898742%2F1397398-0000-001.jpg%3Fv%3D638737164699500000&w=640&q=75",
            "https://www.easy.cl/_next/image?url=https%3A%2F%2Feasycl.vteximg.com.br%2Farquivos%2Fids%2F4898750%2F1397398-0000-002.jpg%3Fv%3D638785292396530000&w=640&q=75",
            "https://www.easy.cl/_next/image?url=https%3A%2F%2Feasycl.vteximg.com.br%2Farquivos%2Fids%2F4898742%2F1397398-0000-001.jpg%3Fv%3D638737164699500000&w=640&q=75"
        ]
    },
    {
        id: 15,
        nombre: "Sierra Caladora",
        descripcion: "Sierra eléctrica para cortes curvos y rectos en madera, metal y plástico.",
        precio: 29990,
        imagen: "https://www.easy.cl/_next/image?url=https%3A%2F%2Feasycl.vteximg.com.br%2Farquivos%2Fids%2F4898742%2F1397398-0000-001.jpg%3Fv%3D638737164699500000&w=640&q=75",
        imagenes: [
            "https://www.easy.cl/_next/image?url=https%3A%2F%2Feasycl.vteximg.com.br%2Farquivos%2Fids%2F4898742%2F1397398-0000-001.jpg%3Fv%3D638737164699500000&w=640&q=75",
            "https://www.easy.cl/_next/image?url=https%3A%2F%2Feasycl.vteximg.com.br%2Farquivos%2Fids%2F4898750%2F1397398-0000-002.jpg%3Fv%3D638785292396530000&w=640&q=75",
            "https://www.easy.cl/_next/image?url=https%3A%2F%2Feasycl.vteximg.com.br%2Farquivos%2Fids%2F4898742%2F1397398-0000-001.jpg%3Fv%3D638737164699500000&w=640&q=75"
        ]
    },
    {
        id: 16,
        nombre: "Rotomartillo Eléctrico",
        descripcion: "Potente rotomartillo de 1000W para trabajos de demolición y perforación pesada.",
        precio: 75990,
        imagen: "https://www.easy.cl/_next/image?url=https%3A%2F%2Feasycl.vteximg.com.br%2Farquivos%2Fids%2F4898742%2F1397398-0000-001.jpg%3Fv%3D638737164699500000&w=640&q=75",
        imagenes: [
            "https://www.easy.cl/_next/image?url=https%3A%2F%2Feasycl.vteximg.com.br%2Farquivos%2Fids%2F4898742%2F1397398-0000-001.jpg%3Fv%3D638737164699500000&w=640&q=75",
            "https://www.easy.cl/_next/image?url=https%3A%2F%2Feasycl.vteximg.com.br%2Farquivos%2Fids%2F4898750%2F1397398-0000-002.jpg%3Fv%3D638785292396530000&w=640&q=75",
            "https://www.easy.cl/_next/image?url=https%3A%2F%2Feasycl.vteximg.com.br%2Farquivos%2Fids%2F4898742%2F1397398-0000-001.jpg%3Fv%3D638737164699500000&w=640&q=75"
        ]
    },
    {
        id: 17,
        nombre: "Multímetro Digital",
        descripcion: "Instrumento para medir voltaje, corriente y resistencia eléctrica.",
        precio: 18990,
        imagen: "https://www.easy.cl/_next/image?url=https%3A%2F%2Feasycl.vteximg.com.br%2Farquivos%2Fids%2F4898742%2F1397398-0000-001.jpg%3Fv%3D638737164699500000&w=640&q=75",
        imagenes: [
            "https://www.easy.cl/_next/image?url=https%3A%2F%2Feasycl.vteximg.com.br%2Farquivos%2Fids%2F4898742%2F1397398-0000-001.jpg%3Fv%3D638737164699500000&w=640&q=75",
            "https://www.easy.cl/_next/image?url=https%3A%2F%2Feasycl.vteximg.com.br%2Farquivos%2Fids%2F4898750%2F1397398-0000-002.jpg%3Fv%3D638785292396530000&w=640&q=75",
            "https://www.easy.cl/_next/image?url=https%3A%2F%2Feasycl.vteximg.com.br%2Farquivos%2Fids%2F4898742%2F1397398-0000-001.jpg%3Fv%3D638737164699500000&w=640&q=75"
        ]
    },
    {
        id: 18,
        nombre: "Soldadora Inverter",
        descripcion: "Soldadora portátil para trabajos de soldadura con electrodo.",
        precio: 125990,
        imagen: "https://www.easy.cl/_next/image?url=https%3A%2F%2Feasycl.vteximg.com.br%2Farquivos%2Fids%2F4898742%2F1397398-0000-001.jpg%3Fv%3D638737164699500000&w=640&q=75",
        imagenes: [
            "https://www.easy.cl/_next/image?url=https%3A%2F%2Feasycl.vteximg.com.br%2Farquivos%2Fids%2F4898742%2F1397398-0000-001.jpg%3Fv%3D638737164699500000&w=640&q=75",
            "https://www.easy.cl/_next/image?url=https%3A%2F%2Feasycl.vteximg.com.br%2Farquivos%2Fids%2F4898750%2F1397398-0000-002.jpg%3Fv%3D638785292396530000&w=640&q=75",
            "https://www.easy.cl/_next/image?url=https%3A%2F%2Feasycl.vteximg.com.br%2Farquivos%2Fids%2F4898742%2F1397398-0000-001.jpg%3Fv%3D638737164699500000&w=640&q=75"
       ]
    },
    {
        id: 19,
        nombre: "Soplete de Gas",
        descripcion: "Soplete a gas butano para trabajos de soldadura blanda y calentamiento.",
        precio: 8500,
        imagen: "https://www.easy.cl/_next/image?url=https%3A%2F%2Feasycl.vteximg.com.br%2Farquivos%2Fids%2F4898742%2F1397398-0000-001.jpg%3Fv%3D638737164699500000&w=640&q=75",
        imagenes: [
            "https://www.easy.cl/_next/image?url=https%3A%2F%2Feasycl.vteximg.com.br%2Farquivos%2Fids%2F4898742%2F1397398-0000-001.jpg%3Fv%3D638737164699500000&w=640&q=75",
            "https://www.easy.cl/_next/image?url=https%3A%2F%2Feasycl.vteximg.com.br%2Farquivos%2Fids%2F4898750%2F1397398-0000-002.jpg%3Fv%3D638785292396530000&w=640&q=75",
            "https://www.easy.cl/_next/image?url=https%3A%2F%2Feasycl.vteximg.com.br%2Farquivos%2Fids%2F4898742%2F1397398-0000-001.jpg%3Fv%3D638737164699500000&w=640&q=75"
        ]
    },
    {
        id: 20,
        nombre: "Juego de Llaves Allen",
        descripcion: "Set de 10 llaves Allen en diferentes tamaños, ideal para muebles armables.",
        precio: 4990,
        imagen: "https://www.easy.cl/_next/image?url=https%3A%2F%2Feasycl.vteximg.com.br%2Farquivos%2Fids%2F4898742%2F1397398-0000-001.jpg%3Fv%3D638737164699500000&w=640&q=75",
        imagenes: [
            "https://www.easy.cl/_next/image?url=https%3A%2F%2Feasycl.vteximg.com.br%2Farquivos%2Fids%2F4898742%2F1397398-0000-001.jpg%3Fv%3D638737164699500000&w=640&q=75",
            "https://www.easy.cl/_next/image?url=https%3A%2F%2Feasycl.vteximg.com.br%2Farquivos%2Fids%2F4898750%2F1397398-0000-002.jpg%3Fv%3D638785292396530000&w=640&q=75",
            "https://www.easy.cl/_next/image?url=https%3A%2F%2Feasycl.vteximg.com.br%2Farquivos%2Fids%2F4898742%2F1397398-0000-001.jpg%3Fv%3D638737164699500000&w=640&q=75"
       ]
    },
    {
        id: 21,
        nombre: "Sierra de Sable",
        descripcion: "Sierra eléctrica de mano para cortar tuberías, madera y metal en espacios reducidos.",
        precio: 55990,
        imagen: "https://www.easy.cl/_next/image?url=https%3A%2F%2Feasycl.vteximg.com.br%2Farquivos%2Fids%2F4898742%2F1397398-0000-001.jpg%3Fv%3D638737164699500000&w=640&q=75",
        imagenes: [
            "https://www.easy.cl/_next/image?url=https%3A%2F%2Feasycl.vteximg.com.br%2Farquivos%2Fids%2F4898742%2F1397398-0000-001.jpg%3Fv%3D638737164699500000&w=640&q=75",
            "https://www.easy.cl/_next/image?url=https%3A%2F%2Feasycl.vteximg.com.br%2Farquivos%2Fids%2F4898750%2F1397398-0000-002.jpg%3Fv%3D638785292396530000&w=640&q=75",
            "https://www.easy.cl/_next/image?url=https%3A%2F%2Feasycl.vteximg.com.br%2Farquivos%2Fids%2F4898742%2F1397398-0000-001.jpg%3Fv%3D638737164699500000&w=640&q=75"
        ]
    },
    {
        id: 22,
        nombre: "Prensa de Banco",
        descripcion: "Prensa de banco de 4 pulgadas para sujetar piezas en trabajos de carpintería y metalurgia.",
        precio: 22990,
        imagen: "https://www.easy.cl/_next/image?url=https%3A%2F%2Feasycl.vteximg.com.br%2Farquivos%2Fids%2F4898742%2F1397398-0000-001.jpg%3Fv%3D638737164699500000&w=640&q=75",
        imagenes: [
            "https://www.easy.cl/_next/image?url=https%3A%2F%2Feasycl.vteximg.com.br%2Farquivos%2Fids%2F4898742%2F1397398-0000-001.jpg%3Fv%3D638737164699500000&w=640&q=75",
            "https://www.easy.cl/_next/image?url=https%3A%2F%2Feasycl.vteximg.com.br%2Farquivos%2Fids%2F4898750%2F1397398-0000-002.jpg%3Fv%3D638785292396530000&w=640&q=75",
            "https://www.easy.cl/_next/image?url=https%3A%2F%2Feasycl.vteximg.com.br%2Farquivos%2Fids%2F4898742%2F1397398-0000-001.jpg%3Fv%3D638737164699500000&w=640&q=75"
        ]
    },
    {
        id: 23,
        nombre: "Medidor Láser 30m",
        descripcion: "Medidor de distancias digital con tecnología láser, precisión en mediciones de hasta 30 metros.",
        precio: 45990,
        imagen: "https://www.easy.cl/_next/image?url=https%3A%2F%2Feasycl.vteximg.com.br%2Farquivos%2Fids%2F4898742%2F1397398-0000-001.jpg%3Fv%3D638737164699500000&w=640&q=75",
        imagenes: [
            "https://www.easy.cl/_next/image?url=https%3A%2F%2Feasycl.vteximg.com.br%2Farquivos%2Fids%2F4898742%2F1397398-0000-001.jpg%3Fv%3D638737164699500000&w=640&q=75",
            "https://www.easy.cl/_next/image?url=https%3A%2F%2Feasycl.vteximg.com.br%2Farquivos%2Fids%2F4898750%2F1397398-0000-002.jpg%3Fv%3D638785292396530000&w=640&q=75",
            "https://www.easy.cl/_next/image?url=https%3A%2F%2Feasycl.vteximg.com.br%2Farquivos%2Fids%2F4898742%2F1397398-0000-001.jpg%3Fv%3D638737164699500000&w=640&q=75"
        ]
    },
    {
        id: 24,
        nombre: "Kit de Brocas y Puntas 100 pcs",
        descripcion: "Set de 100 piezas con brocas para metal, madera y concreto, además de puntas para destornillador.",
        precio: 19990,
        imagen: "https://www.easy.cl/_next/image?url=https%3A%2F%2Feasycl.vteximg.com.br%2Farquivos%2Fids%2F4898742%2F1397398-0000-001.jpg%3Fv%3D638737164699500000&w=640&q=75",
        imagenes: [
            "https://www.easy.cl/_next/image?url=https%3A%2F%2Feasycl.vteximg.com.br%2Farquivos%2Fids%2F4898742%2F1397398-0000-001.jpg%3Fv%3D638737164699500000&w=640&q=75",
            "https://www.easy.cl/_next/image?url=https%3A%2F%2Feasycl.vteximg.com.br%2Farquivos%2Fids%2F4898750%2F1397398-0000-002.jpg%3Fv%3D638785292396530000&w=640&q=75",
            "https://www.easy.cl/_next/image?url=https%3A%2F%2Feasycl.vteximg.com.br%2Farquivos%2Fids%2F4898742%2F1397398-0000-001.jpg%3Fv%3D638737164699500000&w=640&q=75"
        ]
    },
    {
        id: 25,
        nombre: "Pistola de Aire Caliente",
        descripcion: "Pistola de 2000W para decapar pintura, moldear plásticos y soldar.",
        precio: 34990,
        imagen: "https://www.easy.cl/_next/image?url=https%3A%2F%2Feasycl.vteximg.com.br%2Farquivos%2Fids%2F4898742%2F1397398-0000-001.jpg%3Fv%3D638737164699500000&w=640&q=75",
        imagenes: [
            "https://www.easy.cl/_next/image?url=https%3A%2F%2Feasycl.vteximg.com.br%2Farquivos%2Fids%2F4898742%2F1397398-0000-001.jpg%3Fv%3D638737164699500000&w=640&q=75",
            "https://www.easy.cl/_next/image?url=https%3A%2F%2Feasycl.vteximg.com.br%2Farquivos%2Fids%2F4898750%2F1397398-0000-002.jpg%3Fv%3D638785292396530000&w=640&q=75",
            "https://www.easy.cl/_next/image?url=https%3A%2F%2Feasycl.vteximg.com.br%2Farquivos%2Fids%2F4898742%2F1397398-0000-001.jpg%3Fv%3D638737164699500000&w=640&q=75"
        ]
    }
];