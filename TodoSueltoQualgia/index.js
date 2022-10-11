// const registros = [
//   {id: 1, user: "paezGonzalo", password: 12},
//   {id: 2, user: "paezFernando", password: 123},
//   {id: 3, user: "paezFederico", password: 1234},
//   {id: 4, user: "paezFrancisco", password: 12345},
// ]


// let usuario = "paezGonzalo";
// let contraseña = "12345";

// function login() {
//   let ingresar = false;
//   for (let i = 3; i > 0; i--) {
//     let ingresoUsuario = prompt(
//       "Ingresa tu usuario Tenés " + i + " oportunidades"
//     );
//     let ingresoContraseña = prompt(
//       "Ingresa tu contraseña Tenés " + i + " oportunidades"
//     );
//     if (ingresoUsuario === usuario && ingresoContraseña === contraseña) {

//       ingresar = true;
//       break;
//     } else if (ingresoUsuario === usuario && ingresoContraseña != contraseña) {
//       alert("Error en su contraseña");
//     } else {
//       alert("Error, el usuario no existe")
//     }
//   }
//   return ingresar;
// }

// if (login()) {
//   alert("Bienvenido " + usuario + ", ingreso con exito");
//   let caja = "caja";
//   let bandeja = "bandeja";
//   let vasos = "vasos";

//   let opcion = prompt(
//     "Elegí que quieres agregar al carrito: \n1- caja. \n2 - bandeja. \n3 - vasos. \nPresiona 4 para ver tu carrito.\nPresioná X para finalizar."
//   );

  
//   let cantidadDeCajas = 0;
//   let cantidadDeBandejas = 0;
//   let cantidadDeVasos = 0;
//   while (opcion != "X" && opcion != "x") {
//     //carrito de compras
//     switch (opcion) {
//       case "1":
//         cantidadDeCajas = parseInt(prompt("cuanta cajas quieres"))
//         alert("agregaste " + cantidadDeCajas + " cajas al carrito");
//         break;
//       case "2":
//         cantidadDeBandejas = parseInt(prompt("cuanta bandejas quieres"));
//         alert("agregaste " + cantidadDeBandejas + " bandejas al carrito");
//         break;
//       case "3":
//         cantidadDeVasos = parseInt(prompt("cuanta vasos quieres"));
//         alert("agregaste " + cantidadDeVasos + " vasos al carrito");
//         break;
//       case "4":
//         alert("tu carrito: \n" +"cajas "+ cantidadDeCajas + "\n" + "bandejas " + cantidadDeBandejas + "\n" + "vasos " + cantidadDeVasos);
//         break;

//       default:
//         alert("opcion no valida");
//         break;
//     }
//     opcion = prompt(
//       "Elegí que quieres agregar al carrito: \n1- caja. \n2 - bandeja. \n3 - vasos. \nPresiona 4 para ver tu carrito.\nPresioná X para finalizar."
//     );
//   }
// } else {
//   alert("demasiados intentos, intentelo mas tarde")
// }



// function Producto(id, nombre, precio){
//   this.id=id;
//   this.nombre=nombre;
//   this.precio=precio;
// }
// console.log(productos);

// let newProduct = prompt("ingresa el nuevo producto");
// let valorProduct = parseFloat(prompt("ingresa el valor del producto"));
// let idProduct = parseFloat(prompt("ingresa el id del producto"));
// const nuevoProducto = new Producto(idProduct, newProduct, valorProduct);

// console.log(nuevoProducto);

// function cargarProducto(arr, valor){
//   arr.push(valor);
// }

// cargarProducto(productos, nuevoProducto);
// console.log(productos);


const productos = [
  {id: 1, nombre: "cucharas", precio: 100},
  {id: 2, nombre: "platos", precio: 150},
  {id: 3, nombre: "tenedores", precio: 200},
  {id: 4, nombre: "globos", precio: 250},
  {id: 5, nombre: "girnaldas", precio: 300,}
  ];


function filtrar(arr, filtro, param){
  return arr.filter((el) => {
    if(param == "precio"){
      return el[param] <= parseFloat(filtro);
    }else{
    return el[param].includes(filtro);
    }
  })
}

let param = "nombre"
let serch = 190;

let opcion = prompt("Quieres filtrar por precio preciona 1 \nQuieres buscar un producto presiona 2\nQuieres salir presiona cualquier tecla")
if (opcion == 1){
  serch = prompt("ingresa monto a filtrar");
  param = "precio";
}else if(opcion == 2){
  serch = prompt("ingresa producto a buscar");
}
else{
  alert("vuelva pronto");
}

let resultado = filtrar(productos, serch, param);

console.log(resultado);

