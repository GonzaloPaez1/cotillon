const btnIngresar = document.querySelector("#ingresar"),
usuarioReg = document.querySelector("#usuarioReg"),
contraseniaReg = document.querySelector("#contraseniaReg");

function inicioSesion(usuarios){
    let userFound = usuarios.find((usuario)=>{
        return usuario.username === usuarioReg.value && usuario.password === contraseniaReg.value
    })

let ingreso;
if (userFound){
    window.location.href= "./index.html";
   ingreso = true;
   return ingreso
}else{
    document.querySelector("#warnings").innerText = "usuario incorrecto"
    ingreso = false;
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
    if(ingreso == true){
        setTimeout(() => {
            titlee.classList.remove("hide")},3000
        );
        setTimeout(() => {
            titlee.classList.add("active")},3000
        );
    }
});

