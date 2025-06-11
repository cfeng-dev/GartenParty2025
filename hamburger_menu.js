// hamburger-menu.js

// Universal forEach for Arrays/NodeLists/Objects
var forEach = function (t, o, r) {
    if ("[object Object]" === Object.prototype.toString.call(t)) for (var c in t) Object.prototype.hasOwnProperty.call(t, c) && o.call(r, t[c], c, t);
    else for (var e = 0, l = t.length; l > e; e++) o.call(r, t[e], e, t);
};

document.addEventListener("DOMContentLoaded", function () {
    var hamburgers = document.querySelectorAll(".hamburger");
    var nav = document.getElementById("main-nav");
    var body = document.body;

    if (hamburgers.length > 0) {
        hamburgers.forEach(function (hamburger) {
            hamburger.addEventListener("click", function () {
                this.classList.toggle("is-active");
                // Toggle navigation menu open/close
                if (nav) nav.classList.toggle("open");
                // Toggle scroll lock on body when menu is open/closed
                body.classList.toggle("menu-open");
            });
        });
    }

    // Close menu when any menu link is clicked (recommended UX)
    if (nav) {
        nav.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", function () {
                nav.classList.remove("open");
                body.classList.remove("menu-open");
                // Reset hamburger icon state
                hamburgers.forEach(function (hamburger) {
                    hamburger.classList.remove("is-active");
                });
            });
        });
    }
});
