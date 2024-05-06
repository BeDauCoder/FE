let list_btn = document.querySelectorAll('.btn_numbers')
let result = document.getElementById('result')
let operator_match = document.getElementById('operator_match')

for (let index = 0;index <list_btn.length;index++){
    let btn = list_btn[index].innerHTML;
    list_btn[index].onclick = function() {
        if(btn == 'C'){
            result.innerHTML = 0
            operator_match.innerHTML = ""
        }
        else if(btn == '='){
            result.textContent=eval(operator_match.textContent)
        }
        else{
            operator_match.innerHTML = operator_match.innerHTML + btn
        }
    }
}



