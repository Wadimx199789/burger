const colors = document.querySelectorAll(".colors__color");
const body = document.querySelector("body");
const menu = document.querySelector(".menu");
const burgerButton = document.querySelector(".burger-menu");
const background = document.querySelector(".background");
const menuLinks = document.querySelectorAll(".menu__link");

menuLinks.forEach((menuLink)=>{
    menuLink.addEventListener("click",()=>{
        menu.classList.remove("active");
        background.classList.remove("active");
        if(burgerButton.classList.contains("active")){
            burgerButton.classList.remove("active");
            burgerButton.classList.add("close");
            setTimeout(()=>{
                burgerButton.classList.remove("close")
            },500)
        }
        else burgerButton.classList.add("active");
    })
})

colors.forEach((color)=>{
    color.addEventListener("mouseover",(e)=>{
        let bgColor = getComputedStyle(color).backgroundColor;
        body.style.backgroundColor = bgColor;
    })
});

burgerButton.addEventListener("click",()=>{
    menu.classList.toggle("active");
    background.classList.toggle("active");
    if(burgerButton.classList.contains("active")){
        burgerButton.classList.remove("active");
        burgerButton.classList.add("close");
        setTimeout(()=>{
            burgerButton.classList.remove("close")
        },500)
    }
    else burgerButton.classList.add("active");
});
background.addEventListener("click",()=>{
    menu.classList.remove("active");
    background.classList.remove("active");
    if(burgerButton.classList.contains("active")){
        burgerButton.classList.remove("active");
        burgerButton.classList.add("close");
        setTimeout(()=>{
            burgerButton.classList.remove("close")
        },500)
    }
    else burgerButton.classList.add("active");
})
