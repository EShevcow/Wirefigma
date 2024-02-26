// Accordion
$(document).ready(function(){
  $('.accordion__header').click(function(event){
    if($('.accordion').hasClass('oneopen')){
        $('.accordion__body').not($(this).next()).slideUp(300);
    }
    $(this).next().slideToggle(300);
  });
});

// Scrollspy
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

// Modal Open
$('.modal-trigger').click(function(){
   $('.modal').slideToggle();
});

// Close Modal
$('.modal-close').click(function() {
   $('.modal').slideToggle();
});