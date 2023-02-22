const h1 = document.querySelector('h1'); 
const p = document.querySelector('p');
const parrafito = document.getElementsByClassName('parrafito');
const pid = document.getElementById('pid');
const input = document.querySelector('input');

console.log(input.value)//obtiene el valor del input

// escribiendo html desde js

h1.innerHTML = "patito <br> feo" //sobreescribe el elemento html
h1.innerText = " patito <br> feo"
console.log(h1.getAttribute("pantalla"))
h1.setAttribute("class", "rojo") // cambia la clase del elemento 

h1.classList.add("rojo")//añade una clase nueva al elemento 
h1.classList.remove("platzi")//elimina la clase seleccionada

input.value = "456" //modifica el value del input

const img = document.createElement("img");
img.setAttribute("src", "http://placekitten.com/200/300")
pid.append(img)//agrega el elemento despues del contenido original