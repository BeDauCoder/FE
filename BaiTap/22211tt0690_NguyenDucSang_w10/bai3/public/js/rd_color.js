const color =['red','yellow','green','blue']
const background = document.querySelector('.controller');
const arrayColor = ['red','yellow','pink','gray','black','orange','blue','lightblue'];
const btn_color = document.querySelector('#btn_color')
const btn_stop = document.querySelector('#btn_stop')

let flag = 0;
let empty;

function rad_color(){
    let rad_number = parseInt((Math.random() * 6)+1)
    background.style.backgroundColor = arrayColor[rad_number];
}

function changes_color(){
    if(flag == 0){
      empty = setInterval(rad_color,200)
    }
    flag = 1
}

function stop_changes(){
    if(flag == 1){
        clearInterval(empty)
    }
    flag = 0
}

btn_color.addEventListener('click',changes_color)
btn_stop.addEventListener('click',stop_changes)