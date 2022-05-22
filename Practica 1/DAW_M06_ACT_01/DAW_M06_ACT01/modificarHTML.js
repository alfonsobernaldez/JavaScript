console.log("éste mensaje se muestra por consola");


//accedemos al elemento con id "titulo" para que contenga el valor "TITULO MODIFICADO"
document.getElementById("titulo").innerHTML="TITULO MODIFICADO";

//accedemos al elemento con id "ordenCorrecto" para que contenga el valor "CUIDADO CON EL ORDEN" 
function ordenCorrecto(){

    var mensaje = " CUIDADO CON EL ORDEN ";
     console.log(mensaje);
 }
/**Al ejecutar la función saluda, introduce en #mensaje
 *  el valor pasado por parametro
 */
function saluda(){
    
     window.alert("cuidado con las mayusculas");
}

