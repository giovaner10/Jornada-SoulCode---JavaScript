let index = 0
let images = document.querySelectorAll(".quadro img")
let btn = document.getElementById('btn')
console.log(images);
console.log(btn);


btn.addEventListener('click', ()=>{

    images[index].classList.remove("selected")
    index++


    if(index >= 2){index = 0}

    images[index].classList.add("selected")



    })