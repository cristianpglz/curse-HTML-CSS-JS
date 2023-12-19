/*
*JS para la comprobacion de datos de usuario
*
*/


//Captirar el valor del input nick

const nickinput=document.getElementById('nick');
console.log(nickinput.nodeType);
nickinput.value="Cristian";
console.log(nickinput.value);
//Capturar el valor de select
const tamanoinput=document.getElementById('tamano');
console.log(tamanoinput.value);
console.log(tamanoinput.options[tamanoinput.selectedIndex].tex);

//Ejemplo sobre (eventos
function test(){
console.log("se ha echo un click");}