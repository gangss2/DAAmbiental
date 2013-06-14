function error(id) {
    this.scene = $id(id);
    this.error = new Array();
}
error.prototype.add = function(erro) {
    var e = $c('li');
    var t = $cTxt(erro);
    e.appendChild(t);
    this.error[this.error.length] = e;
    this.scene.appendChild(e);
};
error.prototype.remove = function(id) {
    this.scene.removeChild(this.error[id]);
};
error.prototype.getError = function(id) {
    return this.error[id];
};