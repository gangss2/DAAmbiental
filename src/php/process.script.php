<?php

/*
 * É necessário setar o post 'a'
 */

require_once './class/sql/db.class.php';
require_once './class/user.class.php';

$db = new db();

session_start();

if (!isset($_GET['a'])) {
    $retorno['status'] = false;
    $erro[] = "Ação não encontrada.";
    $retorno['error'] = $erro;
    echo json_encode($retorno);
    exit();
}
$action = $_GET['a'];

/*
 * Recuperar a senha
 */

if (($action == 'trocaSenha') && (isset($_GET['senha'])) && (isset($_GET['novaSenha']))) {
    $senha = $_GET['senha'];
    $novaSenha = $_GET['novaSenha'];
    $SQL = "UPDATE `cadastro` SET `senha`=`$novaSenha` WHERE `senha` LIKE `$senha`";
    $result = $db->query($SQL);

    if ($result) {
        $retorno['status'] = true;
        $retorno['message'] = 'Senha Alterada com Sucesso!';
        echo json_encode($retorno);
        exit();
    } else {
        $retorno['status'] = false;
        $erro[] = 'Senha de usuário não encontrado!';
        $retorno['error'] = $erro;
        echo json_encode($retorno);
        exit();
    }
}
?>
