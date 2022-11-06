$(document).ready(function(){
  $('p span, header span').mouseover(function(){
    $(this).css('cursor', 'pointer');
  });
  $('p span:not(.chess)').mouseover(function(){
    $(this).css('color', 'hsl(219, 85%, 26%)');
  });
  $('header span').mouseover(function(){
    $(this).css('font-weight', 'bold');
    $(this).css('color', 'hsl(219, 85%, 26%)');
  })
  $('header span').mouseout(function(){
    $(this).css('color', 'hsl(219, 12%, 42%)');
    $('header span').css('font-weight', '400');
  });
  $('p span:not(.chess)').mouseout(function(){
    $(this).css('color', 'hsl(219, 12%, 42%)');
  });
  $('.name').mouseover(function(){
    $(this).css('color', 'hsl(219, 85%, 26%)')
  });
  $('.name').mouseout(function(){
    $(this).css('color', 'initial')
  });
  $('.message').mouseover(function(){
    $('.message').css({
        'background': 'hsl(211, 68%, 94%)',
        'border': '1px solid hsl(211, 68%, 94%)'
      });  
  });
  $('.message').mouseout(function(){
    $(this).css({
      'background': 'white',
      'border': '1px solid hsl(219, 14%, 63%)'
    });
  });
});