function Propriedades() {
    this.key = new Array();
    this.value = new Array();
}
Propriedades.prototype.add = function(key, value) {
    this.key[this.key.length] = key;
    this.value[this.value.length] = value;
};
Propriedades.prototype.remove = function(key) {
    var index = this.key.indexOf(key);
    this.key.splice(index, 1);
    this.value.splice(index, 1);
};
Propriedades.prototype.getValue = function(key) {
    var index = this.key.indexOf(key);
    return this.value[index];
};
Propriedades.prototype.setValue = function(key, value) {
    var index = this.key.indexOf(key);
    this.value[index] = value;
};
Propriedades.prototype.getUrlProperties = function() {

    var urlReturn = "?";
    for (var i in this.key)
        urlReturn += (urlReturn === "?" ? "" : "&") + this.key[i] + "=" + this.value[i];

    return urlReturn;
};
Propriedades.prototype.getPostProperties = function() {
    
    var urlReturn = "";
    for (var i in this.key)
        urlReturn += (urlReturn === "" ? "" : "&") + this.key[i] + "=" + this.value[i];

    return urlReturn;
};
Propriedades.prototype.addByUrl = function(url) {
    if (url.indexOf("?") !== -1)
        var a = url.substr((url.indexOf("?") + 1));
    else
        var a = url;

    var b = a.split("&");

    for (var i in b) {
        var split = b[i].split("=");
        this.key.push(split[0]);
        this.value.push(split[1]);
    }
};
Propriedades.prototype.getKeys = function() {
    var a = new Array();
    a = a.concat(this.key);
    return a;
};