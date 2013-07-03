<?php

/*
 * É necessário setar o post 'a'
 */

# Informa qual o conjunto de caracteres será usado.
header('Content-Type: text/html; charset=utf-8');

require_once './class/cfgs.class.ex.php';
require_once './class/sql/db.class.php';
require_once './class/user.class.php';

$cfg = new ConfigDB();
$db = new db($cfg);

session_start();

if (!isset($_GET['a'])) {
    $retorno['status'] = false;
    $n[] = utf8_encode('Ação não encontrada.');
} else {
    $retorno['status'] = true;
    $action = $_GET['a'];

    /*
     * Recuperar a senha
     */

    if ($action == 'iniciarSistema') {
        include './small/iniciarSistema.php';
    } else if (($action == 'enviarEmail') && (isset($_GET['ra']))) {
        include './small/enviarEmail.php';
    } else if (($action == 'trocaSenha') && (isset($_GET['senha'])) && (isset($_GET['novaSenha']))) {
        include './small/trocarSenha.php';
    }
}

if (isset($y))
    $retorno['y'] = $y;
if (isset($n))
    $retorno['n'] = $n;

//echo var_dump($retorno);
echo json_encode($retorno);
?>
