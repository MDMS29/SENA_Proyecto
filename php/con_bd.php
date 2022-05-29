<?php
$conexion = null;
$servidor = 'localhost'; //servidor local
$bd = 'registro'; //base de datos
$user = 'root'; //usuario MySQL 
$pass = '1130266003'; //contraseña MySQL
try{
    $conexion = new PDO('mysql:host='.$servidor.';dbname='.$bd, $user, $pass);
}catch(PDOException $e){
    echo "Error de conexion!";
    exit;
}
return $conexion;
?