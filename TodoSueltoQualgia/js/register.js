const register = document.querySelector(".register"),
email = document.querySelector("#email"),
username = document.querySelector("#username"),
password = document.querySelector("#password"),
btnRegistrar = document.querySelector("#registrar");

let usuarios;
if(localStorage.getItem("usuarios")){
    usuarios = JSON.parse(localStorage.getItem("usuarios"));
}else{
    usuarios = [];
}

class Usuario{
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }
}

function limpiarCampos(){
    username.value = "";
    password.value = "";
    email.value = "";
}

function guardarUsuario(usuario){
    return usuarios.push(usuario)
}

function guardarEnStorage(element){
    return localStorage.setItem("usuarios", JSON.stringify(element))
}

btnRegistrar.addEventListener("click", (e) =>{
    e.preventDefault();
    let newUser = new Usuario(
        username.value,
        email.value,
        password.value
        );
        guardarUsuario(newUser);
        limpiarCampos();
        guardarEnStorage(usuarios);
        
});


