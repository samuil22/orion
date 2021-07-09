
$(document).ready(function(){ 
 
  $('.carousel').carousel({
    interval: 4000,
  });

  window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky){
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
};
  // slider product 
  $(".owl-carousel").owlCarousel({
loop:true,
autoplay:true,
autoplayHoverPause:true,
autoplayTimeout:4000,
responsive:{
      0:{
          items:1, 
      },
      600:{
          items:2,
      },
      1000:{
          items:4,
      }
    }
  });

});

 



