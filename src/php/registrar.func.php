<?php

/**
 * Array(
 * status => true or false,
 * response => [ ],
 * error => aviso de erros
 * 
 */
session_start();

require './class/sql/db.class.php';
require './class/user.php';

$db = new db();
$user = new user($db);

if (!isset($_POST['ra'])) {
    $return['status'] = false;
    $return['error'] = "Favor digitar um valor para o RA!";
    exit();
} else if (!isset($_POST['senha'])) {
    $return['status'] = false;
    $return['error'] = "Favor digitar uma senha!";
    exit();
} else if (!isset($_POST['email'])) {
    $return['status'] = false;
    $return['error'] = "Favor digitar um valor para o e-mail!";
    exit();
}


$ra = $_POST['ra'];
$senha = $_POST['senha'];
$email = $_POST['email'];

$result = $user->cadastrar($ra, $senha, $email);

if ($result) {
    $return['status'] = true;
    $return['response'] = 'Cadastro efetuado com sucesso!';

    echo json_encode($result);
} else {
    $return['status'] = false;
    $return['error'] = 'O cadastro não foi efetuado!';

    echo json_encode($result);
}
?>
