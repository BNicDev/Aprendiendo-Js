const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const result = document.querySelector('#result')

function btnOnclick(){
    const resultado = parseInt(input1.value) + parseInt(input2.value);
    result.innerText = "resultado: " + resultado
}
