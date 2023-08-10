let button = document.querySelector(".menubar");
let clos = document.querySelector(".close");
let ul = document.querySelector(".show");


button.addEventListener("click", () => {
    clos.style.right = "60px";
    button.style.right = "6000px";
    ul.style.top = "85px";
    clos.style.transition = ".7s";
    ul.style.transition = ".7s";
})

clos.addEventListener("click", () => {
    button.style.right = "60px";
    clos.style.right = "6000px";
    ul.style.top = "-1085px";
    button.style.transition = ".7s";
    ul.style.transition = ".7s";
})