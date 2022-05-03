const colors = document.querySelectorAll(".colors__color");
const body = document.querySelector("body");
const menu = document.querySelector(".menu");
const burgerButton = document.querySelector(".burger-menu");
const background = document.querySelector(".background");

colors.forEach((color)=>{
    color.addEventListener("mouseover",(e)=>{
        let bgColor = getComputedStyle(color).backgroundColor;
        body.style.backgroundColor = bgColor;
    })
});

burgerButton.addEventListener("click",()=>{
    menu.classList.toggle("active");
    background.classList.toggle("active");
});
background.addEventListener("click",()=>{
    menu.classList.remove("active");
    background.classList.remove("active");
})
