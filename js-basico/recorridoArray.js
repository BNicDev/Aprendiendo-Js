var articulo = [
    {nombre: "bici", costo:3000},
    {nombre:"tv", costo: 2500},
    {nombre:"libro", costo: 320},
    {nombre: "celular", costo:10000},
    {nombre: "laptop", costo: 20000},
    {nombre: "teclado", costo: 500},
    {nombre: "audifonos", costo: 1700}
];
var filtrados = articulo.filter(function(articulo){
    return articulo.costo <= 500
}) // devuelve un array de articulos que sus costos sean menores a 500

var nombreArticulos = articulo.map(function(articulo){
    return articulo.nombre
}) // devuelve un array de nombres de los articulos

var encuentraArticulo = articulo.find(function(articulo){
    return articulo.nombre === "laptop"
}) // encuentra un articulo en especifico

articulo.forEach(function(articulo){
    console.log(articulo.nombre);
})// filtra sobre el mismo array 

var articulosBaratos = articulo.some(function(articulo){
    return articulo.costo <= 700;
})// valida true o false 