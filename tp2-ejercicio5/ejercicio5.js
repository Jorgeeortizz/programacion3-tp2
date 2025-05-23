const boton = document.getElementById( 'boton');

boton.addEventListener('click', () => {


const base = Number(document.getElementById('inputBase').value);
const alturaA = Number(document.getElementById('valorA').value);
const alturaB = Number(document.getElementById('valorB').value);
const resultado = document.getElementById('resultado');

const areaRectangulo = base * alturaB;
const areaTriangulo = (base * (alturaA - alturaB)) / 2;
const areaResultado = areaRectangulo + areaTriangulo;

resultado.innerText = `area total del terreno : ${areaResultado}`;
console.log(areaResultado);

});

