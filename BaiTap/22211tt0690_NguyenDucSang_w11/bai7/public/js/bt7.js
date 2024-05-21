
for (let i = 1; i <= 10; i++) {
    document.body.insertAdjacentHTML('afterend', '<div class="number">' + i + '</div>')
}
const cowdownTime = document.querySelector('#cowdownTime')
let timeDown  = 60;

const number = document.querySelectorAll('.number');
const start = document.querySelector('.start');
let sc = 0;
const number_score = document.querySelector('#number_score')

const score = document.querySelector('#score');
const timeOut = document.querySelector('.timeout');

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
};
let changePosition = () => {
    number.forEach((item) => {
        item.style.left = getRndInteger(0, 1201 - 100) + 'px';
        item.style.top = getRndInteger(0, 801 - 80 ) + 'px';
    });
}
let empty;
start.onclick = () => {
    changePosition();
    setTimeout(stopGame, 60000);
    empty = setInterval(endTime,1000)
}

function endTime(){
    timeDown--
    cowdownTime.innerHTML = timeDown
    if(timeDown == 0){
        cowdownTime.innerHTML
    }
}

let stopGame = () => {
    timeOut.style.display = 'block';
    score.append(sc);
    clearInterval(empty)
}
let order = 1;
number.forEach((item) => {
    item.onclick = () => {
        if (item.innerHTML == order) {
            sc++;
            item.classList.add('black');
            order++;
        }
        number_score.innerHTML = sc
    }
})