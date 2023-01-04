//declarativas
function miFuncion(){
    return 3;
}
miFuncion();

//expresion

var miFuncion = function(a,b){
    return a + b;
}

miFuncion(3,2);

//ejemplos de funciones
function saludarEstudiantes(estudiante){
    console.log(`hola ${estudiante}`);
}
saludarEstudiantes("nicolas");

// sin console
function sumar(a,b){
    var resultado = a + b;
    return resultado;
}

sumar(3,2);