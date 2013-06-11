<?php
    
    $to = $_GET['to'];
    $subject = $_GET['titulo'];
    $message = $_GET['mensagem'];
    
    echo var_dump($_REQUEST);
    
    $resultado = mail($to, $subject, $message);
    
    echo $resultado;
    
?>
