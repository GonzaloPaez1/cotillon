const register = document.querySelector(".register"),
    email = document.querySelector("#email"),
    username = document.querySelector("#username"),
    password = document.querySelector("#password"),
    btnRegistrar = document.querySelector("#registrar"),
    checkBox = document.getElementById("checkBox"),
    aviso = document.getElementById("aviso"),
    password2 = document.getElementById("password2");
    

let usuarios;
let estado = false;
if (localStorage.getItem("usuarios")) {
    usuarios = JSON.parse(localStorage.getItem("usuarios"));
} else {
    usuarios = [];
}

class Usuario {
    constructor(username, email, password, checkBox) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.checkBox = checkBox;
    }
}

function limpiarCampos() {
    username.value = "";
    password.value = "";
    email.value = "";
    checkBox.checked = "";
    password2.value = "";
}

function guardarUsuario(usuario) {
    return usuarios.push(usuario)
}

function guardarEnStorage(element) {
    return localStorage.setItem("usuarios", JSON.stringify(element))
}

btnRegistrar.addEventListener("click", (e) => {
    e.preventDefault();
    let newUser = new Usuario(
        username.value,
        email.value,
        password.value,
        checkBox.checked,
    );
    validarFormulario();
    if (estado) {
        guardarUsuario(newUser);
        limpiarCampos();
        guardarEnStorage(usuarios);
        redireccion();
    }
});




function validarFormulario() {
    if(username.value == "" || username.value.length < 5){
        aviso.innerText = `usuario tiene que tener al menos 5 letras`
    }
    else if(email.value == ""){
        aviso.innerText = `email incompleto`
    }
    else if (password.value != password2.value || password.value == "" || password2.value == "") {
        aviso.innerText = `revisa que las contraseñas`
    } 
    else {
        aviso.innerText = `enviando...`
        estado = true;
    }return estado
}

// funcion para una vez registrado entrar al index 
function redireccion(){
    setTimeout(() =>{
        location.href = "../index.html"
    },1000);
}

