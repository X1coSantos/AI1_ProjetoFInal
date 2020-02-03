const slide = document.querySelector(".slider-images");
const slideImages = document.querySelectorAll(".slider-images img");
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");
let counter = 0;
let size = slideImages[0].clientWidth;

slide.style.transform = "translateX(" + (-size * counter + 1) + "px";

nextBtn.addEventListener('click', ()=>{
    size = slideImages[0].clientWidth;
    if(counter >= slideImages.length - 1) return;

    slide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    slide.style.transform = "translateX(" + (-size * counter) + "px";
});

prevBtn.addEventListener('click', ()=>{
    size = slideImages[0].clientWidth;
    if(counter <= 0) return;
    slide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    slide.style.transform = "translateX(" + (-size * counter) + "px";
});

slide.addEventListener("transitionend", ()=>{
    if(slideImages[counter].id === 'lastClone')
    {
        slide.style.transition = "none";
        counter = slideImages.length - 2;
        slide.style.transform = "translateX(" + (-size * counter) + "px";
    }

    if(slideImages[counter].id === 'firstClone')
    {
        slide.style.transition = "none";
        counter = slideImages.length - counter;
        slide.style.transform = "translateX(" + (-size * counter) + "px";
    }
});

var counter2 = 0;
setInterval(function(){
    if(counter2 > slideImages.length - 1){
        counter2 = 2;
    }
    slide.style.transition = "transform 0.4s ease-in-out";
    slide.style.transform = "translateX(" + (-size * counter2++) + "px";
}, 4000);



