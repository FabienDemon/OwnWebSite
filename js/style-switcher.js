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

// Go to top
//Get the button:
mybutton = document.getElementsByClassName("top");

// When the user scrolls down 20px from the top of the document, show the button

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0;
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