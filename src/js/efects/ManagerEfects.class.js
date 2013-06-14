function ManagerEfects() {
    this.elipse = new Array();
}
ManagerEfects.prototype.addEfect = function(key, elipse) {
    if ((!key) || (!elipse))
        return false;
    else
        this.elipse[key] = elipse;
};
ManagerEfects.prototype.show = function(key) {
    for (i in this.elipse)
        this.elipse[i].hidden();
    this.elipse[key].show();
};
ManagerEfects.prototype.hidden = function() {
    for (i in this.elipse)
        this.elipse[i].back();
};