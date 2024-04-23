const color =['red','yellow','green','blue']
const background = document.querySelector('.ct');
const arrayColor = ['red','yellow','pink','gray','black','orange','blue'];

function rad_color(){
    let rad_number = parseInt((Math.random() * 6)+1)
    background.style.backgroundColor = arrayColor[rad_number];
}
function blue(){   
    background.style.backgroundColor = arrayColor[6];
}

function red(){ 
    background.style.backgroundColor = arrayColor[0];
}

function yellow(){
    background.style.backgroundColor = arrayColor[1];
}

