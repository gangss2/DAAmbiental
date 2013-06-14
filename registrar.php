<!DOCTYPE html>
<html>
    <head>
        <link type="text/css" rel="stylesheet" href="src/css/divsFineStyle.css" />
        <link type="text/css" rel="stylesheet" href="src/css/specific/register.css" />
        <link type="text/css" rel="stylesheet" href="src/css/formInputs.css" />
        <link type="text/css" rel="stylesheet" href="src/css/geral.css" />
        <link type="text/css" rel="stylesheet" href="src/css/paragrafs.css" />

        <link type="image/png" rel="icon" href="src/imgs/logoIntro.png" />
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

        <!--FB-->
        <!--<script src="src/API/fb/fb.api.js" type="text/javascript"></script>-->
        <!--FB-->
        <!--Basico-->
        <script src="src/js/basic/AjaxRequest.class.js" type="text/javascript"></script>
        <script src="src/js/basic/basic.func.js" type="text/javascript"></script>
        <script src="src/js/basic/Propriedades.class.js" type="text/javascript"></script>
        <script src="src/js/basic/info.js" type="text/javascript"></script>
        <!--Basico-->
        <!--efects-->
        <script src="src/js/efects/errorlist.class.js" type="text/javascript"></script>
        <script src="src/js/efects/Elipse.class.js" type="text/javascript"></script>
        <script src="src/js/efects/ManagerEfects.class.js" type="text/javascript"></script>
        <!--efects-->
        <!--Sistema-->
        <script src="src/js/registrar.func.js" type="text/javascript"></script>
        <script src="src/js/popup.obj.js" type="text/javascript"></script>
        <!--Sistema-->
        <title>UNIUBE - Diretório Acadêmico - Ambiental</title>
    </head>
    <body>
        <div class="center">
            <img src="src/imgs/logoIntro.png" width="300" height="300" />
            <div id="formulario">
                <div class="borderRedonda w400 font_nice">
                    <p class="titulo">Registrando</p>
                    <p>Digite seu R.A.</p>
                    <p><input type="text" value="" id="ra" /></p>
                    <p>Digite seu E-mail</p>
                    <p><input type="text" value="" id="email" /></p>
                    <p>Senha</p>
                    <p><input type="password" value="" id="senha1" /></p>
                    <p>Repita a senha</p>
                    <p><input type="password" value="" id="senha2" /></p>
                    <p><input type="submit" value="Cadastrar" class="buttonWhite" onclick="cadastrar();" /></p>
                </div>
            </div>
            <div id="aguardando" class="borderRedonda w400 font_nice" style="display: none;">
                <p class="center font_nice font_14em">Aguarde cadastrando ...</p>
                <p class="center"><img src="src/imgs/ajax/loading.gif" width="16" height="16" alt="Carregando" /></p>
            </div>
            <div id="cadastrado" class="borderRedonda w400 font_nice" style="display: none;">
                <p class="center font_nice font_14em">Cadastrado com sucesso! ...</p>
                <p class="center"><img src="src/imgs/ajax/done.png" width="16" height="16" alt="Carregando" /></p>
                <p class="center"><input type="button" value="Logar" class="buttonWhite" onclick="history.back();" /></p>
            </div>
            <div id="naoCadastrado" class="borderRedonda w400 font_nice" style="display: none;">
                <p class="center font_nice font_14em">Atenção, não foi possível realizar o cadastro! ...</p>
                <p class="center"><img src="src/imgs/ajax/undone.png" width="16" height="16" alt="Carregando" /></p>
                <p class="center">
                    <input type="button" value="Voltar para o login" class="buttonWhite" onclick="history.back();" />
                    <input type="button" value="Voltar para o formulario" class="buttonWhite" onclick="mE.show('formulario');" />
                </p>
                <ul id="error_report">

                </ul>
            </div>
        </div>
    </body>
</html>
