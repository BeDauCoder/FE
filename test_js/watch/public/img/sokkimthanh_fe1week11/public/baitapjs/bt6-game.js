/**
 * Sok Kim Thanh
 * Date: 12/05/2023 2:43PM
 * bai tap 6: 
 */

/* KHAI BÁO */
let second = document.querySelector('[second]');
let btnStart = document.querySelector('.btn-start');
let btnStop = document.querySelector('.btn-stop');
let scoreBoard = document.querySelector('[scoreboard]')
let levelGame = document.querySelector('[level-game]')
let arrButton = document.getElementsByClassName('hinhtron');
let diemSo = 0;

/* GLOBAL CONTROL */
let nextLevel = 0;
let masterCount = 10;//global count
let count = masterCount;// locally count
let stopScoreBoard = false;
let isNextLevel = false;

/* DEFAULT VALUE */
second.innerHTML = " giây";// default counting;
levelGame.innerHTML = `Level ${nextLevel}`;//default level
scoreBoard.innerHTML = 0;
/* MY THREAD INTERVAL*/
let intervalPosition;
let intervalCountdown;

// random ngau nhien
function laySoNgauNhien(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}


// xu ly position
function setPosition() {
    for (let i = 0; i < arrButton.length; i++) {
        arrButton[i].style.top = `${laySoNgauNhien(0, 600 - 150 / 2 - 40)}px`;
        arrButton[i].style.left = `${laySoNgauNhien(0, 1200 - 150)}px`;
        /* XU LY NEXT LEVEL GAME */
        switch (nextLevel) {
            case 0: arrButton[i].style.transition = `all ${3}s ease`; break;
            case 1: arrButton[i].style.transition = `all ${2}s ease`; break;
            case 2: arrButton[i].style.transition = `all ${1.5}s ease`; break;
            case 3: arrButton[i].style.transition = `all ${1.2}s ease`; break;
            case 4: arrButton[i].style.transition = `all ${1}s ease`; break;
            case 5: arrButton[i].style.transition = `all ${0.8}s ease`; break;
            case 6: arrButton[i].style.transition = `all ${0.7}s ease`; break;
            case 7: arrButton[i].style.transition = `all ${0.6}s ease`; break;
            case 8: arrButton[i].style.transition = `all ${0.5}s ease`; break;
            case 9: arrButton[i].style.transition = `all ${0.4}s ease`; break;
            case 10: arrButton[i].style.transition = `all ${0.2}s ease`; break;
            case 11: arrButton[i].style.transition = `all ${0.1}s ease`; break;
            case 12: arrButton[i].style.transition = `all ${0}s ease`; break;
        }
    }
}
// xy ly dong ho dem nguoc
function countDown() {
    if (count <= 1) {
        count = masterCount;
        return;
    } else {
        count--;
    }
    second.innerHTML = count + " giây";
}
function stopGameEvent() {
    btnStart.style.display = 'unset';
    clearInterval(intervalPosition);
    clearInterval(intervalCountdown);

    isNextLevel = confirm("Hết giờ! Bạn muốn tăng cấp độ kế tiếp?");

    // xu ly next level nhỏ hơn 12
    if (isNextLevel && nextLevel < 12) {
        nextLevel++;
        levelGame.innerHTML = `Level ${nextLevel}`;
        second.innerHTML = count + " giây";
        stopScoreBoard = true;
    } else if (nextLevel == 12) {
        // xu ly max level lv.. 12
        alert("Chúc mừng bạn max level! Thật tuyệt vời!");
        nextLevel = 0;
        scoreBoard.innerHTML = 0;
        levelGame.innerHTML = `Level MAX Congratulations!!!`;
        stopScoreBoard = true;
        return;
    } else {
        // hết màn chơi;
        nextLevel = 0;
        scoreBoard.innerHTML = 0;
        levelGame.innerHTML = `Level ${nextLevel}`;
        stopScoreBoard = true;
        return;
    }
}



// xu ly chuyen dong
function startGameEvent() {
    stopScoreBoard = false;
    btnStart.style.display = 'none';
    // btnStop.style.display = 'unset';
    clearInterval(intervalPosition);
    clearInterval(intervalCountdown);
    intervalPosition = setInterval(setPosition, 500);//thread interval position
    intervalCountdown = setInterval(countDown, 1000);// thread interval countdown
    setTimeout(stopGameEvent, count * 1000);
}
btnStart.addEventListener("click", startGameEvent);
// btnStop.addEventListener("click", stopGameEvent);

// xu ly diem cong score board
for (let i = 0; i < arrButton.length; i++) {
    arrButton[i].addEventListener("click", function () {
        let className = arrButton[i].className;

        switch (className) {
            case 'hinhtron do': diemSo += 10;
            case 'hinhtron xanhduong': diemSo += 5;
            case 'hinhtron xanhla': diemSo += 2;
            case 'hinhtron cam': diemSo += 1;
            case 'hinhtron den': diemSo += 0;
        }

        // xu ly bam game board moi bat dau tinh diem
        if (!stopScoreBoard) {
            scoreBoard.innerHTML = diemSo;
        }
        // xu ly game lag hơn khó chơi hơn theo level

    })
}



