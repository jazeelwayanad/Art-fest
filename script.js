window.onscroll = function () {
  myFunction();
};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

$(document).ready(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() > 20) {
      $("i").css({
        opacity: "1",
        "pointer-events": "auto",
      });
    } else {
      $("i").css({
        opacity: "0",
        "pointer-events": "none",
      });
    }
  });
  $("i").click(function () {
    $("html").animate({ scrollTop: 0 }, 500);
  });
});

const body = document.querySelector("body");
const navlinks = document.querySelector(".navlinks");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = ()=>{
  navlinks.classList.add("active");
  menuBtn.classList.add("hide");
  body.classList.add("disablescroll");
}
cancelBtn.onclick = ()=>{
  navlinks.classList.remove("active");
  menuBtn.classList.remove("hide");
  body.classList.remove("disablescroll");
}