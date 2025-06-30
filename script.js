let nav_bar = document.querySelector(".navbar");
let body = document.querySelector("body");

document.querySelector("#menu_toggle").addEventListener("click", function () {
  nav_bar.classList.toggle("show");
  body.style.overflow = nav_bar.classList.contains("show") ? "hidden" : "auto";
});


let count=0;
document.querySelectorAll(".navbar ul li a").forEach((link) => {
  link.addEventListener("click", function () {
    count++;
    if (count % 2 == 0) {
    body.style.overflow = "auto";
    }
  });  
});



// locomotiveScroll initialization
// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#hero'),
//     smooth: true
// });