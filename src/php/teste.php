<?php

require './class/sql/db.class.php';
require './class/user.php';

$db = new db();
$user = new user($db);

echo $user->cadastrar(5115052, '6a204bd89f3c8348afd5c77c717a097a', 'pliniopvv@gmail.com');

//
//
//
//    ARQUIVO DB.CLASS.PHP OK!
//
//
//
//require './class/sql/db.class.php';
//
//$db = new db();
//
//$SQL = "SELECT * FROM `ras` LIMIT 0 , 30";
//$result = $db->query($SQL);
//
////echo var_dump($db);
////echo var_dump($result);
//
//$linha = mysql_fetch_array($result);
//do {
//    $ra[] = $linha['RA'];
//    $nome[] = $linha['Nome'];
//} while ($linha = mysql_fetch_array($result));
//
//$retorno[] = $ra;
//$retorno[] = $nome;
//
//echo json_encode($retorno);
//
//
//
//
//    ARQUIVO DB.CLASS.PHP OK!
//
//
//
?>
