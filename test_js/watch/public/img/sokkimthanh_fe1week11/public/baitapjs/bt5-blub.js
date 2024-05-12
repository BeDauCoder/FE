/**
 * Sok Kim Thanh
 * Date: 12/05/2023
 * bai tap 5: 
 */

// khai bao

let bgDen = document.querySelector("#bg-den");
let arrColors = ["yellow", "brown", "purple", "blue", "green", "skyblue", "darkyellow"];
let arrBongDens = document.getElementsByClassName("bongden");

function laySoNgauNhien(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

let getColor = "yellow";



for (let i = 0; i < 50; i++) {
    bgDen.innerHTML += "<div class='bongden'></div>";
}
function doiMau() {

    for (let i = 0; i < arrBongDens.length; i++) {
        let motBongDen = arrBongDens[i];
        motBongDen.style.backgroundColor = arrColors[laySoNgauNhien(0, arrColors.length)];
    }
}
setInterval(doiMau,50);