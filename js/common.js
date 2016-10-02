$(function(){
  var prod = $('.product'), buttonArrow = $('.triangle');
  buttonArrow.on('click',function () {
  buttonArrow.fadeOut();
  $("h1").css('margin-bottom','290px');
    $('html,body').animate({
    scrollTop: $('#product').offset().top
  },1000);
  });
});
