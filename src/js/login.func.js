logar = function() {
    var ajax = logar.ajax;

    var ra = $id('RA').value;
    var senha = MD5($id('senha').value);

    url = 'http://localhost/sites/2013-1/FACULDADE/DAAmbiental/site/src/php/login.func.php';

}
logar.ajax = new AjaxRequest();