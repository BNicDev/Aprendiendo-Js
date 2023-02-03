var miAuto = {
    marca: "chevrolet",
    modelo: "corsa 2",
    annio: 2007
};

miAuto // llama al objeto completo
miAuto.marca// devuelve solo la marca del vehiculo

// objeto con una funcion dentro a esta funcion se le llama metodo

var miAuto = {
    marca: "chevrolet",
    modelo: "corsa 2",
    annio: 2007, 
    detalleDelAuto: function(){
        console.log(`Auto ${this.modelo} ${this.annio}`)
    }
};
miAuto.detalleDelAuto(); //llamo al objeto mi auto ingresando al metodo detalle

