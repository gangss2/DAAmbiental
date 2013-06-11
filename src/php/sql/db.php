<?php

class db {

//    private $tabela = "dados"; //o nome de sua tabela
    // CFGTROCA
//    --
//    --
//    private $host = "127.0.0.1"; //endereço do seu servidor MySQL
//    private $database = "webplini_contraCTBC"; //o database que conterá sua tabela, muitas vezes seu próprio login
//    private $login_db = "root"; //login usado no MySQL
//    private $senha_db = ""; //senha usado no MySQL
//    --
//    --
//    private $database = "webplini_contraCTBC"; //o database que conterá sua tabela, muitas vezes seu próprio login
//    private $host = "localhost"; //endereço do seu servidor MySQL
//    private $login_db = "webplini_scripts"; //login usado no MySQL
//    private $senha_db = "rootMASTER$$"; //senha usado no MySQL
//    --
//    --
    private $db; // ligação
    private $basedados; // database

//    
//    bastauberlandia.net16.com
//    bastauberlandia.net16.com
//    bastauberlandia.net16.com
//    bastauberlandia.net16.com
//    
//    $mysql_host = "mysql3.000webhost.com";
//    $mysql_database = "a5172336_basta";
//    $mysql_user = "a5172336_gangss";
//    $mysql_password = "bastaUberlandia4001";

    function __construct() {
        $this->db = mysql_connect($this->host, $this->login_db, $this->senha_db);
        $this->basedados = mysql_select_db($this->database, $this->db);
    }

    function query($SQL) {
        return mysql_query($SQL, $this->db);
    }

}

?>
