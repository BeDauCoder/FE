const listCircel = document.getElementsByClassName('circle')
const bgCircle = document.querySelector('#bgCircle')
const arrayColor = ['red','yellow','pink','gray','black','orange','blue','lightblue'];


for (let i = 1; i <= 10; i++) {
    bgCircle.innerHTML += '<div class="circle"></div>'
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function changeColor() {

    for (let index = 0; index < listCircel.length; index++) 
    {
        let oneLight = listCircel[index];
        oneLight.style.background = arrayColor[random(0, arrayColor.length)];
    }
}

setInterval(changeColor, 500);
