// 
//  VER 1.1.0.0
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

//funções de codificação ..
var MD5 = function(string) {

    function RotateLeft(lValue, iShiftBits) {
        return (lValue << iShiftBits) | (lValue >>> (32 - iShiftBits));
    }

    function AddUnsigned(lX, lY) {
        var lX4, lY4, lX8, lY8, lResult;
        lX8 = (lX & 0x80000000);
        lY8 = (lY & 0x80000000);
        lX4 = (lX & 0x40000000);
        lY4 = (lY & 0x40000000);
        lResult = (lX & 0x3FFFFFFF) + (lY & 0x3FFFFFFF);
        if (lX4 & lY4) {
            return (lResult ^ 0x80000000 ^ lX8 ^ lY8);
        }
        if (lX4 | lY4) {
            if (lResult & 0x40000000) {
                return (lResult ^ 0xC0000000 ^ lX8 ^ lY8);
            } else {
                return (lResult ^ 0x40000000 ^ lX8 ^ lY8);
            }
        } else {
            return (lResult ^ lX8 ^ lY8);
        }
    }

    function F(x, y, z) {
        return (x & y) | ((~x) & z);
    }
    function G(x, y, z) {
        return (x & z) | (y & (~z));
    }
    function H(x, y, z) {
        return (x ^ y ^ z);
    }
    function I(x, y, z) {
        return (y ^ (x | (~z)));
    }

    function FF(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(F(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    }
    ;

    function GG(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(G(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    }
    ;

    function HH(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(H(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    }
    ;

    function II(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(I(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    }
    ;

    function ConvertToWordArray(string) {
        var lWordCount;
        var lMessageLength = string.length;
        var lNumberOfWords_temp1 = lMessageLength + 8;
        var lNumberOfWords_temp2 = (lNumberOfWords_temp1 - (lNumberOfWords_temp1 % 64)) / 64;
        var lNumberOfWords = (lNumberOfWords_temp2 + 1) * 16;
        var lWordArray = Array(lNumberOfWords - 1);
        var lBytePosition = 0;
        var lByteCount = 0;
        while (lByteCount < lMessageLength) {
            lWordCount = (lByteCount - (lByteCount % 4)) / 4;
            lBytePosition = (lByteCount % 4) * 8;
            lWordArray[lWordCount] = (lWordArray[lWordCount] | (string.charCodeAt(lByteCount) << lBytePosition));
            lByteCount++;
        }
        lWordCount = (lByteCount - (lByteCount % 4)) / 4;
        lBytePosition = (lByteCount % 4) * 8;
        lWordArray[lWordCount] = lWordArray[lWordCount] | (0x80 << lBytePosition);
        lWordArray[lNumberOfWords - 2] = lMessageLength << 3;
        lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
        return lWordArray;
    }
    ;

    function WordToHex(lValue) {
        var WordToHexValue = "", WordToHexValue_temp = "", lByte, lCount;
        for (lCount = 0; lCount <= 3; lCount++) {
            lByte = (lValue >>> (lCount * 8)) & 255;
            WordToHexValue_temp = "0" + lByte.toString(16);
            WordToHexValue = WordToHexValue + WordToHexValue_temp.substr(WordToHexValue_temp.length - 2, 2);
        }
        return WordToHexValue;
    }
    ;

    function Utf8Encode(string) {
        string = string.replace(/\r\n/g, "\n");
        var utftext = "";

        for (var n = 0; n < string.length; n++) {

            var c = string.charCodeAt(n);

            if (c < 128) {
                utftext += String.fromCharCode(c);
            }
            else if ((c > 127) && (c < 2048)) {
                utftext += String.fromCharCode((c >> 6) | 192);
                utftext += String.fromCharCode((c & 63) | 128);
            }
            else {
                utftext += String.fromCharCode((c >> 12) | 224);
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                utftext += String.fromCharCode((c & 63) | 128);
            }

        }

        return utftext;
    }
    ;

    var x = Array();
    var k, AA, BB, CC, DD, a, b, c, d;
    var S11 = 7, S12 = 12, S13 = 17, S14 = 22;
    var S21 = 5, S22 = 9, S23 = 14, S24 = 20;
    var S31 = 4, S32 = 11, S33 = 16, S34 = 23;
    var S41 = 6, S42 = 10, S43 = 15, S44 = 21;

    string = Utf8Encode(string);

    x = ConvertToWordArray(string);

    a = 0x67452301;
    b = 0xEFCDAB89;
    c = 0x98BADCFE;
    d = 0x10325476;

    for (k = 0; k < x.length; k += 16) {
        AA = a;
        BB = b;
        CC = c;
        DD = d;
        a = FF(a, b, c, d, x[k + 0], S11, 0xD76AA478);
        d = FF(d, a, b, c, x[k + 1], S12, 0xE8C7B756);
        c = FF(c, d, a, b, x[k + 2], S13, 0x242070DB);
        b = FF(b, c, d, a, x[k + 3], S14, 0xC1BDCEEE);
        a = FF(a, b, c, d, x[k + 4], S11, 0xF57C0FAF);
        d = FF(d, a, b, c, x[k + 5], S12, 0x4787C62A);
        c = FF(c, d, a, b, x[k + 6], S13, 0xA8304613);
        b = FF(b, c, d, a, x[k + 7], S14, 0xFD469501);
        a = FF(a, b, c, d, x[k + 8], S11, 0x698098D8);
        d = FF(d, a, b, c, x[k + 9], S12, 0x8B44F7AF);
        c = FF(c, d, a, b, x[k + 10], S13, 0xFFFF5BB1);
        b = FF(b, c, d, a, x[k + 11], S14, 0x895CD7BE);
        a = FF(a, b, c, d, x[k + 12], S11, 0x6B901122);
        d = FF(d, a, b, c, x[k + 13], S12, 0xFD987193);
        c = FF(c, d, a, b, x[k + 14], S13, 0xA679438E);
        b = FF(b, c, d, a, x[k + 15], S14, 0x49B40821);
        a = GG(a, b, c, d, x[k + 1], S21, 0xF61E2562);
        d = GG(d, a, b, c, x[k + 6], S22, 0xC040B340);
        c = GG(c, d, a, b, x[k + 11], S23, 0x265E5A51);
        b = GG(b, c, d, a, x[k + 0], S24, 0xE9B6C7AA);
        a = GG(a, b, c, d, x[k + 5], S21, 0xD62F105D);
        d = GG(d, a, b, c, x[k + 10], S22, 0x2441453);
        c = GG(c, d, a, b, x[k + 15], S23, 0xD8A1E681);
        b = GG(b, c, d, a, x[k + 4], S24, 0xE7D3FBC8);
        a = GG(a, b, c, d, x[k + 9], S21, 0x21E1CDE6);
        d = GG(d, a, b, c, x[k + 14], S22, 0xC33707D6);
        c = GG(c, d, a, b, x[k + 3], S23, 0xF4D50D87);
        b = GG(b, c, d, a, x[k + 8], S24, 0x455A14ED);
        a = GG(a, b, c, d, x[k + 13], S21, 0xA9E3E905);
        d = GG(d, a, b, c, x[k + 2], S22, 0xFCEFA3F8);
        c = GG(c, d, a, b, x[k + 7], S23, 0x676F02D9);
        b = GG(b, c, d, a, x[k + 12], S24, 0x8D2A4C8A);
        a = HH(a, b, c, d, x[k + 5], S31, 0xFFFA3942);
        d = HH(d, a, b, c, x[k + 8], S32, 0x8771F681);
        c = HH(c, d, a, b, x[k + 11], S33, 0x6D9D6122);
        b = HH(b, c, d, a, x[k + 14], S34, 0xFDE5380C);
        a = HH(a, b, c, d, x[k + 1], S31, 0xA4BEEA44);
        d = HH(d, a, b, c, x[k + 4], S32, 0x4BDECFA9);
        c = HH(c, d, a, b, x[k + 7], S33, 0xF6BB4B60);
        b = HH(b, c, d, a, x[k + 10], S34, 0xBEBFBC70);
        a = HH(a, b, c, d, x[k + 13], S31, 0x289B7EC6);
        d = HH(d, a, b, c, x[k + 0], S32, 0xEAA127FA);
        c = HH(c, d, a, b, x[k + 3], S33, 0xD4EF3085);
        b = HH(b, c, d, a, x[k + 6], S34, 0x4881D05);
        a = HH(a, b, c, d, x[k + 9], S31, 0xD9D4D039);
        d = HH(d, a, b, c, x[k + 12], S32, 0xE6DB99E5);
        c = HH(c, d, a, b, x[k + 15], S33, 0x1FA27CF8);
        b = HH(b, c, d, a, x[k + 2], S34, 0xC4AC5665);
        a = II(a, b, c, d, x[k + 0], S41, 0xF4292244);
        d = II(d, a, b, c, x[k + 7], S42, 0x432AFF97);
        c = II(c, d, a, b, x[k + 14], S43, 0xAB9423A7);
        b = II(b, c, d, a, x[k + 5], S44, 0xFC93A039);
        a = II(a, b, c, d, x[k + 12], S41, 0x655B59C3);
        d = II(d, a, b, c, x[k + 3], S42, 0x8F0CCC92);
        c = II(c, d, a, b, x[k + 10], S43, 0xFFEFF47D);
        b = II(b, c, d, a, x[k + 1], S44, 0x85845DD1);
        a = II(a, b, c, d, x[k + 8], S41, 0x6FA87E4F);
        d = II(d, a, b, c, x[k + 15], S42, 0xFE2CE6E0);
        c = II(c, d, a, b, x[k + 6], S43, 0xA3014314);
        b = II(b, c, d, a, x[k + 13], S44, 0x4E0811A1);
        a = II(a, b, c, d, x[k + 4], S41, 0xF7537E82);
        d = II(d, a, b, c, x[k + 11], S42, 0xBD3AF235);
        c = II(c, d, a, b, x[k + 2], S43, 0x2AD7D2BB);
        b = II(b, c, d, a, x[k + 9], S44, 0xEB86D391);
        a = AddUnsigned(a, AA);
        b = AddUnsigned(b, BB);
        c = AddUnsigned(c, CC);
        d = AddUnsigned(d, DD);
    }

    var temp = WordToHex(a) + WordToHex(b) + WordToHex(c) + WordToHex(d);

    return temp.toLowerCase();
};

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