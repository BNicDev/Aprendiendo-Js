var autos = [];
function agregarAutos(marca, modelo, annio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}
 for(var i = 0; i<30; i++){
    var marca = prompt("Ingrese la marca del vehiculo");
    var modelo = prompt("ingrese  un modelo de auto");
    var annio = prompt("ingrese el año del vehiculo");
    autos.push(new agregarAutos(marca,modelo,annio));
 };
  for(let i = 0; autos.length; i++){
    console.log(autos[i]);
  }