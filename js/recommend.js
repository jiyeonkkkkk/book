

/* 인터파크 추천 버튼 양옆 버튼 js */

$(function(){

    function prev4(){
        $('.slide > .recommend1_wrap:last').prependTo('.recommend1_wrap');
        $('.recommend1_wrap').css({marginLeft:-300}); 
        $('.recommend1_wrap').stop().animate({marginLeft:0},800);
    }

    function next4(){
        $('.recommend1_wrap').stop().animate({marginLeft:-300}, function(){
            $('.slide > .recommend1_wrap:first').appendTo('.recommend1_wrap');
            $('.recommend1_wrap').css({marginLeft:0});
        });
    }

    $('.slide > .fa-angle-left').click(function(){
        prev4();
    });

    $('.slide > .fa-angle-right').click(function(){
        next4();
    });
});