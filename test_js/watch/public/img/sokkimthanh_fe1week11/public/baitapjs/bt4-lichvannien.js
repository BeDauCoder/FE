const handHour = document.querySelector('.hand-hour');
const handMinute = document.querySelector('.hand-min');
const handSecond = document.querySelector('.hand-sec');
const handDot = document.querySelector('.hand-dot');

let s, m, h;

function updateClock() {
    let currentTime = new Date();
    s = currentTime.getSeconds() * 6 + (currentTime.getMilliseconds()) * 6/1000;
    m = currentTime.getMinutes() * 6 + currentTime.getSeconds() * 0.1;
    h = currentTime.getHours() * 30 + currentTime.getMinutes() * 0.5 + (currentTime.getSeconds() * 30 / 3600);

    handSecond.style.transform = "rotate("+s+"deg)";
    handMinute.style.transform = "rotate("+m+"deg)";
    handHour.style.transform = "rotate("+h+"deg)";
    handDot.style.transform = "rotate("+s+"deg)";
    setTimeout(updateClock, 10);
}
setTimeout(updateClock, 10);