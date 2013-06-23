<?php

session_start();

require_once './class/sql/db.class.php';
require_once './class/user.class.php';

$db = new db();
$user = new user($db);


$retorno['status'] = false;

if (!(isset($_GET['ra'])) || (!isset($_GET['senha']))) {
    if (!isset($_GET['ra'])) {
        $erro[] = 'Digite um RA!';
    }
    if (!isset($_GET['senha'])) {
        $erro[] = 'Digite uma senha!';
    }

    $retorno['error'] = $erro;
    echo json_encode($retorno);
} else {

    $ra = $_GET['ra'];
    $senha = $_GET['senha'];

    $logar = $user->verify($ra, $senha);

    if ($logar) {
        $_SESSION['user'] = $user;
        $retorno['status'] = true;
        echo json_encode($retorno);
    } else {
        $erro[] = 'Par RA Senha não encontrado, cadastre-se!';
        $retorno['error'] = $erro;
        echo json_encode($retorno);
    }
}
?>
