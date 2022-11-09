// const productos = [
//     {id: 1, nombre: "caja multiuso 1", precio: 100, img: "../imagenes/caja1.jpg"},
//     {id: 2, nombre: "caja multiuso 2", precio: 150, img: "../imagenes/caja2.jpg"},
//     {id: 3, nombre: "caja multiuso 3", precio: 200, img: "../imagenes/caja3.jpg"},
//     {id: 4, nombre: "caja multiuso 4", precio: 250, img: "../imagenes/caja4.jpg"},
//     {id: 5, nombre: "caja multiuso 5", precio: 300, img: "../imagenes/caja5.jpg"},
//     {id: 6, nombre: "caja multiuso 6", precio: 350, img: "../imagenes/caja6.jpg"},
//     {id: 7, nombre: "caja multiuso 7", precio: 400, img: "../imagenes/caja7.jpg"},
//     {id: 8, nombre: "caja multiuso 8", precio: 450, img: "../imagenes/caja8.jpg"},
// ];

// CONTENEDOR PARA LOS PRODUCTOS
const shopContent = document.getElementById("shopContent");


//COLOCO TODOS LOS PRODUCTOS DESDE EL JSON  AL HTML VIA JS

fetch("../data/data.json")
    .then(response => response.json())
    .then(datos => {
    datos.forEach((product) => {
    const content = document.createElement("div")
    content.className = "col"
            content.innerHTML = `
            <div class="col">
            <div class="card mb-3 text-bg-warning p-3" style="width: auto;">
                <img src="${product.img}" class="card-img-top"
                    alt="producto">
                <div class="card-body">
                    <h5 class="card-title">${product.nombre}</h5>
                    <h6 class="card-subtitle mb-2 mt-2">x10 unidades</h6>
                    <p class="card-text">25x25x25</p>
                    <h4 class="card-text cardPrecio" id="precioProducto">$${product.precio}</h4>
                    <a href="" class="btn btn-primary">agregar al carrito</a>
                </div>
            </div>
            </div>
                    `;
            shopContent.append(content);
        });

    });