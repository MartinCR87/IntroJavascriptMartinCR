// Declarar variables

let userNameCompare = document.querySelector("#userName").value;
let userPasswordCompare = document.querySelector("#userPassword").value;

// Array cuentas
const arrayCuentas = { 
    nombre: 'Mali', 
    contrasena: "Hola", 
    saldo: 200 }
    /* { nombre: "Gera", contrasena: "Contraseña123", saldo: 290 },
    { nombre: "Maui", contrasena: "Contraseña123", saldo: 67 } */
// ]

// Funcion comparacion Usuario 

document.querySelector("#loginButton").onclick = () => {
    let userNameCompare = document.querySelector("#userName").value   
    let userPasswordCompare = document.querySelector("#userPassword").value;
    if (userNameCompare == arrayCuentas.nombre && userPasswordCompare == arrayCuentas.contrasena) {
        alert('Datos correctos')
        location = "movimientos.html";

    } else {
        alert("Usuario y Password incorrectos");

    }

}


// document.querySelector("#retirar").style.display.none


//JS para movimientos.html

// document.querySelector('#hideDiv').onclick.style.display = 'none'

document.querySelector("#aceptarIngresar").onclick = ()=> {
    let num1 = parseFloat(document.querySelector("#ingresar").value)
    let num2 = parseFloat(document.querySelector("#aceptar").value)
}

