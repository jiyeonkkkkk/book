

/* 이 책 어때? js */

$(function(){

    function prev4(){
        $('#how_wrap > .how_img > img:last').prependTo('#how_wrap > .how_img');
        $('#how_wrap > .how_img').css({marginLeft:-220}); 
        $('#how_wrap > .how_img').stop().animate({marginLeft:0},800);
    }

    function next4(){
        $('#how_wrap > .how_img').stop().animate({marginLeft:-220}, function(){
            $('#how_wrap > .how_img > img:first').appendTo('#how_wrap > .how_img');
            $('#how_wrap > .how_img').css({marginLeft:0});
        });
    }

    $('#how_wrap > .how_img > .fa-angle-left').click(function(){
        prev4();
    });

    $('#how_wrap > .how_img > .fa-angle-right').click(function(){
        next4();
    });
});
