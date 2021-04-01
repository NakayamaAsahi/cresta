alert();

$(function(){
  $('.hb_menu').on('click',function(){
    $('span').toggleClass('active');
    $('nav').toggleClass('active');
    $('.triangle').toggleClass('open');

    if($('nav').hasClass('active')){
      $('nav').fadeIn();
    }else{
      $('nav').fadeOut();
    }
  });
});

$(function(){
  $('nav a').on('click'.function(){
    $('nav').removeClass('.active');
  });
});

$('ul a[href]').on('click', function(event) {
     $('.hb_menu').trigger('click');
 });
aaaa

 $('.hb_menu').on('click',function(){
   $('span').toggleClass('active');
   $('nav').toggleClass('active');
   $('.triangle').toggleClass('open');
   $('.triangleText').toggleClass('test');

   if($('nav').hasClass('active')){
     $('nav').fadeIn('');
   }else{
     $('nav').fadeOut('');
   }

   if($('.triangle').hasClass('open')){
     $('.triangle').hide().fadeIn();
   }else{
     $('.triangle').hide().fadeOut();
   }

   if($('triangleText').hasClass('test')){
     $('triangleText').fadeIn();
   }else{
     $('triangleText').fadeOut();
   }
 });
