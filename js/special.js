/* 특별판 special js */

$(function(){

    function prev4(){
        $('#special_container > #special_wrap > .special_box > li > a > img:last').prependTo('#special_container > #special_wrap > .special_box');
        $('#special_container > #special_wrap > .special_box').css({marginLeft:-320}); 
        $('#special_container > #special_wrap > .special_box').stop().animate({marginLeft:0},800);
    }

    function next4(){
        $('#special_container > #special_wrap > .special_box').stop().animate({marginLeft:-320}, function(){
            $('#special_container > #special_wrap > .special_box > li > a > img:first').appendTo('#special_container > #special_wrap > .special_box');
            $('#special_container > #special_wrap > .special_box').css({marginLeft:0});
        });
    }

    $('#special_container > #special_wrap > .special_box > .fa-angle-left').click(function(){
        prev4();
    });

    $('#special_container > #special_wrap > .special_box > .fa-angle-right').click(function(){
        next4();
    });
});