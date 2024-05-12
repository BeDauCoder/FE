function update() {
    let clock = document.getElementById('clock');
    let ampmID = document.getElementById('ampm');
    let date = new Date(); // (*)
    let hours = date.getHours();
    let ampm = hours >= 12 ? 'pm' : 'am';
    if (hours < 10) hours = '0' + hours;
    clock.children[0].innerHTML = hours;

    let minutes = date.getMinutes();
    if (minutes < 10) minutes = '0' + minutes;
    clock.children[1].innerHTML = minutes;

    let seconds = date.getSeconds();
    if (seconds < 10) seconds = '0' + seconds;
    clock.children[2].innerHTML = seconds;
    ampmID.children[0].innerHTML = ampm;
}
let timerId;

(function clockStart() { // run the clock
    if (!timerId) { // only set a new interval if the clock is not running
        timerId = setInterval(update, 1000);
    }
    update(); // (*)
})()

function clockStop() {
    clearInterval(timerId);
    timerId = null; // (**)
}