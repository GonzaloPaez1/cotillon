const btnIngresar = document.querySelector("#ingresar"),
usuarioReg = document.querySelector("#usuarioReg"),
contraseniaReg = document.querySelector("#contraseniaReg");

function inicioSesion(usuarios){
    let userFound = usuarios.find((usuario)=>{
        return usuario.username === usuarioReg.value && usuario.password === contraseniaReg.value
    })
let ingreso = false;
console.log(ingreso);
if (userFound){
    window.location.href= "./index.html";
    ingreso = true;
}else{
    document.querySelector("#warnings").innerText = "usuario incorrecto"
    
} 
return ingreso;
}
function ingresoDeTexto(){
    document.querySelector("#warnings").innerText = "usuario incorrecto"
}
function recuperarLS(){
    let datos = JSON.parse(localStorage.getItem("usuarios"));
    return datos;
}

const usuariosLS = recuperarLS();

btnIngresar.addEventListener("click", (e) =>{
    e.preventDefault();
    inicioSesion(usuariosLS);
    
});

