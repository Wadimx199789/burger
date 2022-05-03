const colors = document.querySelectorAll(".colors__color");
const body = document.querySelector("body");

colors.forEach((color)=>{
    color.addEventListener("mouseover",(e)=>{
        let bgColor = getComputedStyle(color).backgroundColor;
        body.style.backgroundColor = bgColor;
    })
})