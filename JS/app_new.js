/*
*JS para la comprobacion de datos del formulario de entrada
*
*/


//Inicializacion de var,objetos, DOM
const nickinput=document.getElementById("nick");
const tamanoinput=document.getElementById("tamano");
const formEntrada=document.getElementById("formEntrada");
const error=document.getElementById("error");


//Funciones de evento
function comprobarForm(event){
    //comprobar cambios
    if(nickinput.value.match(/(?<!\S)[0-9]/))
    {
        nickinput.focus();
        event.preventDefault();
        error.innerText="El campo de nick no puede comenzar con un numero"
        return false;
    }else if(tamanoinput.value=="0"){
        tamanoinput.focus();
        event.preventDefault();
        error.innerText="debe seleccionar un tamaño de panel"
        return false;
    }
    return true;
}

//Inicio de carga de eventos
formEntrada.addEventListener("submit",comprobarForm);
