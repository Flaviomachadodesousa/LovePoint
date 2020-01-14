<?php

#Receive user input
if(isset($_POST['submit'])){
	$_name = $_POST['name'];
	$_email = $_POST['email'];
	$_telefone = $_POST['telefone'];
	$_mensagem = $_POST['mensagem'];

#Send email
	$from = "flavio.sos.machado@gmail.com";
	$to = "flavio@adamos.com.br";
	$subject = "Site Acompanhants";
	$headers = "De:". $from;

	mail($to, $subject, $_name, $_email, $_telefone, $_mensagem, $headers);

	echo "A mensagem de e-mail foi enviada.";
}
?>