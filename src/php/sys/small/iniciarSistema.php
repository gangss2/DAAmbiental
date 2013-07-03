<?php

$user = new user($db);
$b1 = $user->initTableCadastro();

if ($b1) {
    $retorno['status'] = true;
    $y[] = utf8_encode('A tabela \'cadastro\' foi iniciada com sucesso');
}

?>
