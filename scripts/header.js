const menuIcon = document.querySelector(".menu-icon");
const sideMenu = document.querySelector(".side-menu");

menuIcon.addEventListener("click", function() {
  sideMenu.classList.toggle("active");
});



const menuLinks = document.querySelectorAll(".menu-links li a");

menuLinks.forEach(link => {
  link.addEventListener("click", function() {
    sideMenu.classList.remove("active");
  });
});


document.addEventListener("DOMContentLoaded", function () {
  var header = document.getElementById("myHeader");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      header.classList.add("header-scrolled", "header-small");
    } else {
      header.classList.remove("header-scrolled", "header-small");
    }
  });
});

