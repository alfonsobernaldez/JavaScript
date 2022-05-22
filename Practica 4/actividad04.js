
var listaParticipantes = [];


//2.	Programa que al clicar en "AÑADE PARTICIPANTE" se añada el nombre introducido en el input "Nombre" como un nuevo participante con el color de texto igual al escrito en el segundo input "Color".
function addParticipante() {

    var element = document.getElementById('Nombre');

    var colorArray = document.getElementById("Color").value;
    console.log(colorArray);
    element.style.color = colorArray;//no es necesario, pero así se pinta lo de dentro del input Nombre, con el color elegido.

    //COGEMOS EL VALOR DEL INPUT Nombre Y LO AÑADIMOS AL ARRAY DE PARTICIPANTES. Aplicamos directamente el style color al li, no encontraba otra manera.
    let listado = document.getElementById("PARTICIPANTES").innerHTML += '<li id="listadoParticipantes" style="color:' + colorArray + ';">' + element.value + "</li>";
    listaParticipantes.push(listado);

}

//3.	Programa que al clicar en "FINALIZA COMPETICION" el color de fondo del primer participante se cambie a verde, el segundo a azul, el tercero a naranja y el último a rojo. Si solo hay un participante se ha de mostrar verde. Captura los errores.

function finCompeticion() {


    document.getElementById("PARTICIPANTES").firstElementChild.style.backgroundColor = "green";//ACCEDEMOS AL PRIMERO SIEMPRE
    document.getElementById("PARTICIPANTES").children[1].style.backgroundColor = "blue";//ACCEDEMOS AL SEGUNDO SIEMPRE
    document.getElementById("PARTICIPANTES").children[2].style.backgroundColor = "orange";//ACCEDEMOS AL TERCERO SIEMPRE
    document.getElementById("PARTICIPANTES").lastElementChild.style.backgroundColor = "red";//ACCEDEMOS AL ULTIMO SIEMPRE

}

//4.	Programa que al clicaren "BORRA PARTICIPANTE" se borre el LI de la lista de participantes que sea al número de hijo igual al escrito en el 3r input "Posición".

function borraParticipante() {

    let elemABorrar = document.getElementById("PARTICIPANTES");
    let posicion = document.getElementById("Posicion").value;

    elemABorrar.removeChild(elemABorrar.childNodes[posicion]);



}

//5.	Programa que al clicar en "MUEVE PARTICIPANTE" se mueva el LI de la lista de participantes que sea al número de hijo igual al escrito en el  3r input "Posición" y se sitúe en la posición escrita en el 4o input "Posición Final".

function mueveParticipante() {

    let moveParticipante = document.getElementById("PARTICIPANTES");
    let posFinalParticipante = document.getElementById("Posicion_Final").value;

    moveParticipante.appendChild(moveParticipante.childNodes[posFinalParticipante]);

}

//6.	Programa que al clicar en "MODIFICA PARTICIPANTE" se cambie el texto del LI de la lista que sea al número de hijo igual al escrito en el 3r input “Posición” y se sustituya por el texto escrito en el 1r input "Nombre".

function modificaParticipante() {

    let cambiaParticipante = document.getElementById("PARTICIPANTES").parentNode;
    let posParticipanteCambiar = document.getElementById("Posicion").value;
    let nombreNuevo = document.getElementById("Nombre").value;
    nombreNuevo = document.createElement("nombreNuevo");

    //cambiaParticipante.insertBefore(nombreNuevo,cambiaParticipante[posParticipanteCambiar].textContent);

    newPosicion = cambiaParticipante.insertBefore(nombreNuevo,cambiaParticipante.replaceChild[posParticipanteCambiar]);
    console.log("holi?")



}