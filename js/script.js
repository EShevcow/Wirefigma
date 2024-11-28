
 //Scrolltop
 $(window).scroll(function (){
  if ($(this).scrollTop() > 100){
    $(".scroll-top").fadeIn();
  } else{
    $(".scroll-top").fadeOut();
  }
});
$(document).on("click", ".scroll-top", function(e){
  e.preventDefault();
  $('body, html').animate({scrollTop: 0}, 1000);
});

/* Animate Logo
$(document).ready(function(){
  $('.home .brandlogo img').css("transform","skew(0deg)");
  $('.boots').css("transform","translateX(0px)");
  $('.dont').css("transform","translateX(0px)");
  $('.index .btn').css("transform","translateY(0px)");
});
*/

// Add Or Remove Tooltips
setInterval(function(){
  let w = window.innerWidth;
  if (w < 960 && w > 540) {
    $('aside .sidenav__item').addClass('tooltip-right');

  }
  else if(w > 960){
    $('.navbar__toggle').slideUp();
    $('aside .sidenav__item').removeClass('tooltip-right');

  }
  else{
    $('aside .sidenav__item').removeClass('tooltip-right'); 
  }
}, 500);

// Toggle Menu
$('.navbar__burger').click(function(){
  $('.navbar__toggle').slideToggle();
});

$('.navbar-burger').click(function(){
  $('.navbar-toggle').slideToggle();
});



