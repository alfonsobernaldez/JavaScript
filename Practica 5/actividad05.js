let refForm = document.forms["Formulario"];
refForm.addEventListener("submit", validaForm);

function validaForm(event) {
    refForm["areatexto"].innerHTML = "";
    let esCorrecto = true;

    if (validaNombre() == false) {
        esCorrecto = false;
    }

    if (esCorrecto == false) {
        event.preventDefault();
    }
    //setCookie("nombre",refForm["nombre"].value);
    
}

//var nombre = document.getElementById("inputNombre").innerHTML;

//GALLETICAS
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
}

//VALIDACION DEL INPUT NOMBRE
var eleNombre = document.getElementById("inputNombre");
inputNombre.addEventListener("keyup", validaNombre);

function validaNombre() {

    let expN1 = new RegExp("^[A-z]{3,20}")

    let correcto = expN1.test(inputNombre.value);
    correcto = inputNombre.value.match(expN1);


    if (correcto) {
        inputNombre.nextElementSibling.innerHTML = "nombre Correcto";

    } else {
        inputNombre.nextElementSibling.innerHTML = "nombre Incorrecto";
    }
}

//VALIDACION DEL CODIGO DE BARRAS
var eleCodigo = document.getElementById("inputCodigo");
inputCodigo.addEventListener("keyup", validaCodigo);

function validaCodigo() {

    let expC1 = new RegExp("^[0-9]{13}")

    let codigoCorrecto = expC1.test(inputCodigo.value);
    codigoCorrecto = inputCodigo.value.match(expC1);

    if (codigoCorrecto) {

        inputCodigo.nextElementSibling.innerHTML = "Codigo de barras Correct"

    } else {

        inputCodigo.nextElementSibling.innerHTML = "Codigo de barras incorrecto, debe de contener 13 números, nada más."
    }

}

//VALIDACION DE LA FECHA
/*
var eleFecha = document.getElementById("divFecha");
divFecha.addEventListener("keyup", validaFecha);


function validaFecha() {

    var fecha = new Date(dia, month, year);
    var fecharegExp = RegExp()

    let fechaCorrecta = fecharegExp.test(divFecha.value);
    fechaCorrecta = divFecha.value.match(fecha);

    var dia = document.getElementById("dia").value;
    var month = document.getElementById("mes").value;
    var year = document.getElementById("year").value;


    if (isNaN(fecha)) {
        divFecha.nextElementSibling.innerHTML = "no es una fecha valida";
        return false;
    } else {

        divFecha.nextElementSibling.innerHTML = "";
        return true;
    }
}
*/
var eleFecha = document.getElementById("divFecha");
divFecha.addEventListener("keyup", validaFecha);

function validaFecha() {
    var date = parseInt($('#date').val());
    var month = parseInt($('#month').val());
    var year = parseInt($('#year').val());
    if (isNaN(date) || isNaN(month) || isNaN(year)) {
      console.log('formato incorrecto');
      return false;
    } else {
      if (date > 31 || date < 1) {
        console.log('fecha incorrecta');
        return false;
      } else if ((month==4 || month==6 || month==9 || month==11) && date ==31) {
        console.log('fecha incorrecta');
        return false;
      } else if (month==2) {
       var isleap = (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0));
        if (date> 29 || (date ==29 && !isleap))
        console.log('día incorrecto');
          return false;
      }
      if (month > 12 || month < 1) {
        console.log('mes incorrecto');
        return false;
      } 
      if (year > 2050 || year < 1900) {
        console.log('año incorrecto');
        return false;
      } 
    }
  };

//3.	Controla que si no se selecciona algún tipo de alimento (Congelado, Fruta o Snak) no se envíe el formulario 
//al clicar en Regístrate.
function validaCheck() {

    var check = document.getElementById("seleccion");

    if (!check.cheked) {
        alert("debe seleccionar un tipo de alimento");
        return false;
    }
    return true;
}



function limpiaForm() {


}

//5.Programa con JavaScript que al clicar sobre Guardar Datos se guarden todos los datos de los inputs en una cookie 
// para cada input. Pej: para el input inputNombre crea una cookie que guarde su valor, para el input inputCodigo crea otra 
// cookie con su valor, etc...)


//SOLO ME FUNCIONA EN MOZILLA FIREFOX
function guardaDatos(){

    setCookie("inputNombre", refForm["inputNombre"].value, 5);
    setCookie("inputCodigo", refForm["inputCodigo"].value, 5);
    console.log(refForm["inputCodigo"].value)
 
    setCookie("day", refForm["day"].value, 5);
    console.log(refForm["day"].value)
    setCookie("month", refForm["month"].value, 5);
    setCookie("year", refForm["year"].value, 5);

    setCookie("oferta", refForm["oferta"].value, 5);
    setCookie("seleccion",refForm["seleccion"].value);
  
}


//6.	Programa con JavaScript que al clicar sobre Recupera Datos se sustituya el valor de los inputs por el valor 
//almacenado en su correspondiente cookie.
//  




//PRUEBA RECUPERAR CUKIS
var recuperaGalleticas = document.getElementById("recupera");
function recuperaDatos() {
    
    if (document.cookie != "") {
        console.log("contiene cookie");
        areatexto.innerHTML += "Data recovered " + "\n";
        cookies = document.cookie.split(";");
        console.log(cookies);

        for (var i = 0; i < cookies.length; i++) {
            cookie = cookies[i].trim().split("=");
            if (cookie[0] == "inputNombre") {
                console.log(cookie[1]);
                document.getElementById("inputNombre").value = cookie[1];
            }
            if (cookie[0] == "inputCodigo") {
                console.log(cookie[1]);
                document.getElementById("inputCodigo").value = cookie[1];
            }
            if (cookie[0] == "day") {
                console.log(cookie[1]);
                document.getElementById("day").value = cookie[1];
            }
            if (cookie[0] == "month") {
                console.log(cookie[1]);
                document.getElementById("month").value = cookie[1];
            }
            if (cookie[0] == "year") {
                console.log(cookie[1]);
                document.getElementById("year").value = cookie[1];
            }
            if (cookie[0] == "seleccionTipo") {
                var selectOferta = document.getElementsByName("seleccion");
                var s1 = document.getElementById("1");
                var s2 = document.getElementById("2");
                var s3 = document.getElementById("3");
                if(cookie[1] == "congelado"){
                    s1.cheked = true;
                }
                if(cookie[1] == "fruta"){
                    s2.cheked = true;
                }
                if(cookie[1] == "snack"){
                    s3.cheked = true;
                }
            }
            if(cookie[0] == "productoOferta"){
                if(cookie[1] == "normal"){
                    document.getElementById("oferta").selecedIndex = 0;
                }
                if(cookie[1] == "2x1"){
                    document.getElementById("oferta").selecedIndex = 1;
                }
                if(cookie[1] == "20%"){
                    document.getElementById("oferta").selecedIndex = 2;
                }
                if(cookie[1] == "10%"){
                    document.getElementById("oferta").selecedIndex = 3;
                }
            }
        }
    }
}