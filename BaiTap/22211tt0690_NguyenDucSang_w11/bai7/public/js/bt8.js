const largeImg = document.querySelector('.large-img');
const smallImgs = document.querySelectorAll('.small-img');


let i = 0;

// smallImgs.forEach((item) => {
//     item.addEventListener("click", () => {
//         changesImg(item);
//         i = index;
//     })
// })

for (let index = 0; index<smallImgs.length;index++){
    const item = smallImgs[index]
    item.addEventListener("click", () => {
        changesImg(item);
        i = index;
    });
}

function changesImg(item){
    largeImg.setAttribute('src', item.getAttribute('src'));
        smallImgs.forEach((item2) => {
            item2.classList.add("faded");
            item2.classList.remove("border")
        })
        item.classList.remove("faded");
        item.classList.add("border");
}

setInterval(()=>{
    item3 = smallImgs[i];
    changesImg(item3)
    i++;
    if (i == 3)
    {
        i=0
    }
},1000)


