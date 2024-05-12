'use strict'
let operator = document.getElementById("bieuThuc");
let result = document.getElementById("ketQua");
let buttons = document.getElementsByTagName("button");

// buttons[0].innerHTML = "fdf";
for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        // console.log(buttons[i].innerHTML);


        if (buttons[i].innerText == 'C') {
            operator.innerHTML = 0;
            result.innerHTML = 0;
        } else if (buttons[i].innerText == 'Enter') {
            // xử lý enter;
            try {
                result.innerHTML = eval(operator.innerHTML);
            } catch (exception) {
                if (operator.innerHTML.lastIndexOf(0) != -1) {
                    result.innerHTML = "devide by zero";
                } else if (operator.innerHTML.lastIndexOf(operator.innerHTML) != -1) {
                    // bẫy phép tính không hoàn thiện
                    operator.innerHTML = operator.innerHTML;
                    result.innerHTML = 0;
                }
            }
        } else if (buttons[i].innerText === 'DEL') {
            if (operator.innerText.length == 0 || operator.innerText == "0" || operator.innerText == '') {
                operator.innerText = 0;
            } else {
                operator.innerText = operator.innerText.substring(0, operator.innerText.length - 1);
            }
        }
        // xử lý ký tự đầu tiên
        else if (operator.innerText.length == 1) {
            if (buttons[i].innerText === '.') {
                operator.innerHTML = buttons[i].innerText;
            } else if (buttons[i].innerText === '+' || buttons[i].innerText === '-' || buttons[i].innerText === '*' || buttons[i].innerText === '/' || buttons[i].innerText === '%') {
                // nếu phát hiện có 2 dấu thì trả về dấu cuối cùng
                if (operator.innerText.includes('+') || operator.innerText.includes('-') || operator.innerText.includes('*') || operator.innerText.includes('/')) {
                    operator.innerHTML = '0' + buttons[i].innerText;
                } else if (operator.innerText.includes('%')) {
                    operator.innerHTML += buttons[i].innerText;
                } else {
                    operator.innerHTML += buttons[i].innerText;
                }
            } else {
                operator.innerHTML += buttons[i].innerText;
            };
        }
        else {
            // xử lý số 0 trước khi bấm tiếp 1 số khác
            operator.innerHTML = (operator.innerText == '0') ? '' : operator.innerHTML;
            // xử lý bấm dấu liên tiếp
            if (buttons[i].innerText === '.' && operator.innerText.includes('.')) { return; };
            if (buttons[i].innerText === '+' && operator.innerText.includes('+')) { return; };
            if (buttons[i].innerText === '-' && operator.innerText.includes('-')) { return; };
            if (buttons[i].innerText === '*' && operator.innerText.includes('*')) { return; };
            if (buttons[i].innerText === '/' && operator.innerText.includes('/')) { return; };
            if (buttons[i].innerText === '%' && operator.innerText.includes('%')) { return; };
            operator.innerHTML += buttons[i].innerText;

        }
    }
}