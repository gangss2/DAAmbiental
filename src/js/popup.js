popup = {
    bg: null,
    up: null,
    campoDaMsg: null,
    yesHandler: null,
    noHandler: null,
    handlers: {
        yes: function(handler) {
            popup.yesHandler = handler;
        },
        no: function(handler) {
            popup.noHandler = handler;
        }
    },
    show: function(title, msg) {
        var td = '<p class="titulo center font_nice">' + title + "</p>";
        td += '<p class="font_nice_noShadow">' + msg + '</p>';
        popup.campoDaMsg.innerHTML = td;
        popup.bg.style.setProperty("opacity", "0.75");
        popup.bg.style.setProperty("filter", "alpha(opacity=75)");
        popup.bg.style.setProperty("z-index", "1000");

        popup.up.style.setProperty("opacity", "1");
        popup.up.style.setProperty("filter", "alpha(opacity=100)");
        popup.up.style.setProperty("z-index", "1001");
    },
    hidden: function() {
        popup.bg.style.setProperty("opacity", "0");
        popup.bg.style.setProperty("filter", "alpha(opacity=0)");
        popup.bg.style.setProperty("z-index", "-1000");

        popup.up.style.setProperty("opacity", "0");
        popup.up.style.setProperty("filter", "alpha(opacity=0)");
        popup.up.style.setProperty("z-index", "-1001");
    }
};
addOnloadListener(function() {
    var a = $c("div");
    popup.bg = a;
    a.style.setProperty("background", "#000");
    a.style.setProperty("opacity", "0");
    a.style.setProperty("filter", "alpha(opacity=0)");
    a.style.setProperty("position", "absolute");
    a.style.setProperty("width", "100%");
    a.style.setProperty("top", "0px");
    a.style.setProperty("height", "100%");
    a.style.setProperty("left", "0px");
    a.style.setProperty("z-index", "-1001");
    a.style.setProperty("transition", "opacity 1s, z-index 1s, filter 1s");
    a.style.setProperty("-o-transition", "opacity 1s, z-index 1s, filter 1s");
    a.style.setProperty("-moz-transition", "opacity 1s, z-index 1s, filter 1s");
    a.style.setProperty("-webkit-transition", "opacity 1s, z-index 1s, filter 1s");
    document.body.appendChild(a);

    var b = $c("div");
    popup.up = b;
    b.style.setProperty("background", "#fff");
    b.style.setProperty("opacity", "0");
    b.style.setProperty("filter", "alpha(opacity=0)");
    b.style.setProperty("position", "absolute");
    b.style.setProperty("width", "400px");
    b.style.setProperty("margin-left", "-200px");
    b.style.setProperty("top", "50%");
    b.style.setProperty("height", "200px");
    b.style.setProperty("margin-top", "-100px");
    b.style.setProperty("left", "50%");
    b.style.setProperty("z-index", "-1001");
    b.style.setProperty("transition", "opacity 1s, z-index 1s, filter 1s");
    b.style.setProperty("-o-transition", "opacity 1s, z-index 1s, filter 1s");
    b.style.setProperty("-moz-transition", "opacity 1s, z-index 1s, filter 1s");
    b.style.setProperty("-webkit-transition", "opacity 1s, z-index 1s, filter 1s");
    b.style.setProperty("border", "solid 5px #1B1143");
    b.style.setProperty("border-radius", "25px");
    document.body.appendChild(b);

    var c = $c("div");
    popup.campoDaMsg = c;
    c.style.setProperty("background", "#fff");
    c.style.setProperty("width", "350px");
    c.style.setProperty("margin", "25px");
    c.style.setProperty("margin-bottom", "0px");
    c.style.setProperty("height", "100px");
    c.style.setProperty("transition", "opacity 1s, z-index 1s, filter 1s");
    c.style.setProperty("-o-transition", "opacity 1s, z-index 1s, filter 1s");
    c.style.setProperty("-moz-transition", "opacity 1s, z-index 1s, filter 1s");
    c.style.setProperty("-webkit-transition", "opacity 1s, z-index 1s, filter 1s");
    b.appendChild(c);

    var d = $c("div");
    d.style.setProperty("background", "#fff");
    d.style.setProperty("width", "350px");
    d.style.setProperty("height", "30px");
    d.style.setProperty("margin", "25px");
    d.style.setProperty("margin-top", "35px");
    d.style.setProperty("margin-bottom", "0px");
    d.style.setProperty("transition", "opacity 1s, z-index 1s, filter 1s");
    d.style.setProperty("-o-transition", "opacity 1s, z-index 1s, filter 1s");
    d.style.setProperty("-moz-transition", "opacity 1s, z-index 1s, filter 1s");
    d.style.setProperty("-webkit-transition", "opacity 1s, z-index 1s, filter 1s");
    b.appendChild(d);

    var e = $c("input");
    e.type = "button";
    e.onclick = function() {
        popup.yesHandler();
    };
    e.className = "buttonHardBlue";
    e.style.setProperty("cursor", "pointer");
    e.style.setProperty("float", "left");
    e.value = "Ok";
    d.appendChild(e);

    var f = $c("input");
    f.type = "button";
    f.onclick = function() {
        popup.noHandler();
    };
    f.className = "buttonWhite";
    f.style.setProperty("cursor", "pointer");
    f.style.setProperty("float", "right");
    f.value = "Cancel";
    d.appendChild(f);
    popup.handlers.no(function() {
        popup.hidden();
    });
});

function newbuttonWhite(nome, handler) {
    var a = $c("input");
    a.type = "buttonWhite";
    a.onclick = handler;
    a.className = "buttonWhite";
    a.value = nome;
    return a;
}