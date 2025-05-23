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

/*

const boton = document.getElementById("boton");

boton.addEventListener("click" , ()=>{
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const edad = parseInt(document.getElementById("edad").value);
    const estatura = parseInt(document.getElementById("estatura").value)
    const correoElectronico = document.getElementById("correo").value;
    const resultado = document.getElementById("resultado");

    const errores = [];
    if (nombre === "" || nombre.length > 50 ){
        errores.push("El nombre esta vacio y no puede superar los 50 caracteres");
    }

    if (apellido === "" || apellido.length > 50){
        errores.push("El apellido esta vacio y no puede superar los 50 caracteres");
    }

    if (isNaN(edad) || edad < 0){
        errores.push("La edad no puede ser un valor menor a 0");
    }else if(edad < 18){
        errores.push("Debe ser mayor de edad");
    }

    if (isNaN(estatura) || estatura < 0 || estatura >230){
        errores.push("la altura no puede ser menor a 0 y tampoco mayor a 230 cm");
    }

    if (correoElectronico === "" || !correoElectronico.includes("@")){
        errores.push("El correo electronico debe llevar el @ y no puede estar vacio");
    }

    if (errores.length > 0){
        resultado1.innerHTML = errores.join("<br>");
    }
    
    const validaciones = [];

    if(nombre != "" && nombre.length < 50 ){
        validaciones.push(`${nombre}`);
    }

    if (apellido != "" && apellido.length < 50){
        validaciones.push(`${apellido}`);
    }

    if(!isNaN(edad) && edad >= 18){
        validaciones.push(`${edad}`);
    }

    if(!isNaN(estatura) && estatura > 0 && estatura < 230){
        validaciones.push(`${estatura}`);
    }

    if (correoElectronico != "" && correoElectronico.includes("@")){
        validaciones.push(`${correoElectronico}`);
    }

    if (validaciones.length > 0){
        resultado.innerHTML = validaciones.join("<br>")
    }
})
    */