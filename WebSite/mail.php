<?php

#Receive user input
$name = $_POST['name'];
$email = $_POST['email'];
$telefone = $_POST['telefone'];
$mensagem = $_POST['mensagem'];

#Send email
$from = "flavio.sos.machado@gmail.com";
$to = "flavio.sos.machado@gmail.com";
$subject = "Site Acompanhants";
$headers = "De:". $from;

mail($to, $subject, $name, $email, $telefone, $mensagem, $headers);

echo "A mensagem de e-mail foi enviada.";


?>