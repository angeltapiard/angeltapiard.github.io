<?php
//conectamos con el servidor
$conectar = mysqli_connect('localhost', 'root', '', 'prueba');

//verificamos la conexion
if (!$conectar) {
    echo "No se pudo conectar con la base de datos";
} else {
    echo "Conexión exitosa";
}

//recuperar las variables
$nombre = $_POST['nombre'];
$correo = $_POST['correo'];
$mensaje = $_POST['mensaje'];

//hacemos la sentencia de sql
$sql = "INSERT INTO datos VALUES('$nombre','$correo','$mensaje')";

//ejecutamos la sentencia SQL
$ejecutar = mysqli_query($conectar, $sql);

//verificamos la ejecucion
if (!$ejecutar) {
    echo "Hubo un error";
} else {
    echo "<br>Datos enviados<br><a href='https://angeltapiard.github.io/Practica%209.%20Formulario%20con%20Base%20de%20Datos/Formulario/index.html'>Volver</a>";
}
?>
