<?php
    if ($_POST){
        $td = $_POST['txtTD'];
        $id = $_POST['txtDoc'];
        $nom = $_POST['txtNombres'];
        $ape = $_POST['txtApellidos'];
        $tel = $_POST['txtTelefono'];
        $dir = $_POST['txtDir'];
        $fech = $_POST['txtFecha'];
        $hora = $_POST['txtHora'];
        $mot = $_POST['txtMotivo'];
        require_once("conexion.php");
        $conexion ->setAttribute (PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $sql = 'INSERT INTO personas (td, identificacion, nombre, apellido, telefono, direccion, fecha_ing, hora_ing, motivo) VALUES (:td, :i, :n, :a, :t, :d, :f, :h, :m)';
        $stmt = $conexion->prepare($sql);
        $stmt->bindParam(":td", $td);
        $stmt->bindParam(":i", $id);
        $stmt->bindParam(":n", $nom);
        $stmt->bindParam(":a", $ape);
        $stmt->bindParam(":t", $tel);
        $stmt->bindParam(":d", $dir);
        $stmt->bindParam(":f", $fech);
        $stmt->bindParam(":h", $hora);
        $stmt->bindParam(":m", $mot);
        $stmt->execute();
        print("<script> alert('Resgistro Guardado con éxito'); </script>");
    }
?>