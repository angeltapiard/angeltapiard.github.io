<?php
//conectamos con el servidor
$conectar = mysqli_connect('aws.connect.psdb.cloud', '9y9krlz6dnxx3mnx8yh2', 'pscale_pw_PJrQj1kuXZ0SxXoi7NHSFiDynZpUcNnoaMDPWzTjKUA', 'prueba');

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
 echo "<br>Datos enviados<br><a href='index.html'>Volver</a>";
}

?>
