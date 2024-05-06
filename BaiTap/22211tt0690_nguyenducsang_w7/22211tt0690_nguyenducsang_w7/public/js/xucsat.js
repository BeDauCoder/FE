function taiXiu(){
   let rd = document.getElementById("kq").innerHTML=parseInt((Math.random() * 6)+1)

   var imagePath = ["./public/img/s1.jpg","./public/img/s2.jpg",
   "./public/img/s3.jpg","./public/img/s4.jpg",
   "./public/img/s5.jpg","./public/img/s6.jpg",];
   var imageElement = document.getElementById("img");

   switch (rd) {
    case 1:
        imageElement.src = imagePath[0];
      break;
    case 2:
        imageElement.src = imagePath[1];
      break;
    case 3:
        imageElement.src = imagePath[2];
      break;
    case 4:
        imageElement.src = imagePath[3];
      break;
    case 5:
        imageElement.src = imagePath[4];
      break;
    case 6:
        imageElement.src = imagePath[5];
      break;
  }
}