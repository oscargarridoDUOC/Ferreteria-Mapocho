// ARRAY CON LOS PRODUCTOS Y SUS ATRIBUTOS
const productos = [
    {
        id: 1,
        nombre: "Taladro Percutor",
        descripcion: "Taladro eléctrico de 550W ideal para perforar mampostería, hormigón y metal.",
        precio: 35990,
        imagen: "https://i5.walmartimages.com/seo/Hyper-Tough-6-Amp-1-2-inch-Corded-Hammer-Drill-Keyed-Chuck-120-Volt-TD6HD_33dda335-baae-4d41-86bc-8f858c63f1f8.ddfc48223d2a77393b8a6d6e4637d54a.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
        imagenes: [
            "https://i5.walmartimages.com/seo/Hyper-Tough-6-Amp-1-2-inch-Corded-Hammer-Drill-Keyed-Chuck-120-Volt-TD6HD_33dda335-baae-4d41-86bc-8f858c63f1f8.ddfc48223d2a77393b8a6d6e4637d54a.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
            "https://www.easy.cl/_next/image?url=https%3A%2F%2Feasycl.vteximg.com.br%2Farquivos%2Fids%2F4857744%2F1422655-0000-002.jpg%3Fv%3D638733585793900000&w=256&q=75",
            "https://www.easy.cl/_next/image?url=https%3A%2F%2Feasycl.vteximg.com.br%2Farquivos%2Fids%2F4857748%2F1422655-0000-003.jpg%3Fv%3D638733585795930000&w=256&q=75"
        ]
    },
    {
        id: 2,
        nombre: "Kit de Herramientas 52 pcs",
        descripcion: "Maletín de 52 piezas con alicates, destornilladores y llaves. Ideal para reparaciones domésticas.",
        precio: 25490,
        imagen: "https://m.media-amazon.com/images/I/5127Hhq1exL._AC_US100_.jpg",
        imagenes: [
            "https://m.media-amazon.com/images/I/51Ov9kJ9cKL._AC_US100_.jpg",
            "https://m.media-amazon.com/images/I/51RWlque6LL._AC_US100_.jpg",
            "https://m.media-amazon.com/images/I/51RWlque6LL._AC_US100_.jpg"
        ]
    },
    {
        id: 3,
        nombre: "Esmeril Angular 4 1/2' 820W",
        descripcion: "Herramienta de uso profesional para desbaste y corte de metales.",
        precio: 49990,
        imagen: "https://i5.walmartimages.com/seo/DEWALT-Angle-Grinder-Tool-7-Inch-13-Amp-DW840_7afa12a3-0364-4f47-a885-4d4398ac96e0.b417e37bf0d100ca4b2f7c9f4296422d.png?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
        imagenes: [
            "https://i5.walmartimages.com/seo/DEWALT-Angle-Grinder-Tool-7-Inch-13-Amp-DW840_7afa12a3-0364-4f47-a885-4d4398ac96e0.b417e37bf0d100ca4b2f7c9f4296422d.png?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
            "https://www.easy.cl/_next/image?url=https%3A%2F%2Feasycl.vteximg.com.br%2Farquivos%2Fids%2F4898742%2F1397398-0000-001.jpg%3Fv%3D638737164699500000&w=640&q=75",
            "https://www.easy.cl/_next/image?url=https%3A%2F%2Feasycl.vteximg.com.br%2Farquivos%2Fids%2F4898742%2F1397398-0000-001.jpg%3Fv%3D638737164699500000&w=640&q=75"
        ]
    },
    {
        id: 4,
        nombre: "Sierra Circular",
        descripcion: "Sierra eléctrica de 1200W, ideal para cortes precisos en madera y tableros.",
        precio: 52990,
        imagen: "https://i5.walmartimages.com/seo/Hyper-Tough-20V-6-5in-Brushless-Circular-saw-with-2-0Ah-Battery-Pack-and-Standard-Charger-41007-2_34f7beb0-0e33-4370-89f4-d38f699c3196.5c0fe1522bafaf1e3c1b28352be32197.jpeg?odnHeight=573&odnWidth=573&odnBg=FFFFFF",
        imagenes: [
            "https://i5.walmartimages.com/seo/Hyper-Tough-20V-6-5in-Brushless-Circular-saw-with-2-0Ah-Battery-Pack-and-Standard-Charger-41007-2_34f7beb0-0e33-4370-89f4-d38f699c3196.5c0fe1522bafaf1e3c1b28352be32197.jpeg?odnHeight=573&odnWidth=573&odnBg=FFFFFF",
            "https://www.easy.cl/_next/image?url=https%3A%2F%2Feasycl.vteximg.com.br%2Farquivos%2Fids%2F4898750%2F1397398-0000-002.jpg%3Fv%3D638785292396530000&w=640&q=75",
            "https://www.easy.cl/_next/image?url=https%3A%2F%2Feasycl.vteximg.com.br%2Farquivos%2Fids%2F4898742%2F1397398-0000-001.jpg%3Fv%3D638737164699500000&w=640&q=75"
        ]
    },
    {
        id: 5,
        nombre: "Lijadora Orbital",
        descripcion: "Lijadora para acabados finos en superficies de madera y metal.",
        precio: 38990,
        imagen: "https://i5.walmartimages.com/seo/Hyper-Tough-2-5-Amp-Corded-5-inch-Orbital-Sander-with-Dust-Bag-Vacuum-Hose-Adapter-3-Sanding-Sheets-New-Condition_a080bea0-d716-46fc-8a24-bf94edf74838.796fa1f6f3ff6e18dac408052ceff541.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
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
        imagen: "https://i5.walmartimages.com/asr/dfef698f-a351-479e-8e5b-29c77cea2ab5.43ef1cac0fb6231235ee8e409b96a4c6.jpeg?odnHeight=573&odnWidth=573&odnBg=FFFFFF",
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
        imagen: "https://i5.walmartimages.com/seo/WEN-Products-2-1-Amp-6-Inch-Single-Speed-Bench-Grinder-with-Flexible-Work-Light_e4a5ad65-0360-4e73-85f4-5801b1b3cdcd.10e560ec96c6e466a8dd1491ba9724b0.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
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
        imagen: "https://i5.walmartimages.com/seo/PROMAKER-24-inch-Level-Magnetic-Level-180-90-45-bubbles-Shock-Resistant-Aluminum-Body-Level-Tool-Overhead-Viewing-Comfortable-read-PRO-NV031_ba382d12-150d-4ef1-a1ba-2cdd7d9015cb.835287dafb501e3dc8dbf11846f81177.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
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
        imagen: "https://i5.walmartimages.com/asr/6cba2b1e-cc86-4b99-af77-8f7b9fcc1688_2.c36684a4d0070329ed81d4768dba4f48.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
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
        imagen: "https://i5.walmartimages.com/asr/d4d9fa40-5a3f-4f59-95ad-531047b23143.1e723139b1503525adc38742fe8f44e8.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
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
        imagen: "https://i5.walmartimages.com/seo/8-inch-Pliers-Durable-Jaws-Linesman-Pliers-w-Milled-Teeth-Hot-Riveted-Joint-Chrome-Vanadium-Steel_4fd8a0b1-247e-4aaf-be0c-1be639df7ca6.a80037c5ecb780f5c531f6cd1a535efd.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
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
        imagen: "https://i5.walmartimages.com/seo/Hyper-Tough-10-inch-Adjustable-Wrench-Steel-Construction-Model-43181_fc474bc0-26e8-4d53-a67d-b5af1b390380.e4ebfa1d725ee977f03b5c1a6c6c7f94.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
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
        imagen: "https://i5.walmartimages.com/seo/Zhixing-8-Gallon-Portable-Oil-Free-Air-Compressor-Ultra-Quiet-70dB-1-5HP-115PSI-High-Pressure-4-52CFM-Auto-Repair-Bicycle-Tire-Inflating-Garage-Paint_503c636a-291e-4b0f-85f1-7720525ce25e.57c48fb55acaf510a4db5db1b0f06ede.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
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
        imagen: "https://i5.walmartimages.com/seo/KFFKFF-Steel-Toolbox-18-inch-3-Level-5-Compartment-Mobile-Collapsible-Tool-Storage-Organizer-Handle-Lock-Slot-Powder-Finished-Metal-Overhanging-Tool_2c10ac73-dead-4983-8915-3f57eaf942cc.a6cb4e04f12241867362966e71948c9f.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
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
        imagen: "https://i5.walmartimages.com/seo/Hyper-Tough-3-5-Amp-Corded-Jig-Saw-Eelectric-120-Volt-44002_33202ea8-6e1d-4f72-821d-b2fce87891be.782c93288d582d346fae15942352255e.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
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
        imagen: "https://i5.walmartimages.com/seo/VEVOR-Rotary-Hammer-Drill-Corded-Drills-1-4-Modes-SDS-Plus-Chipping-Hammers_afd4219a-8425-437e-ae37-1fb2da14fe69.140a0722f91bf1bb755da2f31cd3d953.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
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
        imagen: "https://i5.walmartimages.com/seo/EverStart-Professional-Automotive-300-Volt-Digital-LCD-Multimeter-10709WDI-New-5-5-in_982e9257-ccb3-44fa-80b7-d798fad375d8_2.80c1268c11f521d69a5ebd232a49847c.jpeg?odnHeight=573&odnWidth=573&odnBg=FFFFFF",
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
        imagen: "https://i5.walmartimages.com/seo/ARCCAPTAIN-3-1-MIG-Welder-130A-Welder-Machine-110V-Flux-Core-MIG-Lift-TIG-Stick-Welding-Machine-IGBT-Inverter-Portable-Gasless-Welder-Equipment_f5dd0788-8d4e-4d07-942b-1badc8d0fbe4.c5203692489db839d6a6ca0e3eb41d4e.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
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
        imagen: "https://i5.walmartimages.com/seo/Bernzomatic-Utility-Torch-Kit-with-14-1-oz-Propane-Fuel-and-Adjustable-Trigger-Start-Ignition-Torch_1d884eb7-b6f2-4293-8716-8d63b56e5dd0.497782e6964c0995f122d4b8c8d30704.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
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
        imagen: "https://i5.walmartimages.com/seo/HyperTough-16-Piece-Hex-Key-Set-with-8-SAE-and-8-Metric-Sizes-TW40044Z_792835a5-d60c-4765-a722-5ced0c42599f_2.6b8166a4499e8f387f70ceef303ec954.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
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
        precio: 125990,
        imagen: "https://i5.walmartimages.com/seo/88VF-Cordless-Electric-Saber-Saw-Reciprocating-Blade-Saw-Rechargeable-Wood-Cutter-Sierra-Sable-Hacksaw-For-18V-Battery-Efficient-Cutting_aa393811-a37a-450b-96da-38e4abb0120b.15a543ff10ded5c6b5c47927cdf7995d.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
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
        imagen: "https://i5.walmartimages.com/seo/Hydraulic-Press-6-Ton-Hydraulic-Shop-Press-H-Frame-Garage-Floor-Benchtop-Press-Adjustable-Shop-Press-Plates-Adjustable-Working-Table-Height-Gears-Bea_e6e51a1a-72d4-4af3-b0aa-097b8f1f84ee.f97c70ac849bec9427a2658e79c327d5.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
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
        imagen: "https://i5.walmartimages.com/seo/Spectra-Precision-QM10-Quick-Measure-Laser-Distance-Meter-30-Meters-Measuring-Range_a1bee45e-3ccd-4afc-9a60-e0aa7ed293bf.b9bdafcc25360a97730720ab19884c47.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
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
        precio: 69990,
        imagen: "https://i5.walmartimages.com/seo/Hyper-Tough-100-Piece-Drill-and-Drive-Tool-Set-in-Click-Fit-Case-42989CF_5715a6c6-2e38-41bc-b461-5812d09d2d52.b2dc2f6fdf7da9a2bbc2df5d9950b4ab.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
        imagenes: [
            "https://media.falabella.com/sodimacCL/5604702_001/w=1500,h=1500,fit=pad",
            "https://media.falabella.com/sodimacCL/5604702_12/w=1500,h=1500,fit=pad",
            "https://media.falabella.com/sodimacCL/5604702_01/w=1500,h=1500,fit=pad"
        ]
    },
    {
        id: 25,
        nombre: "Pistola de Aire Caliente",
        descripcion: "Pistola de 2000W para decapar pintura, moldear plásticos y soldar.",
        precio: 34990,
        imagen: "https://i5.walmartimages.com/seo/PRULDE-Dual-Temperature-Settings-752-1112-Deg-F-Heat-Gun-Hot-Air-Gun-Kit-with-4-Nozzles-for-Crafts-Shrink-Wrapping-Tubing-Paint-Removing_d7a3cd97-ddad-4be4-bc4f-55f10a2537c3.5cb7b73e387e314e97f8fa86da25b8aa.jpeg?odnHeight=160&odnWidth=160&odnBg=FFFFFF",
        imagenes: [
            "https://i5.walmartimages.com/asr/22aeb21f-8a1d-4cd8-aea7-b63acee8299e.b725ed48bab2b932f23a2d9b26c85b78.jpeg?odnHeight=160&odnWidth=160&odnBg=FFFFFF",
            "https://i5.walmartimages.com/asr/81fcc8e8-b4a0-4735-ade8-aed5945fd02c.4352397e8503de980906f6da26ed6837.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
            "https://i5.walmartimages.com/asr/c9b1ed8d-5ffc-4336-b3de-5f85f1bd9d05.cca4a3ec2ae9e28695551d0699a3567b.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF"
        ]
    }
];