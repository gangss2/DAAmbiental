// 
//  VER 1.0.0.0
// 
// Gettters DOM ...
function $id(quem) {
    return document.getElementById(quem);
}
function $cN(quem) {
    return document.getElementsByClassName(quem);
}
function $c(elem) {
    return document.createElement(elem);
}
function $cTxt(txt) {
    return document.createTextNode(txt);
}
function $sout(txt) {
    var a = $c("p");
    a.innerHTML = txt;
    document.body.appendChild(a);
}

//Includers DOM ...
function $includeCSS(CSS) {
    var elem = $c("link");
    elem.type = "text/css";
    elem.rel = "stylesheet";
    elem.href = CSS;
    var head = document.getElementsByTagName("head");
    head.appendChild(elem);
}

// Temporizadores ...
var doTimer = 0;
$addTimer = function(int) {
    doTimer += int;
    subTimer = "doTimer-=" + int;
    setTimeout(subTimer, doTimer * 1000);
};
function $do(strHandler, timer) {
    retorno = new Array();
    retorno[0] = setTimeout(strHandler, doTimer * 1000);
    doTimer += timer;
    subTimer = "doTimer-=" + timer;
    retorno[1] = setTimeout(subTimer, doTimer * 1000);
    return retorno;
}
function $repeat(strHandler, timer) {
    return setInterval(strHandler, timer * 1000);
}

//  Expressões Regulares
function isPar(number) {
    var div = number / 2;
    var a = number / 2;
    if (Math.floor(div) === a) {
        return true;
    } else {
        return false;
    }
}
function isImpar(number) {
    var div = number / 2;
    var a = number / 2;
    if (Math.floor(div) === a) {
        return false;
    } else {
        return t;
    }
}
function isEmpty(string) {
    emptyRegExp = /\S/;
    return !emptyRegExp.test(string);
}
function isNotEmpty(string) {
    emptyRegExp = /\S/;
    return emptyRegExp.test(string);
}
function isNumber(number) {
    numRegExp = /^[0-9]+$/;
    return numRegExp.test(number);
}
function isEmail(string) {
    emailRegExp = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.([a-z]){2,4})$/;
    return emailRegExp.test(string);
}
function isIPv4(ip) {
    ipRegExp = /^(([0-2]*[0-9]+[0-9]+)\.([0-2]*[0-9]+[0-9]+)\.([0-2]*[0-9]+[0-9]+)\.([0-2]*[0-9]+[0-9]+))$/;
    return ipRegExp.test(ip);
}
function isAlpha(string) {
    alphaRegExp = /^[0-9a-z]+$/i;
    return alphaRegExp.test(string);
}
function isMD5(string) {
    if (!string)
        return false;

    md5RegExp = /^[a-f0-9]{32}$/;
    return md5RegExp.test(string);
}
function isURL(string) {
    if (!string)
        return false;

    string = string.toLowerCase();
    urlRegExp = /^(((ht|f)tp(s?))\:\/\/)([0-9a-zA-Z\-]+\.)+[a-zA-Z]{2,6}(\:[0-9]+)?(\/\S*)?$/;
    return urlRegExp.test(string);
}
function isDecimal(number) {
    if (!number)
        return false;

    decimalRegExp = /^-?(0|[1-9]{1}\d{0,})(\.(\d{1}\d{0,}))?$/;
    return decimalRegExp.test(number);
}
function isISBN13(number) {
    if (!number)
        return false;
    ssnRegExp = /^\d{2}-\d{5}-\d{2}-\d{1}$/;
    return ssnRegExp.test(number);
}
function isISBN17(number) {
    if (!number)
        return false;
    ssnRegExp = /^\d{3}-\d{2}-\d{2}-\d{5}-\d{1}$/;
    return ssnRegExp.test(number);
}
function isCEP(number) {
    if (!number)
        return false;
    ssnRegExp = /^\d{2}\.\d{3}-\d{3}$/;
    return ssnRegExp.test(number);
}
function isCNPJ(number) {
    if (!number)
        return false;
    ssnRegExp = /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/;
    return ssnRegExp.test(number);
}
function isCPF(number) {
    if (!number)
        return false;

    ssnRegExp = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    return ssnRegExp.test(number);
}
function isRG(number) {
    if (!number)
        return false;
    ssnRegExp = /^[0-9]{2}\.[0-9]{3}\.[0-9]{3}-[0-9]{1}$/;
    return ssnRegExp.test(number);
}
function isDate(date) {
    var ret, one, two, three;

    ret = false;

    if (/\d{4}[-/\s]{1}\d{2}[-/\s]{1}\d{2}/.test(date) == true) {

        date = date.replace(/[\D]/gi, "");

        one = date.substr(0, 4);
        two = date.substr(4, 2);
        three = date.substr(6, 2);

        if (two != 00 && two <= 12 && three != 00 && three <= 31)
            ret = true;

    }
    else if (/\d{2}[-/\s]{1}\d{2}[-/\s]{1}\d{4}/.test(date) == true) {

        date = date.replace(/[\D]/gi, "");
        one = date.substr(0, 2);
        two = date.substr(2, 2);
        three = date.substr(4, 4);

        if (one != 00 && one <= 31 && two != 00 && two <= 12)
            ret = true;

    } else if (/\d{8}/.test(date) == true) {

        one = date.substr(0, 4);
        two = date.substr(4, 2);
        three = date.substr(6, 2);

        if (one > 1800 && two != 00 && two <= 12 && three != 00 && three <= 31) {
            ret = true;
        }
        else {

            one = date.substr(0, 2);
            two = date.substr(2, 2);
            three = date.substr(4, 4);

            if (one != 00 && one <= 31 && two != 00 && two <= 12 && three > 1800)
                ret = true;
        }

    }

    return ret;
}

// Rearranjos ...
OnloadListeners = new Array();
OnloadListenersState = false;
doOnloadListeners = function() {
    for (i in OnloadListeners)
        OnloadListeners[i]();
};
addOnloadListener = function(FuntToAdd) {
    if ((typeof window.onload === 'function') && (OnloadListenersState === true)) {
        this.OnloadListeners[this.OnloadListeners.length] = FuntToAdd;
    } else if (OnloadListenersState === false) {
        var OldFunc = window.onload;
        if (OldFunc) {
            this.OnloadListeners[this.OnloadListeners.length] = OldFunc;
        }
        this.OnloadListeners[this.OnloadListeners.length] = FuntToAdd;
        OnloadListenersState = true;
    }
    window.onload = this.doOnloadListeners;
};

$comands = {
    extractWrapper: function(string) {
        $init = string.indexOf("[");
        $finish = string.indexOf("]");
        return string.substring(($init + 1), $finish);
    },
    getRandomChar: function() {
//        var letras = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz';
        var letras = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZ';
        var Random = Math.floor(Math.random() * letras.length);
        return letras[Random];
    },
    getRandomNumber: function() {
        var letras = '0123456789';
        var Random = Math.floor(Math.random() * letras.length);
        return letras[Random];
    },
    getRandomBinar: function() {
        var letras = '01';
        var Random = Math.floor(Math.random() * letras.length);
        return letras[Random];
    }
};