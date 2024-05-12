class Calculator {
    constructor(currentOperationScreen, previousResultScreen) {
        this.currentOperationScreen = currentOperationScreen;
        this.previousResultScreen = previousResultScreen;
        this.operation = undefined;
        this.clear();
    }
    // xóa tất cả biểu thức
    clear() {
        // reset style
        if (this.currentOperation != null && this.currentOperation.length > 13) {
            this.previousResultScreen.classList.remove('display-6');
            this.previousResultScreen.classList.add('display-1');
        }
        if (this.currentOperation != null && this.currentOperation.length > 12) {
            this.previousResultScreen.classList.remove('display-5');
            this.previousResultScreen.classList.add('display-1');
        }
        if (this.currentOperation != null && this.currentOperation.length > 11) {
            this.previousResultScreen.classList.remove('display-4');
            this.previousResultScreen.classList.add('display-1');
        }
        if (this.currentOperation != null && this.currentOperation.length > 10) {
            this.previousResultScreen.classList.remove('display-3');
            this.previousResultScreen.classList.add('display-1');
        }
        if (this.currentOperation != null && this.currentOperation.length > 9) {
            this.previousResultScreen.classList.remove('display-2');
            this.previousResultScreen.classList.add('display-1');
        }
        if (this.currentOperation != null && this.currentOperation.length > 8) {
            this.previousResultScreen.classList.remove('display-1');
            this.previousResultScreen.classList.add('display-1');
        }
        this.currentOperation = 0;
        this.previousOperation = 0;
        this.operation = undefined;
    }
    // xóa ký tự cuối cùng cura toán hạng
    delete() {
        this.currentOperation = this.currentOperation.toString().slice(0, -1);
        if (this.currentOperation.length < 1) this.currentOperation = 0;
        // reset style
        if (this.currentOperation.length < 14) {
            this.previousResultScreen.classList.remove('display-6');
            this.previousResultScreen.classList.add('display-5');
        }
        if (this.currentOperation.length < 13) {
            this.previousResultScreen.classList.remove('display-5');
            this.previousResultScreen.classList.add('display-4');
        }
        if (this.currentOperation.length < 12) {
            this.previousResultScreen.classList.remove('display-4');
            this.previousResultScreen.classList.add('display-3');
        }
        if (this.currentOperation.length < 11) {
            this.previousResultScreen.classList.remove('display-4');
            this.previousResultScreen.classList.add('display-3');
        }
        if (this.currentOperation.length < 10) {
            this.previousResultScreen.classList.remove('display-3');
            this.previousResultScreen.classList.add('display-2');
        }
        if (this.currentOperation.length < 9) {
            this.previousResultScreen.classList.remove('display-2');
            this.previousResultScreen.classList.add('display-1');
        }
    }
    // nhập toán hạng
    nhapToanHang(number) {
        if (number === '.' && this.currentOperation.includes('.')) return;
        if (this.currentOperation.length > 16) return;
        this.currentOperation = (this.currentOperation.toString() === '0' ? '' : this.currentOperation.toString()) + number.toString();
        // reset style
        if (this.currentOperation.length > 9) {
            this.previousResultScreen.classList.remove('display-1');
            this.previousResultScreen.classList.add('display-2');
        }
        if (this.currentOperation.length > 10) {
            this.previousResultScreen.classList.remove('display-2');
            this.previousResultScreen.classList.add('display-3');
        }
        if (this.currentOperation.length > 11) {
            this.previousResultScreen.classList.remove('display-3');
            this.previousResultScreen.classList.add('display-4');
        }
        if (this.currentOperation.length > 12) {
            this.previousResultScreen.classList.remove('display-4');
            this.previousResultScreen.classList.add('display-5');
        }
        if (this.currentOperation.length > 13) {
            this.previousResultScreen.classList.remove('display-5');
            this.previousResultScreen.classList.add('display-6');
        }
    }
    // nhập toán tử
    nhapToanTu(operation) {
        if (this.currentOperation === 0) return;
        if (this.previousOperation !== 0) {
            this.tinhKetQua();
        }
        this.operation = operation;
        this.previousOperation = this.currentOperation;
        this.currentOperation = 0;
    }
    // tính kết quả
    tinhKetQua() {
        // khai bao
        const prev = parseFloat(this.previousOperation);
        const current = parseFloat(this.currentOperation);
        if (isNaN(prev) || isNaN(current)) return;// hủy tính toán biểu thức này
        // tính biểu thức
        this.currentOperation = eval(prev + this.operation + current);
        this.operation = undefined;
        this.previousOperation = 0;
    }
    getDisplayNumber(number) {
        const stringNumber = number.toString();
        const integerDigits = parseFloat(stringNumber.split('.')[0]);
        const decimalDigits = stringNumber.split('.')[1];
        let integerDisplay;
        if (isNaN(integerDigits)) {
            integerDisplay = '';
        }
        else {
            integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 });
        };
        if (decimalDigits != null) {
            return `${integerDisplay}.${decimalDigits}`;
        }
        else {
            return integerDisplay;
        }
    }
    // cập nhật biểu thức
    updateDisplay() {
        this.previousResultScreen.innerText = this.getDisplayNumber(this.currentOperation);
        if (this.operation != null) {
            this.currentOperationScreen.innerText =
                `${this.previousOperation} ${this.operation} ${this.getDisplayNumber(this.currentOperation)} =`;
        } else {
            this.currentOperationScreen.innerText = 0;
        }
    }
}
const btnNumbers = document.querySelectorAll('[data-number]');
const btnOperations = document.querySelectorAll('[data-operation]');
const btnClear = document.querySelector('[data-clear]');
const btnDelete = document.querySelector('[data-delete]');
const btnEnter = document.querySelector('[data-enter]');
const expression = document.querySelector('[data-expression]');
const result = document.querySelector('[data-result]');

const cal = new Calculator(expression, result);

// Nhập số
for (let i = 0; i < btnNumbers.length; i++) {
    btnNumbers[i].onclick = function () {
        cal.nhapToanHang(btnNumbers[i].innerText);
        cal.updateDisplay();
    }
}
// Nhập phép toán
for (let i = 0; i < btnOperations.length; i++) {
    btnOperations[i].onclick = function () {
        cal.nhapToanTu(btnOperations[i].innerText);
        cal.updateDisplay();
    }
}
// Tính kết quả
btnEnter.onclick = function () {
    cal.tinhKetQua();
    cal.updateDisplay();
}

btnClear.onclick = function () {
    cal.clear();
    cal.updateDisplay();
}

btnDelete.onclick = function () {
    cal.delete();
    cal.updateDisplay();
}