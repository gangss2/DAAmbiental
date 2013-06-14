cadastrar = function() {

    var ajax = cadastrar.ajax;
    var url = 'src/php/registrar.func.php';
    var prop = new Propriedades();

    var ra = $id('ra').value;
    var senha1 = MD5($id('senha1').value);
    var senha2 = MD5($id('senha2').value);
    var email = $id('email').value;

    if (!(ra && senha1 && senha2 && email)) {
        popup.show("Atenção!", "Favor preencher todos os campos!");
    } else if (senha1 !== senha2) {
        popup.show("Atenção!", "As senhas digitadas não conferem!");
    } else if (isNaN(ra)) {
        popup.show("Atenção!", "Favor digitar apenas números no RA!");
    } else if (!isEmail(email)) {
        popup.show("Atenção!", "Favor digitar um e-mail válido!");
    } else if ($id('senha1').value.length < 6) {
        popup.show("Atenção!", "Favor digitar uma senha maior que 6 digitos!");
    } else {
        prop.add('ra', ra);
        prop.add('senha', senha1);
        prop.add('email', email);

        mE.show('aguardando');
        ajax.send("POST", url, cadastrar.hajax, ajax.MimeText, prop.getPostProperties());
    }
};
cadastrar.ajax = new AjaxRequest();
cadastrar.hajax = function() {
    var ajax = cadastrar.ajax;
    if (ajax.okState()) {
        var response = JSON.parse(ajax.getResponseText());
        if (response.status) {
            mE.show('cadastrado');
        } else {
            for (i in response.error)
                error.add(response.error[i]);
            mE.show('naoCadastrado');
        }
    }
};

// Error
var error;
addOnloadListener(function() {
    error = new Error('error_report');
});

// mE
var mE = new ManagerEfects();
addOnloadListener(function() {

    var formulario = new Elipse('formulario');
    var aguardando = new Elipse('aguardando');
    var cadastrado = new Elipse('cadastrado');
    var naoCadastrado = new Elipse('naoCadastrado');

    mE.addEfect('formulario', formulario);
    mE.addEfect('aguardando', aguardando);
    mE.addEfect('cadastrado', cadastrado);
    mE.addEfect('naoCadastrado', naoCadastrado);

});