const boton = document.getElementById('boton');

boton.addEventListener('click', () => {

const peso = document.getElementById('inputPeso').value;
const estatura = document.getElementById('inputEstatura').value;



const IMC = Number(peso) / Number(estatura * estatura) ;

window.alert(` IMC: ${IMC}`);


});
