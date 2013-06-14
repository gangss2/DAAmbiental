function Elipse(id) {
    this.objeto = $id(id);
//    this.oldstate = this.objeto.style.getPropertyValue('display');
}
Elipse.prototype.show = function() {
    this.objeto.style.setProperty('display', 'block');
};
Elipse.prototype.hidden = function() {
//    this.objeto.style.setProperty('display', this.oldstate);
    this.objeto.style.setProperty('display', 'none');
};