<?
$para = "prueva@gmail.com";
$nombre = $_POST["nombre"];
$asunto = "MiWebsite enviado por $nombre: ".$_POST["asunto"];
$mensaje = $_POST["mensaje"];
$de = $_POST["mail"];

$headers  = "MIME-Version:1.0;\r\n";
$headers .= "Content-type: text/html; \r\n charset=utf-8; \r\n" ;
$headers .= "From: $de\r\n";
$headers .= "To: $para; \r\n Subject:$asunto \r\n";

if(mail($para,$asunto,$mensaje,$headers))
	echo "Enviado Correctamente";
else
	echo "Envio Fallido";
?>