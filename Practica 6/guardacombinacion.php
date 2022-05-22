<?php
session_start();
if (isset($_SESSION["contador"])) {
    $contador = $_SESSION["contador"];
} else {
    $contador = 0;
}

if (is_numeric($contador)) {
}
$contador++;
echo $contador;



$arrayCombinacion = array(
$Numero1 => $_POST["Numero1"],
$Numero2 => $_POST["Numero2"],
$Numero3 => $_POST["Numero3"],
$Numero4 => $_POST["Numero4"]
);

$int = (int)$Numero1;
$int = (int)$Numero2;
$int = (int)$Numero3;
$int = (int)$Numero4;


while ($NumeroCombinacion = current($arrayCombinacion)) {
    if ($NumeroCombinacion[0] >= 0 || $NumeroCombinacion <= 9 && $NumeroCombinacion[1] >= 0 || $NumeroCombinacion <= 9 && $NumeroCombinacion[2] >= 0 || $NumeroCombinacion <= 9 && $NumeroCombinacion[3] >= 0 || $NumeroCombinacion <= 9) {
        echo key($arrayCombinacion).' ';
    }else {
        echo("Algún número de la combinación es incorrecto.");
    }
    next($arrayCombinacion);
}

function handlePost() {
    header('Content-Type: text/plain; charset="UTF-8"');
    $arrayCombinacion = file_get_contents('php://input');
    $a = json_decode($arrayCombinacion);
    var_dump($a);
}


$_SESSION = $Numero1.$Numero2.$Numero3.$Numero4;

echo "var resultado = ".json_encode($_SESSION);
