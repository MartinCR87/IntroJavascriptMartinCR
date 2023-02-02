//Multiplicamos por tres para definir, piedar, papel o tijera.
//Math.ramdon() siempre devuleve un numero entre 0 y 1(0.00834, 0.45983459, etc).
let respuestaCompu = Math.round (Math.random() * 3);
//Al codificar pensando en posibles errores se le llama condificacion preventiva
let respuestaUsuario = prompt('Que eliges: piedra, papel o tijeras?')

if (respuestaUsuario == 'piedra') {
    //vamso a cambiar la variable por un numero, para comparar con la respuesta de la compu
    respuestaUsuario = 0;
} else if(respuestaUsuario == 'papel'){
    respuestaUsuario = 1;
} else if (respuestaUsuario == 'tijeras'){
    respuestaUsuario = 2;
} else {
    alert('Solo puedes elegir piedra, papel o tijeras')
    throw Error('El usuario no eligio piedra , papel o tijeras')//Acaba el programa
}


if (respuestaCompu == respuestaUsuario) {
    alert('EMpate!!')
} else if(respuestaCompu == 0 && respuestaUsuario == 1) {
    alert('Gana Papel');
    
} else if(respuestaCompu == 0 && respuestaUsuario == 2){
    alert ('Gana Piedra. Elegiste tijeras');

} else if(respuestaCompu == 1 && respuestaUsuario == 0) {
    alert('Perdiste contra papel.Elegiste piedra');
    
} else if(respuestaCompu == 1 && respuestaUsuario == 2){
    alert ('Gana Tijeras');

} else if(respuestaCompu == 2 && respuestaUsuario == 0) {
    alert('Ganaste con piedra!!!');
    
} else if(respuestaCompu == 2 && respuestaUsuario == 1){
    alert ('Perdiste contra tijeras.ELegiste papel');
    //Manejo de errores
}else {
    alert('LA compu hizo trampa')
}