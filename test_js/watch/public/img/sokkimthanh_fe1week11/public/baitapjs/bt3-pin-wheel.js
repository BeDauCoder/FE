let btn_start = document.querySelector("#btn_start");
let btn_stop = document.querySelector("#btn_stop");
let btn_reverse = document.querySelector("#btn_reverse");
let pinwheel = document.getElementById("ringegan");

let angle = 0;

function xoay() {
    pinwheel.style.transform = `rotate(${angle}deg)`
    angle += 5;
    angle = (angle == 360) ? 0 : angle;
}
function xoayNguoc() {
    pinwheel.style.transform = `rotate(${angle}deg)`
    angle -= 5;
    angle = (angle == -360) ? 0 : angle;
}

function start() {
    // clearInterval(start);
    btn_stop.style.display = "unset";
    btn_start.style.display = "none";
    start = setInterval(xoay, 10);
}
function stop() {
    btn_stop.style.display = "none";
    btn_start.style.display = "unset";
    clearInterval(start);
}

function reverse() {
    btn_stop.style.display = "none";
    btn_reverse.style.display = "unset";
    start = setInterval(xoayNguoc, 10);
}

btn_start.addEventListener("click", start);
btn_stop.addEventListener("click", stop);
