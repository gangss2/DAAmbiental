function Error(id) {
    this.scene = $id(id);
    this.error = new Array();
}
Error.prototype.add = function(erro) {
    var e = $c('li');
    var t = $cTxt(erro);
    e.appendChild(t);
    this.error[this.error.length] = e;
    this.scene.appendChild(e);
};
Error.prototype.remove = function(id) {
    this.scene.removeChild(this.error[id]);
};
Error.prototype.getError = function(id) {
    return this.error[id];
};
Error.prototype.clear = function() {
    for (var i = 0; i <= this.scene.childElementCount; i++)
        this.scene.removeChild(this.scene.firstChild);
};