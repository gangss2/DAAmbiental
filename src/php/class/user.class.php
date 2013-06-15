<?php

class user {

    // Funções Construtoras

    function initTableCadastro() {
        $SQL = "CREATE TABLE IF NOT EXISTS `cadastro` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `RA` int(11) NOT NULL,
  `senha` varchar(32) NOT NULL,
  `email` varchar(50) NOT NULL,
  PRIMARY KEY (`ID`),
  UNIQUE KEY `RA` (`RA`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 COMMENT='Dados cadastrais' AUTO_INCREMENT=25 ;";

        $resultado = $this->db->query($SQL);

        if ($resultado > 0) {
            return true;
        } else {
            return false;
        }
    }

    private $db;
    private $ra;
    private $email;

    function __construct($db) {
        $this->db = $db;
    }

    function cadastrar($ra, $senha, $email) {
        $SQL = "INSERT INTO `cadastro` (`ID`, `RA`, `senha`, `email`) VALUES (0,$ra,'$senha','$email')";
        $result = $this->db->query($SQL);

        if ($result) {
            return true;
        } else {
            return false;
        }
    }

    function verify($ra, $senha) {
        $SQL = "SELECT * FROM `cadastro` WHERE `RA` = $ra AND `senha` LIKE '$senha'";
        $result = $this->db->query($SQL);
        $dados = mysql_fetch_array($result);
        if (!$dados) {
            return false;
        } else {
            $this->ra = $dados['RA'];
            $this->email = $dados['email'];
            return true;
        }
    }

    //Getters & Setters ...

    public function getDb() {
        return $this->db;
    }

    public function setDb($db) {
        $this->db = $db;
    }

    public function getRa() {
        return $this->ra;
    }

    public function setRa($ra) {
        $this->ra = $ra;
    }

    public function getEmail() {
        return $this->email;
    }

    public function setEmail($email) {
        $this->email = $email;
    }

}

?>
