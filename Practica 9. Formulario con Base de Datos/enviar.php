<?php
if(isset($_POST['email'])) {
 $nombre = $_POST['nombre'];
 $email = $_POST['email'];
 $asunto = $_POST['asunto'];
 $mensaje = $_POST['mensaje'];

 $destinatario = $email;
 $asunto = "Asunto: " . $asunto;
 $mensaje = "Nombre: " . $nombre . "\nEmail: " . $email . "\nMensaje: " . $mensaje;

 mail($destinatario, $asunto, $mensaje);
 echo "Correo enviado exitosamente!!!";
}
?>
