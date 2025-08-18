let hamburger = document.querySelector(".js-hamburger")
let close = document.querySelector(".js-close")
let menuList = document.querySelector(".menuList") 
let is_opened = false

hamburger.addEventListener('click', () => {
    if (!is_opened){
        is_opened = true
        menuList.classList.toggle("links")
        close.classList.remove("close-icon")
        console.log("is opened")
    }else{
        is_opened = false
        close.classList.add("close-icon")
        console.log("Is closed")

    }
    
})

close.addEventListener('click', () => {
    if(is_opened){
        is_opened = false
        close.classList.add("close-icon")
        menuList.classList.remove("links")
    }else{
        is_opened = true
        close.classList.remove("close-icon")
    }
})