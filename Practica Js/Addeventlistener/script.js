const h1 = document.querySelector('h1');
const form = document.querySelector('#form')
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const result = document.querySelector('#result')

/*con submit lo que hacemos es escuchar el evento de submit del fomulario,
lo que ocurre es que al darle click al btn escucha el evento pero el formulario 
por defecto tiene una funcion que es recargar la pg, para evitar ese evento se
utilizo el atributo de prevent default para asi evitarlo y que la funcion de suma 
se pueda ejecutar de manera correcta
*/
form.addEventListener('submit', sumarImpurValues)

function sumarImpurValues(event){
    event.preventDefault();
    const resultado = parseInt(input1.value) + parseInt(input2.value);
    result.innerText = "resultado: " + resultado
}
/* en este caso es muy distinto al anterior ya que escucha el evento click del boton
y no tiene por defecto ninguna otra funcion como en el caso del form
ya que el btn es de tipo btn */
btn.addEventListener('click', sumarImpurValues)

function sumarImpurValues(){
    const resultado = parseInt(input1.value) + parseInt(input2.value);
    result.innerText = "resultado: " + resultado
}


