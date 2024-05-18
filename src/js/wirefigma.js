// Accordion
$(document).ready(function(){
    $('.accordion__header').click(function(event){
      if($('.accordion').hasClass('oneopen')){
          $('.accordion__body').not($(this).next()).slideUp(300);
      }
      
         $(this).next().slideToggle(300);
     
    });
  });

// Modal Open
$('.modal-trigger').click(function(){
    $('.modal').slideToggle();
 });
 
// Close Modal
 $('.modal-close').click(function() {
    $('.modal').slideToggle();
 });