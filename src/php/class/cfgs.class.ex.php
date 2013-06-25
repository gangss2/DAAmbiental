<?php

class cfgs {
    /*
     * Básico
     */

    private static $domain;
    private static $phpDir;

    function __construct() {
        self::$domain = 'http://localhost/sites/daambiental/site/';
        self::$phpDir = self::$domain . 'src/php/';
    }

    function getDomain() {
        return self::$domain;
    }

    /*
     * Banco de Dados
     */

    //    private $tabela = "dados"; //o nome de sua tabela
// CFGTROCA
//    --
//    --
    private static $host = "SEU HOST"; //endereço do seu servidor MySQL
    private static $database = "BANCO DE DADOS"; //o database que conterá sua tabela, muitas vezes seu próprio login
    private static $login_db = "LOGIN DO BANCO"; //login usado no MySQL
    private static $senha_db = "SENHA DO BANCO"; //senha usado no MySQL

    public function getHost() {
        return $this->host;
    }

    public function setHost($host) {
        $this->host = $host;
    }

    public function getDatabase() {
        return $this->database;
    }

    public function setDatabase($database) {
        $this->database = $database;
    }

    public function getLogin_db() {
        return $this->login_db;
    }

    public function setLogin_db($login_db) {
        $this->login_db = $login_db;
    }

    public function getSenha_db() {
        return $this->senha_db;
    }

    public function setSenha_db($senha_db) {
        $this->senha_db = $senha_db;
    }


    
    }

?>
