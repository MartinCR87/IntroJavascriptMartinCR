// Compruebalo en la consola
var numero = 11;
console.log(0 <= numero); // imprima true o false dependiendo de se cumpla o no la condicion
console.log(numero >= 0);

var numero = -500;
console.log(0 <= numero);
console.log(numero >= 0);

//Ejercicio 2
let edadMinima = 18;
let edadMaxima = 65;

let edad =15;
console.log("Es un buen candidato?");
console.log(edadMinima <= edad && edad <=edadMaxima);

//Ejercicio3;
// let usuario = 'Martin';
//prompt nos sirve para pedirle datos al usuario en forma de palabras/strings/cadenas
let usuario = prompt ('Dime tu nombre?')
let usuarioEnBaseDeDatos = 'Martin';

/* console.log('El usuario es el mismo?')
console.log(usuario == usuarioEnBaseDeDatos);

console.log('Si son diferentes, debo echarlos?')
console.log(usuario != usuarioEnBaseDeDatos); */

if (usuario != usuarioEnBaseDeDatos) {
    console.log('Adios no eres bienvenido')
    alert('Adios no eres bienvenido')
} else {
    console.log('Bienvenido Pasele a lo barrido')
    alert('Bienvenido Pasele a lo barrido')
}


/* Estructura recomendada en Js:
1)Variables
2)Funciones
3)Ejecucion */