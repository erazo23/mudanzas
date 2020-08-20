<?php

$submit = $_POST['submit'];
$name = $_POST['name'];
$callnumber = $_POST['callnumber'];
$email = $_POST['email'];
$desc = $_POST['desc'];


if ($name === '' || $callnumber === ''  || $email === ''  || $desc === '' ){
    echo json_encode('error');
    
}else{
    $conn = mysqli_connect('localhost','root','root','fleetdb');
    
    $sql = "INSERT INTO solicitudes (nombre,telefono,correo, descripcion) VALUES ('$name', '$callnumber', '$email','$desc')";

    $resultado = mysqli_query($conn,$sql);

    echo json_encode ('correcto');
}

?>