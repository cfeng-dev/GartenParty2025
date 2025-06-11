// hamburger-menu.js

// Universal forEach for Arrays/NodeLists/Objects
var forEach = function (t, o, r) {
    if ("[object Object]" === Object.prototype.toString.call(t)) for (var c in t) Object.prototype.hasOwnProperty.call(t, c) && o.call(r, t[c], c, t);
    else for (var e = 0, l = t.length; l > e; e++) o.call(r, t[e], e, t);
};

document.addEventListener("DOMContentLoaded", function () {
    var hamburgers = document.querySelectorAll(".hamburger");
    var nav = document.getElementById("main-nav");

    if (hamburgers.length > 0) {
        forEach(hamburgers, function (hamburger) {
            hamburger.addEventListener(
                "click",
                function () {
                    this.classList.toggle("is-active");
                    // Open/close menu
                    if (nav) nav.classList.toggle("open");
                },
                false
            );
        });
    }
});
