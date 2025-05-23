const boton = document.getElementById( 'boton');

boton.addEventListener('click', () => {

const nombre = document.getElementById('inputNombre').value;
const apellido = document.getElementById('inputApellido').value;
const edad = parseInt(document.getElementById('inputEdad').value);
const altura = parseInt(document.getElementById('inputAltura').value);
const correo = document.getElementById('inputCorreo').value;
const resultado1 = document.getElementById("printValido");
const resultado2 = document.getElementById("printInvalido");



const arrValido = [];
const arrInvalido= [];

if ( nombre != "" && apellido != "" && nombre.length < 50 && apellido.length < 50 ) {
    arrValido.push(` nombre y apeliido : ${nombre},  ${apellido}`);


} else if ( nombre === "" && apellido === "" || nombre.length > 50 && apellido.length > 50 ){
    arrInvalido.push("Nombre y apellido invalido");
}

if ( edad >= 18 && !isNaN(edad) )  {
arrValido.push(`${edad}`);

    } else if ( edad <0 && edad < 18 || isNaN(edad)) {
    arrInvalido.push(" el sujeto debe ser mayor de edad");

    }

if(  altura> 0 && altura < 230 && !isNaN(altura)){
        arrValido.push(`${altura}`);
    
    } else if (isNaN(altura) || altura < 0 ||altura >230){
        arrInvalido.push("altura no valida");

    }
if (correo != "" && correo.includes("@")){
        arrValido.push(`${correo}`);

    } else if (correo === "" || !correo.includes("@")){
        arrInvalido.push("usuario incorrecto");

    }

if (arrValido.length > 0){
        resultado1.innerHTML = arrValido.join("<br/>")
    }

if (arrInvalido.length > 0){
        resultado2.innerHTML = arrInvalido.join("<br/>");
    }

console.log(arrValido, arrInvalido);

});