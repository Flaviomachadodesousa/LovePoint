<?php

// The message
$_name = $_POST['name'];
$_email = $_POST['email'];
$_telefone = $_POST['tel'];
$_mensagem = $_POST['msg'];

$email_telefone = " Nome: " . $_name . "\n Email: " . $_email . "\n Telefone: " . $_telefone . "\n";

// Send
mail('flavio.sos.machado@gmail.com' ,'Site Acompanhats' , $email_telefone . " Mensagem: " . $_mensagem);

?>