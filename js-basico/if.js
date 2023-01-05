if (true){ // al tener true en el condicional, lo que este dentro de la funcion va a pasar
    console.log("hola!")
}

if(false){// caso contrario del anterior no se cumple el condicion por ende nunca entra a la funcion
    console.log("hola!")
}

if(false){ // en este caso al tener un else, y al condicional ser falso no entre a la primera etapa de la funcion sino que entra directamente al else que seria la segunda
    console.log("hola!")
}else{
    console.log("chau")// else no lleva condiciones de validacion ya que esta por default cuando la funcion if es falso
}

//para hacer una doble validacion esta esta estructura

if(true){
    console.log("hola")
}else if(false){
    console.log("soy falso")
}else{
    console.log("yo tambien soy falso")
}

//ejemplo

var persona = 18;

if(persona===18){
    console.log("puedes votar, es tu primera vez")
}else if(persona>18){
    console.log("puedes votar!")
}else{
    console.log("no puedes votar")
}

//operador ternario else if en una sola linea

condition ? true : false;

var numero = 1;

var resultado = numero === 1 ? "si soy un uno" : "no soy un uno"
