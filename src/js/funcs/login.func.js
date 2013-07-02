logar = function() {
    var ajax = logar.ajax;
    var prop = new Propriedades();

    var ra = $id('RA').value;
//    var senha = MD5((($id('senha').value) == "" ? null : ($id('senha').value)));
    var campoSenha = $id('senha');

    prop.add('ra', ra);
    if (campoSenha.value.length >= 6) {
        var senha = MD5(((campoSenha.value)));
        prop.add('senha', senha);
    }

    url = cfgs.urlLogar + prop.getUrlProperties();

    ajax.send("GET", url, logar.handler);

};
logar.ajax = new AjaxRequest();
logar.hiddenAll = function() {
    var form = new Elipse('login_form');
    var error = new Elipse('login_error');
    var done = new Elipse('login_done');

    form.hidden();
    error.hidden();
    done.hidden();
};
logar.done = function() {
    logar.hiddenAll();
    var done = new Elipse('login_done');
    done.show();
};
logar.error = function() {
    logar.hiddenAll();
    var error = new Elipse('login_error');
    error.show();
};
logar.form = function() {
    logar.hiddenAll();
    var form = new Elipse('login_form');
    form.show();

    var error = new Error('login_error_list');
    error.clear();
};

logar.handler = function() {
    var ajax = logar.ajax;
    if (ajax.okState()) {

        var result = JSON.parse(ajax.getResponseText());

        if (result.status) {
            logar.done();
        } else {
            var error = new Error('login_error_list');
            for (var i in result.error)
                error.add(result.error[i]);
            logar.error();
        }
    }

};