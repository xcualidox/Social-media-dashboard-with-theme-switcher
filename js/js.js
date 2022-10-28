//Used to change into dark theme
//Basically toggle new style classes to DOM elements to change
//they colors
function darkTheme(){
    document.querySelector("body").classList.toggle("dark-body");
    document.querySelector(".top-pattern").classList.toggle("top-pattern-dark");
    document.querySelectorAll(".card").forEach(element=>{
        element.classList.toggle("dark-card")
    })
    document.querySelectorAll(".text-dark").forEach(element=>{
        element.classList.toggle("text-light")
    })
    document.querySelectorAll(".sub-text").forEach(element=>{
        element.classList.contains("l-text")? element.classList.toggle("text-light"):element.classList.toggle("sub-text-dark")
    })
    document.querySelector(".toggle").classList.toggle("toggle-dark");
    document.querySelector(".toggle-btn").classList.toggle("toggle-btn-active");
}
//adding click event to toggle button
document.querySelector(".toggle-btn").addEventListener("click", darkTheme)