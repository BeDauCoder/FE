var number1 = parseInt(document.getElementsByName('number1')[0]);
var number2 = parseInt(document.getElementsByName('number2')[0]);

function sum(){
    let kq = number1 + number2
    alert(kq)
}
function sub(){
    let number1 = parseInt(document.getElementsByName('number1')[0].value);
    let number2 = parseInt(document.getElementsByName('number2')[0].value);
    
    let kq = number1 - number2
    alert(kq)
    
}

function div(){
    let number1 = parseInt(document.getElementsByName('number1')[0].value);
    let number2 = parseInt(document.getElementsByName('number2')[0].value);
    
    let kq = number1 * number2
    alert(kq)
    
}
function chia(){
    let number1 = parseInt(document.getElementsByName('number1')[0].value);
    let number2 = parseInt(document.getElementsByName('number2')[0].value);
    
    let kq = number1 / number2
    alert(kq)
    
}