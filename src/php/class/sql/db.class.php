<?php

class db {

    private $host;
    private $login_db;
    private $senha_db;
    //
    private $db; // ligação
    private $basedados; // database

    function __construct($iniCfgs) {
        $this->host = $cfgs->getHost();
        $this->senha_db = $cfgs->getSenha_db();
        $this->login_db = $cfgs->getLogin_db();

        $this->db = mysql_connect($this->host, $this->login_db, $this->senha_db);
        $this->basedados = mysql_select_db($this->database, $this->db);
    }

    function query($SQL) {
        return mysql_query($SQL, $this->db);
    }

}

?>
