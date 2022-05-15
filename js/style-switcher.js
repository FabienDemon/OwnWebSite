// Switcher toggle
const styleSwitcherToggle = document.querySelector(".style-switch-toggler");

styleSwitcherToggle.addEventListener("click",() =>{
    document.querySelector(".style-switcher").classList.toggle("open")
})

//hide style-switcher on scroll
window.addEventListener("scroll",()=>{
    if (document.querySelector(".style-switcher").classList.contains("open")){
        document.querySelector(".style-switcher").classList.remove("open")
    }
})

// Theme colors
const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color){
    alternateStyles.forEach((style)=>{
        if (color === style.getAttribute("title")){
            style.removeAttribute("disabled")
        }
        else{
            style.setAttribute("disabled","true")
        }
    })
}


/*window.onclick = function(e) {

    if (!e.target.matches('.style-switcher')) {
        console.log(e)
        var toggle = document.getElementById("style-switcher");
        console.log(toggle)
        if (toggle.classList.contains('open')) {
            toggle.classList.remove('open');
        }
    }
}*/