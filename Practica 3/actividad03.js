//ARRAYS GLOBALES



//2. CLASE EXTRA

class Extra{

    
    constructor(nombre, precio, url){
        
        this.nombre = nombre;
        this.precio = precio;
        this.url = url;
        
    }

    getHTML(){
        return "<span><img src= "+this.url+'"/img>" '+ this.precio + "€ </span>"
    }
}

//ARRAY GLOBAL EXTRAS

var extrasDisponibles = new Array();

console.log(extrasDisponibles);


//3 y 6. Añadimos 2 extras al array global

var extra = new Extra();
extra.nombre = "Airbag";
extra.url = "imgs/concha_azul.png";
console.log(extra.getHTML());
extrasDisponibles.push(extra);

var extra2 = new Extra();
extra2.nombre = "Escudo";
extra2.precio = 100;
extra2.url = "imgs/estrella.png";
extrasDisponibles.push(extra2);


//4. CLASE COCHE

class Coche{
 
        nombre = "";
        velocidad = 0;
        extra = [];

        constructor(nombre, velocidad){

            this.nombre = nombre;
            this.velocidad = velocidad;

        }

        addExtra(extra){
            this.extra.push(extra);
        }
        
        agrupExtra(extra){

            var extraCo=" ";
            
            for(let objet in extra){

                extraCo += "["+extra[objet].getHTML()+"]";

            }
        }


        getHTML(){

            return "<span>"+this.nombre+" "+this.velocidad+" km/h "+this.agrupExtra(this.extra)+"</span>"
        }

}

//ARRAY GLOBAL COCHE

let cochesDisponibles = new Array();




//5.  COPIA EL TEXTO Y HA DE SER VALIDADO POR LA CLASE COCHE
var coche = new Coche();
coche.nombre = "Carricoche";
coche.addExtra(extra);
console.log(coche.getHTML());
cochesDisponibles.push(coche);


//8. FUNCION MOSTRAR EXTRAS

let divAsignar = document.getElementById("asignaExtra");
divAsignar.innerHTML+= "<h1> ASIGNA EXTRA </h1>";
let seleExtra = document.getElementById("eligeExtra");
let seleCoche = document.getElementById("eligeCoche");

function mostrarExtras(){ //MOSTRAMOS LOS EXTRAS EN EL HTML RECORRIENDO EL ARRYA E IMPRIMIENDOLO LUEGO 
    
    seleExtra.innerHTML="";

    var muestraExtra = document.getElementById("mostrarExtras");
    muestraExtra.innerHTML = '';

    for(let extrA in extrasDisponibles ){

        document.getElementById('mostrarExtras2').innerHTML += extrasDisponibles[extrA].getHTML();
    }

    /*extrasDisponibles.forEach(function (valor){
        let seleExtra = document.getElementById("mostrarExtras");
        seleExtra.innerHTML+="<option value= '"+valor+"' >"+valor+" </option>";
    });
*/
}

//9. Funcion Mostrar Coches

function mostrarCoche(){

    document.getElementById("mostrarCoche").innerHTML = "<h1>COCHES DISPONIBLES</h1>";

    let seleCoche = document.getElementById("mostrarCoche");
    seleCoche.innerHTML= "";



for(let atributo in cochesDisponibles){

    document.getElementById("mostrarCoche").innerHTML += cochesDisponibles[atributo].getHTML();
    
    /*let seleCoche = document.getElementById("mostrarCoche");
    seleCoche.innerHTML+="<option value= '"+atributo+"' > "+cochesDisponibles[atributo.getHTML]+"</option"
*/
    }   

}

//FUNCION CREARCOCHE 

function annadeCoche(){

    let nuevoCoche = new Coche();
    nuevoCoche.nombre = document.getElementById("nombreCoche").value;
    nuevoCoche.velocidad = document.getElementById("velcoche").value;
    cochesDisponibles[nuevoCoche.nombre] = nuevoCoche;
    mostrarCoche();

}


//FUNCION AÑADIR EXTRA NO FUNCIONA, EL HTML NO PINTA NADA PARECIDO A LO QUE LE PIDO
function annadeExtra(){

    var anadeExtra = document.getElementById("eligeExtra").value;
    console.log(anadeExtra);

    var fotoExtra = document.getElementById("fotoExtras").value;
    console.log(fotoExtra);

    var newExtra = new Extra();
    newExtra.precio = anadeExtra;
    newExtra.url = fotoExtra;
    extrasDisponibles.push(newExtra);

    mostrarExtras();


}