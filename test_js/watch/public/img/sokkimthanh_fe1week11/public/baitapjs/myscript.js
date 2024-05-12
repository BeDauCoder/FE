// console.log("cách 3: Welcome to TDC");
// document.write("<h4>Cách 4: Welcome to TDC</h4>");



// let hoten = "Nguyen Van Hoang Thuong";
// let arr = hoten.split(" ");
// let ten = arr[arr.length - 1];
// let ho = hoten.substring(0, arr.length - ten.length);

// let KETQUA = `HO: ${ho}, TEN: ${ten}`
// console.log(KETQUA);

// function getName() {
//     let arr = hoten.split(" ");
//     let tenSplit = arr[arr.length - 1];
//     let viTriKhoangTrangCuoi = hoten.lastIndexOf(" ");
//     let tenSubstring = hoten.substring(viTriKhoangTrangCuoi + 1);
//     let ho = hoten.substring(0, viTriKhoangTrangCuoi);
//     let KETQUA = `TEN 1: ${tenSplit}, TEN 2: ${tenSubstring}`;
//     return KETQUA;
// }
// function getAge() {
//     let namSinh = window.prompt("vui long nhap nam sinh");
//     let now = new Date();
//     let KETQUA = now.getFullYear() - parseInt(namSinh);
//     document.getElementById('tuoi').innerHTML = KETQUA;
//     return KETQUA;
// }

// function emBeTapDem() {
//     let s1 = Math.floor(Math.random() * 11);
//     let s2 = Math.floor(Math.random() * (11 - s1));
//     let ketqua = window.prompt(`Em be tap dem: ${s1} + ${s2} = ?`);
//     let message;
//     if (ketqua == s1 + s2) {
//         // console.log(`Dap an dung! ${s1} + ${s2} = ${s1+s2}`);      
//         message = `Dap an dung! \n ${s1} + ${s2} = ${s1 + s2}`;
//         window.alert(message);
//     } else {
//         // console.error(`Ket qua sai! \n ${s1} + ${s2} = ${s1+s2}`);        
//         message = `Ket qua sai! \n ${s1} + ${s2} = ${s1 + s2}`;
//     }
// }