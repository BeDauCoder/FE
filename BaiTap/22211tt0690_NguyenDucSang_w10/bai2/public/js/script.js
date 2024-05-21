const btn_start = document.querySelector('.start')
const btn_stop = document.querySelector('.stop')
const btn_revert = document.querySelector('.revert')

let empty;
let flag = 0;

function start() {
  if (flag == 0) {
    empty = setInterval((() => {
      document.querySelector('#pinwheel').style.transform += 'rotate(45deg)'
    }), 1000)
  }
  flag = 1
}

function revert() {
  if (flag == 0) {
    empty = setInterval((() => {
      document.querySelector('#pinwheel').style.transform += 'rotate(-45deg)'
    }), 1000)
  }
  flag =1
}

function stop() {
  if (flag == 1) {
    clearInterval(empty)
  }
  flag = 0
}

btn_revert.addEventListener('click', revert)
btn_start.addEventListener('click', start)
btn_stop.addEventListener('click', stop)
