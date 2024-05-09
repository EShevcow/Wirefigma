// Accordion
$(document).ready(function(){
  $('.accordion__header').click(function(event){
    if($('.accordion').hasClass('oneopen')){
        $('.accordion__body').not($(this).next()).slideUp(300);
    }
    
       $(this).next().slideToggle(300);
   
  });
});

/* Scrollspy
$(document).ready(function(){
  $('.scrollspy').scrollSpy();
});

// Animate Logo
$(document).ready(function(){
  $('.home .brandlogo img').css("transform","skew(0deg)");
  $('.boots').css("transform","translateX(0px)");
  $('.dont').css("transform","translateX(0px)");
  $('.index .btn').css("transform","translateY(0px)");
});
*/

// Modal Open
$('.modal-trigger').click(function(){
   $('.modal').slideToggle();
});

// Close Modal
$('.modal-close').click(function() {
   $('.modal').slideToggle();
});

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

