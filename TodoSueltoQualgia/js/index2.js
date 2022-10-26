document.querySelector("#botonIngresar").addEventListener("click", inicioDeSecion);

function limpiarDatos(){
    document.getElementById("usuario").innerHTML = "";
    document.getElementById("contrasenia").innerHTML = "";
}

function inicioDeSecion(){
  let usuario = "";
  let contrasenia = "";
  let acceso = false;

  usuario = document.querySelector("#usuario").value;
  contrasenia = document.querySelector("#contrasenia").value;

  acceso = verificadorDeUsuarios(usuario, contrasenia);
  console.log(acceso);
    
  limpiarDatos;
  
}
