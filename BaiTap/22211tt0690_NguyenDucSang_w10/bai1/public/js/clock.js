const h = document.querySelector('#hour')
const m = document.querySelector('#minute')
const s = document.querySelector('#second')
let btn_start = document.getElementById('btn_start')
let btn_reset = document.getElementById('btn_reset')
let btn_stop = document.getElementById('btn_stop')

// function updateTime(){
//     // let timeNow = new Date()
//     // h.textContent = timeNow.getHours() < 10 ? '0' + timeNow.getHours() : '' + timeNow.getHours()
//     // m.textContent = timeNow.getMinutes() < 10 ? '0' + timeNow.getMinutes() : '' + timeNow.getMinutes()
//     // s.textContent = timeNow.getSeconds() < 10 ? '0' +timeNow.getSeconds() : '' + timeNow.getSeconds()

//     // if (timeNow.getMinutes < 10){
//     //     m.textContent = "0" + timeNow.getMinutes()
//     // }
//     // else{
//     //     m.textContent = "" + timeNow.getMinutes()
//     // }

//     // if (timeNow.getSeconds < 10){
//     //     s.textContent = "0" + timeNow.getSeconds()
//     // }

// }

// function resetTime(){
//     setTimeout(updateTime,1000);
// }


let empty;
let flag =0;
let count_second = 0;
let count_minutes = 0;
let count_hours = 0;
function start() {
    //    empty = setInterval((()=>{
    //        document.querySelector('#clock').style.transform += 'rotate(30deg)'
    //     }),500)

    //     count++;
    //     if (count == 1){
    //         btn_start.style.display = 'unset'
    //     }
    if (flag == 0) {
        empty = setInterval((() => {
            count_second++
            if (count_second == 60) {
                count_second = 0
                count_minutes++
                if (count_minutes == 60) {
                    count_hours++
                    count_minutes = 0
                }
                start()
            }
            s.innerHTML = count_second
            m.innerHTML = count_minutes
            h.innerHTML = count_hours
        }), 1000)
    }
    flag = 1
}


function revert() {
    //    empty = setInterval((()=>{
    //     document.querySelector('#clock').style.transform += 'rotate(-30deg)'
    //     }),500)
    count_minutes = 0
    count_hours = 0
    count_second = 0
    s.innerHTML = count_second
    m.innerHTML = count_minutes
    h.innerHTML = count_hours
}

function stop() {
    if(flag == 1){
        clearInterval(empty)
    }
    flag = 0
}

btn_stop.addEventListener('click', stop)
btn_start.addEventListener('click', start)
btn_reset.addEventListener('click', revert)