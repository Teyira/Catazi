const form = document.querySelector(".form");
const username = form.querySelector("#name");
const email = form.querySelector("#email");
const num = form.querySelector("#num")
const option = form.querySelector("#option");
const message = form.querySelector("#message");
const emailError = form.querySelector(".errorMessage")

const regexPattern = /^(\w{2,20})([\. -_])?(\w{2,20})?(@\w{2,5}\.)(\w{2,5})$/;

email.addEventListener("input", function(e){
    const isValid = regexPattern.test(e.target.value);
    if(isValid){
        emailError.style.opacity = "0"
        email.style.border = "none";
    }else{
        emailError.style.opacity = "1"
        e.preventDefault;
        email.style.border="3px solid red";
    }
})

window.addEventListener("scroll",function(){
    var nav = document.querySelector(".navbar");
    if (window.innerWidth > 981) {
        nav.classList.toggle("sticky",window.scrollY > 0);
    } else {
        nav.classList.remove("sticky");
    }
})
const close = document.querySelector(".close");

const menuBar = document.querySelector(".menu");

const mobileMenu = document.querySelector(".mobile-menu ul");

menuBar.addEventListener("click", function(){
    mobileMenu.style.transform = "scale(1)";
    document.querySelector("html").style.overflowY = "hidden";
})
close.addEventListener("click", function(){
    mobileMenu.style.transform = "scale(0)";
    document.querySelector("html").style.overflowY = "scroll";
})
