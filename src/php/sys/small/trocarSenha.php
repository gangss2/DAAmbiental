<?php

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

?>
