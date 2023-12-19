/*
*JS para la comprobacion de datos del formulario de entrada
*
*/


//Inicializacion de var,objetos, DOM
const nickinput=document.getElementById("nick");
const tamanoinput=document.getElementById("tamano");
const formEntrada=document.getElementById("formEntrada");


//Funciones de evento
function comprobarForm(event){
    //comprobar cambios
    if(nickinput.value.length==0)
    {
        console.log("no hay nick");
        nickinput.focus();
        event.preventDefault();
        return false;
    }else if(tamanoinput.value=="0"){
        console.log("no se ha seleccionado tamaño de panel");
        tamanoinput.focus();
        event.preventDefault();
        return false;
    }
    return true;
}

//Inicio de carga de eventos
formEntrada.addEventListener("submit",comprobarForm);
