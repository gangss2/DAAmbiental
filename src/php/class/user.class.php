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

}

?>
