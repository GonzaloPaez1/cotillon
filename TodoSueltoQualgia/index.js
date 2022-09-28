let usuario = "paezGonzalo";
let contraseña = "12345";

function login() {
  let ingresar = false;
  for (let i = 3; i > 0; i--) {
    let ingresoUsuario = prompt(
      "Ingresa tu usuario Tenés " + i + " oportunidades"
    );
    let ingresoContraseña = prompt(
      "Ingresa tu contraseña Tenés " + i + " oportunidades"
    );
    if (ingresoUsuario === usuario && ingresoContraseña === contraseña) {

      ingresar = true;
      break;
    } else if (ingresoUsuario === usuario && ingresoContraseña != contraseña) {
      alert("Error en su contraseña");
    } else {
      alert("Error, el usuario no existe")
    }
  }
  return ingresar;
}

if (login()) {
  alert("Bienvenido " + usuario + ", ingreso con exito");
  let caja = "caja";
  let bandeja = "bandeja";
  let vasos = "vasos";

  let opcion = prompt(
    "Elegí que quieres agregar al carrito: \n1- caja. \n2 - bandeja. \n3 - vasos. \nPresiona 4 para ver tu carrito.\nPresioná X para finalizar."
  );

  
  let cantidadDeCajas = 0;
  let cantidadDeBandejas = 0;
  let cantidadDeVasos = 0;
  while (opcion != "X" && opcion != "x") {
    //carrito de compras
    switch (opcion) {
      case "1":
        cantidadDeCajas = parseInt(prompt("cuanta cajas quieres"))
        alert("agregaste " + cantidadDeCajas + " cajas al carrito");
        break;
      case "2":
        cantidadDeBandejas = parseInt(prompt("cuanta bandejas quieres"));
        alert("agregaste " + cantidadDeBandejas + " bandejas al carrito");
        break;
      case "3":
        cantidadDeVasos = parseInt(prompt("cuanta vasos quieres"));
        alert("agregaste " + cantidadDeVasos + " vasos al carrito");
        break;
      case "4":
        alert("tu carrito: \n" +"cajas "+ cantidadDeCajas + "\n" + "bandejas " + cantidadDeBandejas + "\n" + "vasos " + cantidadDeVasos);
        break;

      default:
        alert("opcion no valida");
        break;
    }
    opcion = prompt(
      "Elegí que quieres agregar al carrito: \n1- caja. \n2 - bandeja. \n3 - vasos. \nPresiona 4 para ver tu carrito.\nPresioná X para finalizar."
    );
  }
} else {
  alert("demasiados intentos, intentelo mas tarde")
}