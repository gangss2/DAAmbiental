<!DOCTYPE html>
<html>
    <head>

        <!--estilos-->
        <link type="text/css" rel="stylesheet" href="src/css/divsFineStyle.css" />
        <link type="text/css" rel="stylesheet" href="src/css/specific/login.css" />
        <link type="text/css" rel="stylesheet" href="src/css/formInputs.css" />
        <link type="text/css" rel="stylesheet" href="src/css/geral.css" />
        <link type="text/css" rel="stylesheet" href="src/css/paragrafs.css" />
        <!--estilos-->

        <!--icone-->
        <link type="image/png" rel="icon" href="src/imgs/logoIntro.png" />
        <!--icone-->

        <!--Basico-->
        <script src="src/js/basic/AjaxRequest.class.js" type="text/javascript"></script>
        <script src="src/js/basic/basic.func.js" type="text/javascript"></script>
        <script src="src/js/basic/Propriedades.class.js" type="text/javascript"></script>
        <script src="src/js/basic/info.js" type="text/javascript"></script>
        <!--Basico-->
        <!--Sistema-->
        <script src="src/js/popup.js" type="text/javascript"></script>
        <script src="src/js/sistem.js" type="text/javascript"></script>
        <!--Sistema-->

        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>UNIUBE - Diretório Acadêmico - Ambiental</title>
    </head>
    <body>
        <div>
            <img src="src/imgs/logoIntro.png" width="300" height="300" />
            <div class="borderRedonda w200">
                <form action="src/php/login.php">
                    <p class="titulo">LOGIN<a href="registrar.php" class="floatRight"><span class="icon12 info" info="Registre-se">®</span></a></p>
                    <p>R.A.</p>
                    <p><input type="text" value="" name="RA" id="RA" /></p>
                    <p>Senha</p>
                    <p><input type="password" value="" name="senha" id="senha" /></p>
                    <p><input type="submit" value="Logar" class="buttonWhite" /></p>
                </form>
            </div>
        </div>
    </body>
</html>
