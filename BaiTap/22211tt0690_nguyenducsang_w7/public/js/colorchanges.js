const color =['red','yellow','green','blue']
const background = document.querySelector('.ct1');
const arrayColor = ['red','yellow','pink','gray','black','orange','blue'];

function rad_color(){
    let rad_number = parseInt((Math.random() * 6)+1)
    background.style.backgroundColor = arrayColor[rad_number];
}
function blue(){   
    background.style.backgroundColor = arrayColor[6];
    alert(rad_number)
}

function red(){ 
    background.style.backgroundColor = arrayColor[0];
    alert(rad_number)
}

function yellow(){
    background.style.backgroundColor = arrayColor[1];
}

