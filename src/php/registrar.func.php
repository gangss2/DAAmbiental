<?php

/**
 * Array(
 * status => true or false,
 * response => Registrado com sucesso,
 * error => aviso de erros
 * 
 */
//error_reporting(E_ALL & ~E_STRICT);
//ini_set("display_errors", 1);

session_start();

require './class/sql/db.class.php';
require './class/user.class.php';

$db = new db();
$user = new user($db);

if (!isset($_POST['ra'])) {
    $retorno['status'] = false;
    $erro[] = "Favor digitar um valor para o RA!";
    $retorno['error'] = $erro;

    echo json_encode($retorno);
    exit();
} else if (!isset($_POST['senha'])) {
    $retorno['status'] = false;
    $erro[] = "Favor digitar uma senha!";
    $retorno['error'] = $erro;

    echo json_encode($retorno);
    exit();
} else if (!isset($_POST['email'])) {
    $retorno['status'] = false;
    $erro[] = "Favor digitar um valor para o e-mail!";
    $retorno['error'] = $erro;

    echo json_encode($retorno);
    exit();
}


$ra = $_POST['ra'];
$senha = $_POST['senha'];
$email = $_POST['email'];

$result = $user->cadastrar($ra, $senha, $email);

if ($result) {
    $retorno['status'] = true;
    $retorno['response'] = 'Cadastro efetuado com sucesso!';

    echo json_encode($retorno);
} else {
    $retorno['status'] = false;
    $erro[] = 'Este RA já se encontra cadastrado!';
    $retorno['error'] = $erro;

    echo json_encode($retorno);
}
?>
