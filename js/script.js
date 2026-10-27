/* ==========================================
   MENGUANTE - SISTEMA COMPLETO DE TIENDA Y CARRITO
   ========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const productos = [
        // COLLARES
        { id: 1, nombre: "Collar Destello", categoria: "Collar", precioNum: 190, precio: "$190.00 MXN", material: "Oro laminado", img: "assets/img/Collar Destello.jpeg", descripcion: "Elegante collar con dije de destello central." },
        { id: 2, nombre: "Collar Delfin Arcoiris", categoria: "Collar", precioNum: 190, precio: "$190.00 MXN", material: "Acero inoxidable", img: "assets/img/Collar Delfin Arcoiris.jpeg", descripcion: "Divertido collar con motivo de delfín en tono arcoíris." },
        { id: 3, nombre: "Collar cupido", categoria: "Collar", precioNum: 195, precio: "$195.00 MXN", material: "Acero inoxidable", img: "assets/img/Collar cupido.jpeg", descripcion: "Diseño romántico de cupido tallado en acero inoxidable." },
        { id: 4, nombre: "Collar Cruz L", categoria: "Collar", precioNum: 240, precio: "$240.00 MXN", material: "Oro laminado", img: "assets/img/Collar Cruz L.jpeg", descripcion: "Collar de cruz grande elaborado en oro laminado." },
        { id: 5, nombre: "Collar corazón Puzzle", categoria: "Collar", precioNum: 190, precio: "$190.00 MXN", material: "Acero inoxidable", img: "assets/img/Collar corazon Puzzle.jpeg", descripcion: "Diseño estilo rompecabezas en forma de corazón." },
        { id: 6, nombre: "Collar corazón Prisma", categoria: "Collar", precioNum: 190, precio: "$190.00 MXN", material: "Oro laminado", img: "assets/img/Collar corazon Prisma.jpeg", descripcion: "Corazón con cortes geométricos tipo prisma." },
        { id: 7, nombre: "Collar Bunny", categoria: "Collar", precioNum: 190, precio: "$190.00 MXN", material: "Acero inoxidable", img: "assets/img/Collar Bunny.jpeg", descripcion: "Silueta de conejito con incrustaciones brillantes." },
        { id: 8, nombre: "Collar Ebano", categoria: "Collar", precioNum: 190, precio: "$190.00 MXN", material: "Acero inoxidable", img: "assets/img/Collar Ebano.jpeg", descripcion: "Dije circular con centro negro rodeado de microcirconias." },

        // PULSERAS Y BRAZALETES
        { id: 9, nombre: "Pulsera Tenis", categoria: "Pulsera/Brazalete", precioNum: 80, precio: "$80.00 MXN", material: "Acero inoxidable", img: "assets/img/Pulsera Tenis.jpeg", descripcion: "Pulsera tenis con circones alineados." },
        { id: 10, nombre: "Pulsera Pandora", categoria: "Pulsera/Brazalete", precioNum: 230, precio: "$230.00 MXN", material: "Oro laminado", img: "assets/img/Pulsera Pandora.jpeg", descripcion: "Pulsera estilo charms en oro laminado." },
        { id: 11, nombre: "Pulsera mini Beads", categoria: "Pulsera/Brazalete", precioNum: 220, precio: "$220.00 MXN", material: "Acero inoxidable / Esferas", img: "assets/img/Pulsera mini Beads.jpeg", descripcion: "Diseño moderno a base de pequeñas cuentas." },
        { id: 12, nombre: "Brazalete Love", categoria: "Pulsera/Brazalete", precioNum: 230, precio: "$230.00 MXN", material: "Oro laminado", img: "assets/img/Brazalete Love.jpeg", descripcion: "Brazalete rígido con incrustaciones circulares." },
        { id: 13, nombre: "Brazalete Just Un Clou", categoria: "Pulsera/Brazalete", precioNum: 230, precio: "$230.00 MXN", material: "Oro laminado", img: "assets/img/Brazalete Just Un Clou.jpeg", descripcion: "Diseño en forma de clavo estilizado." },

        // ARETES
        { id: 14, nombre: "Aretes Chunky Lazo M", categoria: "Aretes", precioNum: 150, precio: "$150.00 MXN", material: "Acero inoxidable", img: "assets/img/Aretes Chunky Lazo M.jpeg", descripcion: "Aretes en forma de moño con relieve chunky." },
        { id: 15, nombre: "Aretes Chunky Marea", categoria: "Aretes", precioNum: 150, precio: "$150.00 MXN", material: "Oro laminado", img: "assets/img/Aretes Chunky Marea.jpeg", descripcion: "Aretes en forma de estrella de mar." },
        { id: 16, nombre: "Aretes Chunky Octopus", categoria: "Aretes", precioNum: 150, precio: "$150.00 MXN", material: "Oro laminado", img: "assets/img/Aretes Chunky Octopus.jpeg", descripcion: "Aretes con forma de pulpo tallado." },
        { id: 17, nombre: "Aretes chunky Sel", categoria: "Aretes", precioNum: 150, precio: "$150.00 MXN", material: "Acero inoxidable", img: "assets/img/Aretes chunky Sel.jpeg", descripcion: "Aros abombados estilo chunky." },
        { id: 18, nombre: "Aretes Chunky Caracol", categoria: "Aretes", precioNum: 150, precio: "$150.00 MXN", material: "Oro laminado", img: "assets/img/Aretes Chunky Caracol.jpeg", descripcion: "Diseño espiral inspirado en caracoles de mar." },
        { id: 19, nombre: "Aretes Orbita", categoria: "Aretes", precioNum: 150, precio: "$150.00 MXN", material: "Oro laminado", img: "assets/img/Aretes Orbita.jpeg", descripcion: "Anillos concéntricos entrelazados." },
        { id: 20, nombre: "Aretes Gota", categoria: "Aretes", precioNum: 150, precio: "$150.00 MXN", material: "Oro laminado", img: "assets/img/Aretes Gota.jpeg", descripcion: "Aretes en forma de gota abombada." },
        { id: 21, nombre: "Aretes Chunky Lazo G", categoria: "Aretes", precioNum: 150, precio: "$150.00 MXN", material: "Oro laminado", img: "assets/img/Aretes Chunky Lazo G.jpeg", descripcion: "Lazo grande con mayor volumen visual." }
    ];

    const productsGrid = document.getElementById("products-grid");
    const favCount = document.getElementById("fav-count");
    const cartCount = document.getElementById("cart-count");
    const listaFavoritos = document.getElementById("lista-favoritos");
    const favVacio = document.getElementById("fav-vacio");
    const listaCarrito = document.getElementById("lista-carrito");
    const cartVacio = document.getElementById("cart-vacio");
    const resumenCompra = document.getElementById("resumen-compra");
    const cartTotal = document.getElementById("cart-total");

    let favoritos = [];
    let carrito = [];

    let productoSeleccionadoActual = null;
    let cantidadActual = 1;

    // RENDERIZAR TARJETAS EN EL CATÁLOGO
    function renderProductos(items) {
        productsGrid.innerHTML = "";

        if(items.length === 0) {
            productsGrid.innerHTML = `<div class="col-12 text-center text-muted py-5"><p>No se encontraron productos.</p></div>`;
            return;
        }

        items.forEach(prod => {
            const isFav = favoritos.some(f => f.id === prod.id);
            const heartClass = isFav ? "bi-heart-fill text-danger" : "bi-heart";

            const cardCol = document.createElement("div");
            cardCol.className = "col-6 col-md-4 col-lg-3 product-item";
            cardCol.innerHTML = `
                <div class="card product-card h-100 border-0 shadow-sm position-relative d-flex flex-column">
                    <button class="btn-fav position-absolute top-0 end-0 m-2 border-0 bg-transparent z-3" data-id="${prod.id}" title="Añadir a Favoritos">
                        <i class="bi ${heartClass} fs-5"></i>
                    </button>
                    <div class="product-img-wrapper cursor-pointer" data-id="${prod.id}">
                        <img src="${prod.img}" class="card-img-top rounded-0 object-fit-cover" style="height: 220px;" alt="${prod.nombre}">
                    </div>
                    <div class="card-body text-center p-3 cursor-pointer d-flex flex-column justify-content-between" data-id="${prod.id}">
                        <div>
                            <span class="badge bg-light text-dark mb-1">${prod.categoria}</span>
                            <h3 class="h6 mb-1 text-truncate product-title">${prod.nombre}</h3>
                            <p class="small text-muted mb-1">${prod.precio}</p>
                            <small class="badge bg-outline-dark text-secondary border fw-normal d-inline-block mb-2" style="font-size: 0.7rem;">${prod.material}</small>
                        </div>
                        <button class="btn btn-outline-dark btn-sm w-100 btn-add-cart-card mt-2" data-id="${prod.id}">
                            <i class="bi bi-bag-plus"></i> Agregar al Carrito
                        </button>
                    </div>
                </div>
            `;
            productsGrid.appendChild(cardCol);
        });

        asignarEventos();
    }

    // EVENTOS DE LAS TARJETAS
    function asignarEventos() {
        document.querySelectorAll(".product-img-wrapper, .card-body div").forEach(elem => {
            elem.addEventListener("click", () => {
                const prodId = parseInt(elem.closest(".product-card").querySelector(".btn-fav").getAttribute("data-id"));
                abrirModalDetalle(prodId);
            });
        });

        document.querySelectorAll(".btn-fav").forEach(btn => {
            btn.addEventListener("click", (e) => {
                e.stopPropagation();
                const prodId = parseInt(btn.getAttribute("data-id"));
                toggleFavorito(prodId, btn);
            });
        });

        document.querySelectorAll(".btn-add-cart-card").forEach(btn => {
            btn.addEventListener("click", (e) => {
                e.stopPropagation();
                const prodId = parseInt(btn.getAttribute("data-id"));
                const prod = productos.find(p => p.id === prodId);
                
                // Si requiere color, por defecto asigna 'Dorado' al agregarlo rápido desde la tarjeta
                const permiteColor = ["Pulsera Pandora", "Brazalete Love", "Brazalete Just Un Clou"].includes(prod.nombre);
                const color = permiteColor ? "Dorado" : null;

                agregarAlCarrito(prod, 1, color);
            });
        });
    }

    // MODAL DETALLE PRODUCTO
    function abrirModalDetalle(id) {
        const prod = productos.find(p => p.id === id);
        if (!prod) return;

        productoSeleccionadoActual = prod;
        cantidadActual = 1;

        document.getElementById("modal-prod-img").src = prod.img;
        document.getElementById("modal-prod-img").alt = prod.nombre;
        document.getElementById("modal-prod-categoria").textContent = prod.categoria;
        document.getElementById("modal-prod-nombre").textContent = prod.nombre;
        document.getElementById("modal-prod-precio").textContent = prod.precio;
        document.getElementById("modal-prod-material").textContent = prod.material;
        document.getElementById("modal-prod-descripcion").textContent = prod.descripcion;
        document.getElementById("input-cantidad").value = cantidadActual;

        const selectorColorContainer = document.getElementById("selector-color-container");
        const permiteColor = ["Pulsera Pandora", "Brazalete Love", "Brazalete Just Un Clou"].includes(prod.nombre);

        if (permiteColor) {
            selectorColorContainer.style.display = "block";
            document.getElementById("colorDorado").checked = true;
        } else {
            selectorColorContainer.style.display = "none";
        }

        actualizarBotonWhatsApp();

        const modalBS = new bootstrap.Modal(document.getElementById("modalProducto"));
        modalBS.show();
    }

    function actualizarBotonWhatsApp() {
        if (!productoSeleccionadoActual) return;

        const total = productoSeleccionadoActual.precioNum * cantidadActual;
        const textoCantidad = cantidadActual === 1 ? "1 unidad" : `${cantidadActual} unidades`;
        
        let detalleColor = "";
        const permiteColor = ["Pulsera Pandora", "Brazalete Love", "Brazalete Just Un Clou"].includes(productoSeleccionadoActual.nombre);
        
        if (permiteColor) {
            const colorSeleccionado = document.querySelector('input[name="opcionColor"]:checked').value;
            detalleColor = ` - Color: ${colorSeleccionado}`;
        }

        const mensajeWS = `Hola Menguante, me interesa consultar disponibilidad del producto: ${productoSeleccionadoActual.nombre}${detalleColor} (${textoCantidad} - Total: $${total}.00 MXN)`;
        document.getElementById("modal-prod-ws").href = `https://wa.me/525532728001?text=${encodeURIComponent(mensajeWS)}`;
    }

    // BOTÓN AGREGAR DESDE EL MODAL
    document.getElementById("btn-modal-add-cart").addEventListener("click", () => {
        if (!productoSeleccionadoActual) return;

        let color = null;
        const permiteColor = ["Pulsera Pandora", "Brazalete Love", "Brazalete Just Un Clou"].includes(productoSeleccionadoActual.nombre);
        if (permiteColor) {
            color = document.querySelector('input[name="opcionColor"]:checked').value;
        }

        agregarAlCarrito(productoSeleccionadoActual, cantidadActual, color);

        const modalBS = bootstrap.Modal.getInstance(document.getElementById("modalProducto"));
        if(modalBS) modalBS.hide();
    });

    // SISTEMA DE CARRITO DE COMPRAS
    function agregarAlCarrito(producto, cantidad, color = null) {
        const itemExistente = carrito.find(item => item.id === producto.id && item.color === color);

        if (itemExistente) {
            itemExistente.cantidad += cantidad;
        } else {
            carrito.push({
                id: producto.id,
                nombre: producto.nombre,
                precioNum: producto.precioNum,
                img: producto.img,
                cantidad: cantidad,
                color: color
            });
        }

        actualizarCarritoUI();
    }

    function actualizarCarritoUI() {
        const totalItems = carrito.reduce((acc, item) => acc + item.cantidad, 0);
        if (cartCount) cartCount.textContent = totalItems;

        listaCarrito.innerHTML = "";

        if (carrito.length === 0) {
            listaCarrito.appendChild(cartVacio);
            resumenCompra.style.display = "none";
        } else {
            resumenCompra.style.display = "block";
            let sumaTotal = 0;

            carrito.forEach((item, index) => {
                const subtotal = item.precioNum * item.cantidad;
                sumaTotal += subtotal;

                const colorTexto = item.color ? ` (${item.color})` : '';

                const itemDiv = document.createElement("div");
                itemDiv.className = "d-flex align-items-center justify-content-between p-2 border-bottom";
                itemDiv.innerHTML = `
                    <div class="d-flex align-items-center gap-3">
                        <img src="${item.img}" alt="${item.nombre}" style="width: 50px; height: 50px; object-fit: cover;" class="rounded">
                        <div>
                            <h6 class="mb-0 text-dark small fw-bold">${item.nombre}${colorTexto}</h6>
                            <span class="text-muted small">$${item.precioNum}.00 x ${item.cantidad} = <strong>$${subtotal}.00 MXN</strong></span>
                        </div>
                    </div>
                    <button class="btn btn-sm btn-outline-danger border-0 remove-cart" data-index="${index}">
                        <i class="bi bi-trash"></i>
                    </button>
                `;
                listaCarrito.appendChild(itemDiv);
            });

            cartTotal.textContent = `$${sumaTotal}.00 MXN`;

            // Configurar mensaje de Checkout por WhatsApp con todo el pedido
            let resumenProductos = carrito.map(i => `- ${i.nombre}${i.color ? ' [' + i.color + ']' : ''} x${i.cantidad} ($${i.precioNum * i.cantidad}.00 MXN)`).join('\n');
            const mensajeFinalWS = `Hola Menguante, deseo realizar la compra del siguiente pedido:\n\n${resumenProductos}\n\nTotal a Pagar: $${sumaTotal}.00 MXN\n\nQuedo a la espera de sus datos para realizar la transferencia/depósito.`;

            document.getElementById("btn-checkout-ws").href = `https://wa.me/525532728001?text=${encodeURIComponent(mensajeFinalWS)}`;

            // Eventos para eliminar items del carrito
            document.querySelectorAll(".remove-cart").forEach(btn => {
                btn.addEventListener("click", () => {
                    const idx = parseInt(btn.getAttribute("data-index"));
                    carrito.splice(idx, 1);
                    actualizarCarritoUI();
                });
            });
        }
    }

    // EVENTOS DE CANTIDAD EN MODAL
    const btnMenos = document.getElementById("btn-cantidad-menos");
    const btnMas = document.getElementById("btn-cantidad-mas");

    if (btnMenos && btnMas) {
        btnMenos.addEventListener("click", () => {
            if (cantidadActual > 1) {
                cantidadActual--;
                document.getElementById("input-cantidad").value = cantidadActual;
                actualizarBotonWhatsApp();
            }
        });

        btnMas.addEventListener("click", () => {
            if (cantidadActual < 10) {
                cantidadActual++;
                document.getElementById("input-cantidad").value = cantidadActual;
                actualizarBotonWhatsApp();
            }
        });
    }

    document.querySelectorAll('input[name="opcionColor"]').forEach(radio => {
        radio.addEventListener("change", actualizarBotonWhatsApp);
    });

    // FAVORITOS
    function toggleFavorito(id, btn) {
        const prod = productos.find(p => p.id === id);
        const icon = btn.querySelector("i");
        const index = favoritos.findIndex(f => f.id === id);

        if (index === -1) {
            favoritos.push(prod);
            icon.classList.remove("bi-heart");
            icon.classList.add("bi-heart-fill", "text-danger");
        } else {
            favoritos.splice(index, 1);
            icon.classList.remove("bi-heart-fill", "text-danger");
            icon.classList.add("bi-heart");
        }

        actualizarFavoritosUI();
    }

    function actualizarFavoritosUI() {
        if (favCount) favCount.textContent = favoritos.length;

        listaFavoritos.innerHTML = "";

        if (favoritos.length === 0) {
            listaFavoritos.appendChild(favVacio);
        } else {
            favoritos.forEach(item => {
                const itemDiv = document.createElement("div");
                itemDiv.className = "d-flex align-items-center justify-content-between p-2 border-bottom";
                itemDiv.innerHTML = `
                    <div class="d-flex align-items-center gap-3">
                        <img src="${item.img}" alt="${item.nombre}" style="width: 50px; height: 50px; object-fit: cover;" class="rounded">
                        <div>
                            <h6 class="mb-0 text-dark small fw-bold">${item.nombre}</h6>
                            <span class="text-muted small">${item.precio}</span>
                        </div>
                    </div>
                    <button class="btn btn-sm btn-outline-danger border-0 remove-fav" data-id="${item.id}">
                        <i class="bi bi-trash"></i>
                    </button>
                `;
                listaFavoritos.appendChild(itemDiv);
            });

            document.querySelectorAll(".remove-fav").forEach(btnRemove => {
                btnRemove.addEventListener("click", () => {
                    const idToRemove = parseInt(btnRemove.getAttribute("data-id"));
                    favoritos = favoritos.filter(f => f.id !== idToRemove);
                    renderProductos(productos);
                    actualizarFavoritosUI();
                });
            });
        }
    }

    // BUSCADOR EN TIEMPO REAL
    const searchInput = document.getElementById("search-input");
    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            const term = e.target.value.toLowerCase().trim();
            const filtrados = productos.filter(p => 
                p.nombre.toLowerCase().includes(term) || 
                p.material.toLowerCase().includes(term) || 
                p.categoria.toLowerCase().includes(term)
            );
            renderProductos(filtrados);
        });
    }

    // FILTRADO POR DROPDOWN
    document.querySelectorAll(".dropdown-item[data-filter]").forEach(item => {
        item.addEventListener("click", () => {
            const cat = item.getAttribute("data-filter");
            if (cat === "todos") {
                document.getElementById("catalogo-titulo").textContent = "Nuestra Colección";
                renderProductos(productos);
            } else {
                const filtrados = productos.filter(p => p.categoria === cat);
                document.getElementById("catalogo-titulo").textContent = item.textContent;
                renderProductos(filtrados);
            }
        });
    });

    // Carga Inicial
    renderProductos(productos);
});