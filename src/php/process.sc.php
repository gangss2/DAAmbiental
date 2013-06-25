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

    if ($action == 'startWeb') {
        $user = new user($db);
        $b1 = $user->initTableCadastro();

        if ($b1) {
            $retorno['status'] = true;
            $y[] = utf8_encode('A tabela \'cadastro\' foi iniciada com sucesso');
        }
    } else if (($action == 'sendMailSenha') && (isset($_GET['ra']))) {
        $ra = $_GET['ra'];
        $SQL = "SELECT `senha` FROM `cadastro` WHERE `RA` = $ra";
        $result = $db->query($SQL);
        $linha = mysql_fetch_array($result);
        $senha = $linha['senha'];
        echo var_dump($_REQUEST);
    } else if (($action == 'trocaSenha') && (isset($_GET['senha'])) && (isset($_GET['novaSenha']))) {
        $senha = $_GET['senha'];
        $novaSenha = $_GET['novaSenha'];
        $SQL = "UPDATE `cadastro` SET `senha`=`$novaSenha` WHERE `senha` LIKE `$senha`";
        $result = $db->query($SQL);

        if ($result) {
            $retorno['status'] = true;
            $y[] = utf8_encode('Senha Alterada com sucesso!');
            echo json_decode($retorno);
        } else {
            $retorno['status'] = false;
            $n[] = utf8_encode('Senha de usuário não encontrado!');
            echo json_decode($retorno);
        }
    }
}

if (isset($y))
    $retorno['y'] = $y;
if (isset($n))
    $retorno['n'] = $n;

//echo var_dump($retorno);
echo json_encode($retorno);
?>
