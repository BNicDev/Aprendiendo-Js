[] //estructura de datos de tipo objeto

var frutas = ["manzana", "banana", "pera"];

console.log(frutas); // devuelve el array con todos los elementos
console.log(frutas.length)//devuelve la longitud del array
console.log(frutas[0])//devuelve el primer valor del array

var masFrutas = frutas.push("uvas"); // este metodo lo que hace es que agrega elementos al array original

var ultimo = frutas.pop("uvas")//elimina el ultimo elemento del array;

var nuevaLongitud = frutas.unshift("melon")//agrega un elemento al array pero en vez de agregarlo al final lo agrega al principio del array

var borrarFruta = frutas.shift("melon"); // borra el elemento que se agrego en la primera posicion, no importa el valor que se ponga dentro del parentesis siempre borra el elemento que se agrego en primera posicion;

var posicion = frutas.indexOf("banana"); // te devuelve el indice de posicion del elemento que mandaste a buscar


