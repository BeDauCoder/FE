// function Alert(){
//     alert("Hello",1+2)
// }

// innerHTML =document.getElementById("innerHTML").innerHTML=("innerHTML")

// document.write("document")

// console.log("console")



function myAge(){
    let yearNow = new Date().getFullYear();
    let year = parseInt(document.getElementsByName('year')[0].value);
    let age = yearNow - year;
    alert(age)
    
}

function MyDay(){
    let yearNow = new Date().getFullYear();
    let monthNow = new Date().getMonth();
    let dayNow = new Date().getDate();
    let days = new Date().getDay();

   
   
    alert("Day " + dayNow + " Month " + monthNow + "year "+ yearNow)
}