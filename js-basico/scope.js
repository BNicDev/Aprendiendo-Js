var miNombre = "nicolas"; // declarada a nivel global si la llamo fuera de la funcion devuelve un valor
 function nombre(){
    var miAapellido = "Pizarro" // declarada a nivel local fuera de la funcion no devuelve nada
    console.log(miNombre + "" + miAapellido);
 }
 nombre();
 //devuelve Nicolas Pizarro

 