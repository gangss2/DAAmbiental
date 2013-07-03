<?php

    $ra = $_GET['ra'];
    $SQL = "SELECT `senha` FROM `cadastro` WHERE `RA` = $ra";
    $result = $db->query($SQL);
    $linha = mysql_fetch_array($result);
    $senha = $linha['senha'];
    echo var_dump($_REQUEST);
        
?>
