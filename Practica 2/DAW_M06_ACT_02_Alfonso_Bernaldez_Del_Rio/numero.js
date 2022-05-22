
var tiempo;

function temporizador(){ //TEMPORIZADOR QUE CUENTA SG PARA CERRAR VENTANA

    tiempo = setTimeout( finTiempo, 9000);
}

function finTiempo() {//FUNCION QUE CIERRA LA VENTANA

     window.close("Se acabó el tiempo");

    }
 

    function cuentaAtras(){//TEMPORIZADOR QUE MUESTRA CUANTOS SEGUNDOS QUEDAN
        
        let ocho = document.getElementById("cuenta");
       
        setTimeout(function(){ ocho.value = "1"}, 8000);
        setTimeout(function(){ ocho.value = "2"}, 7000);
        setTimeout(function(){ ocho.value = "3"}, 6000);
        setTimeout(function(){ ocho.value = "4"}, 5000);
        setTimeout(function(){ ocho.value = "5"}, 4000);
        setTimeout(function(){ ocho.value = "6"}, 3000);
        setTimeout(function(){ ocho.value = "7"}, 2000);
        setTimeout(function(){ ocho.value = "8"}, 1000);

    }

    
    function numAleatorio(){
        
        console.log(num)
    }

    var num = Math.floor(Math.random() * (10 - 0)) + 0;

    function adivinaNumero(){ //COGEMOS la var aleatoria num Y LA COMPARAMOS EN LA VARIABLE DEL INPUT INTRODUCIDO
             
        let numGuess = document.getElementById("adivina").value;


        if(num > numGuess){
    
            alert("El número es mayor");
            
        }else if( num < numGuess) {
            
            alert("El número es menor");
            
        } else if ( num == numGuess){
            
            alert("Enhorabuena has acertado");
            console.log(finTiempo());

        } else{

            alert("dato erroneo");
        }
}
