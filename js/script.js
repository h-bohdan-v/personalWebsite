let typed = new Typed(".input" , {
    strings:["Elizabeth Elmiz.", "Web Developer.","UX Designer.","Photographer."],
    typeSpeed: 70,
    backSpeed: 60,
    loop: true
})

let hamburger = document.querySelector(".hamb");
let navlist = document.querySelector(".nav-list");
let links = document.querySelector(".nav-list li");

hamburger.addEventListener("click", function() {
    this.classList.toggle("click");
    navlist.classList.toggle("open");
})

