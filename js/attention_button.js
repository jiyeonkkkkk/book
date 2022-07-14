/* 주목! 이달의책 js */

$(function () {
    function prev4(){
        $('#attention_wrap > ul > li:last').prependTo('#attention_wrap > ul');
        $('#attention_wrap > ul').css({marginLeft:-300}); 
        $('#attention_wrap > ul').stop().animate({marginLeft:0},800);
    }

    function next4(){
        $('#attention_wrap > ul').stop().animate({marginLeft:-300}, function(){
            $('#attention_wrap  > ul > li:first').appendTo('#attention_wrap > ul');
            $('#attention_wrap > ul').css({marginLeft:0});
        });
    }

    function slide4(){
        $('#attention_wrap > ul').stop().animate({marginLeft:-300}, function(){
            $('#attention_wrap > ul li:first').appendTo('#attention_wrap > ul');
            $('#attention_wrap > ul').css({marginLeft:0});
        });
    }

    setInterval(slide4, 3000);

    $('#attention_button > .fa-angle-left').click(function(){
        prev4();
    });

    $('#attention_button > .fa-angle-right').click(function(){
        next4();
    });
});