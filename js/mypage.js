

/* 마이페이지 */

$(function(){
  $('.mypage').mouseover(function(){
    $('#mypage_down').stop().hide();
    $('#mypage_up').stop().show();
    $('.mypage_sub').stop().slideDown();

  }).mouseout(function(){
    $('#mypage_up').stop().hide();
    $('#mypage_down').stop().show();
    $('.mypage_sub').stop().slideUp();
  });
});


/* language */

$(function(){
  $('.language').mouseover(function(){
    $('#language_down').stop().hide();
    $('#language_up').stop().show();
    $('.language_sub').stop().slideDown();

  }).mouseout(function(){
    $('#language_up').stop().hide();
    $('#language_down').stop().show();
    $('.language_sub').stop().slideUp();
  });
});
