<?php
session_start();

$_SESSION["newsession"]=$value;
echo $_SESSION["newsession"];
$_SESSION["newsession"]=$updatedvalue;


$Numero1comprueba = $_POST["Numero1comprueba"];
$Numero2comprueba = $_POST["Numero2comprueba"];
$Numero3comprueba = $_POST["Numero3comprueba"];
$Numero4comprueba = $_POST["Numero4comprueba"];



$resp = array("Numero1comprueba" => $Numero1comprueba);
$resp["Numero2comprueba"] = $Numero2comprueba;
$resp["Numero3comprueba"] = $Numero3comprueba;
$resp["Numero4comprueba"] = $Numero4comprueba;

intval($resp);

$respuesta_texto = json_encode($resp);


if ($Numero1comprueba >= 0 || $Numero1comprueba <= 9 && $Numero2comprueba >= 0 || $Numero2comprueba <= 9 && $Numero3comprueba >= 0 || $Numero3comprueba <= 9 && $Numero4comprueba >= 0 || $Numero4comprueba <= 9) {
    
    $combinacionCheck = $Numero1comprueba.$Numero2comprueba.$Numero3comprueba.$Numero4comprueba;
} else {

    echo ("ha habido un error");
}
echo ($combinacionCheck);

if($combinacionCheck == $combinacion){

    echo ("COMBINACION CORRECTA");
}else{

    echo("combinacion incorrecta");
}


echo $respuesta_texto;

echo $combinacionCheck;