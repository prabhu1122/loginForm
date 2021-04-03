var lg = document.getElementById("log-in");
var rg = document.getElementById("register");
var btn = document.getElementById("btn");
var socl = document.getElementById("social");

function register() {
    lg.style.left = "-400px";
    rg.style.left = "5px";
    btn.style.left = "75px";
    
}

function login() {
    lg.style.left = "5px";
    rg.style.left = "450px";
    btn.style.left = 0;
}
