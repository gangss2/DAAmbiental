/**
 * Insira no elemento a Class "info"
 * e o atributo 'info="mensagem"'
 * para que o script trabalhe.
 * 
 */
info = {
    campo: null,
    build: function() {
        var c = $c("div");
        info.campo = c;
        c.style.setProperty("display", "none");
        c.style.setProperty("position", "absolute");
        c.style.setProperty("padding", info.init.padding);
        c.style.setProperty("background-color", info.init.bgColor);
        c.style.setProperty("border", info.init.border);
        c.style.setProperty("border-radius", "5px");
        c.style.setProperty("border-top-left-radius", "0px");
        c.style.setProperty("color", info.init.textColor);
        c.style.setProperty("opacity", info.init.opacity / 100);
        c.style.setProperty("filter", "alpha(opacity=" + info.init.opacity + ")");

        var infoElems = document.getElementsByClassName(info.init.basic.ClassName);
        for (i in infoElems) {
            infoElems[i].onmouseover = function() {
                info.campo.innerHTML = this.getAttribute("info");
                info.campo.style.setProperty("display", "block");
                info.campo.style.setProperty("z-index", "1000");

            };
            infoElems[i].onmouseout = function(evt) {
                info.campo.style.setProperty("display", "none");
                info.campo.style.setProperty("z-index", "1000");
            };
            infoElems[i].onmousemove = function(evt) {
                var pX = (evt.clientX + info.init.disX) + "px";
                var pY = (evt.clientY + info.init.disY) + "px";
                info.campo.style.setProperty("top", pY);
                info.campo.style.setProperty("left", pX);
            }
        }
        document.body.appendChild(c);
    }
};
info.init = {
    basic: {
        ClassName: "info"
    },
    disX: 5,
    disY: 5,
    padding: "5px",
    bgColor: "#000",
    textColor: "#fff",
    border: "solid 1px #ccc",
    opacity: 75
};
addOnloadListener(function() {
    info.build();
});