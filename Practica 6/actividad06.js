

function guardaCombinacion(){

    
    let Numero1 = document.getElementById("Numero1").value;
    console.log(Numero1);
    
    let Numero2 = document.getElementById("Numero2").value;
    console.log(Numero2);
    
    let Numero3 = document.getElementById("Numero3").value;
    console.log(Numero3);
    
    let Numero4 = document.getElementById("Numero4").value;
    console.log(Numero4);
    
    var guardaCombinacion = {"Numero1": Numero1, "Numero2": Numero2, "Numero3": Numero3, "Numero4": Numero4};

    console.log(guardaCombinacion)
    console.log("hola que tal")

    let peticion = new XMLHttpRequest();
    peticion.open("POST","guardacombinacion.php", true);
    peticion.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    peticion.onreadystatechange = function(){
        if(peticion.readyState==4){
            if(peticion.status==200){
                console.log(peticion.responseText);

                let jsonRespuesta=JSON.parse(guardaCombinacion.toString());

                console.log(jsonRespuesta);
                console.log(jsonRespuesta.guardaCombinacion);
              
            }else{ console.log("no se ha encontrado el recurso");}
        }
    }

    peticion.send();


}

function checkCombinacion() {

    let numcheck1 = document.getElementById("Numero1comprueba").value;
    console.log(numcheck1);

    let numcheck2 = document.getElementById("Numero2comprueba").value;
    console.log(numcheck2);

    let numcheck3 = document.getElementById("Numero3comprueba").value;
    console.log(numcheck3);

    let numcheck4 = document.getElementById("Numero4comprueba").value;
    console.log(numcheck4);

    console.log(numcheck1 + numcheck2 + numcheck3 + numcheck4)

    console.log("Adiosi")

    let peticion2 = new XMLHttpRequest();
    peticion2.open("POST","checkCombinacion.php", true);
    peticion2.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    peticion2.onreadystatechange = function(){
        if(peticion2.readyState==4){
            if(peticion2.status==200){
                console.log(peticion2.responseText);
                //TODO GESTIONAR LA RESPUESTA JSON
                let jsonRespuesta=JSON.parse(peticion.responseText);
                console.log(jsonRespuesta);
                console.log(jsonRespuesta.numcheck1);
                console.log(jsonRespuesta.numcheck2);
                console.log(jsonRespuesta.numcheck3);
                console.log(jsonRespuesta.numcheck4);

                console.log(jsonRespuesta["Numero1comprueba"]);
                console.log(jsonRespuesta["Numero2comprueba"]);
                console.log(jsonRespuesta["Numero3comprueba"]);
                console.log(jsonRespuesta["Numero4comprueba"]);

              
               

            }else{ console.log("no se ha encontrado el recurso");}
        }
    }
    peticion2.send(Numero1comprueba + Numero2comprueba + Numero3comprueba + Numero4comprueba);
}