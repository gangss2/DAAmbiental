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
        <!--Efeitos-->
        <script src="src/js/efects/Elipse.class.js" type="text/javascript"></script>
        <script src="src/js/efects/errorlist.class.js" type="text/javascript"></script>
        <!--Efeitos-->
        <!--Sistema-->
        <script src="src/js/popup.obj.js" type="text/javascript"></script>
        <script src="src/js/cfgs.obj.ex.js" type="text/javascript"></script>
        <script src="src/js/funcs/login.func.js" type="text/javascript"></script>
        <!--Sistema-->
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>UNIUBE - Diretório Acadêmico - Ambiental</title>
    </head>
    <body>
        <div>
            <img src="src/imgs/logoIntro.png" width="300" height="300" />
            <div id="login_form" class="borderRedonda w200">
                <form action="src/php/login.php">
                    <p class="titulo">LOGIN<a href="registrar.php" class="floatRight"><span class="icon12 info" info="Registre-se">®</span></a></p>
                    <p>R.A.</p>
                    <p><input type="text" value="" name="RA" id="RA" /></p>
                    <p>Senha</p>
                    <p><input type="password" value="" name="senha" id="senha" /></p>
                    <p><input type="button" value="Logar" class="buttonWhite" onclick="logar();" /></p>
                </form>
            </div>
            <div id="login_error" class="borderRedonda w200" style="display: none">
                <p class="titulo"><img src="src/imgs/ajax/undone.png" width="16" height="16"> Erro!</p>
                <ul id="login_error_list">
                </ul>
                <p><input type="button" value="<- Voltar" class="buttonWhite" onclick="logar.form();"></p>
            </div>
            <div id="login_done" class="borderRedonda w200" style="display: none">
                <p class="titulo"><img src="src/imgs/ajax/done.png" width="16" height="16"> Logado!</p>
                <p>Carregando a página!</p>
                <p>Aguarde ..</p>
            </div>
    </body>
</html>
