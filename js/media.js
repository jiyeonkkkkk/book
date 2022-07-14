

/* 미디어 추천! js */

$(function () {
    function prev4(){
        $('#media_wrap > .media_img > img:last').prependTo('#media_wrap > .media_img');
        $('#media_wrap > .media_img').css({marginLeft:-300}); 
        $('#media_wrap > .media_img').stop().animate({marginLeft:0},800);
    }

    function next4(){
        $('#media_wrap > .media_img').stop().animate({marginLeft:-300}, function(){
            $('#media_wrap > .media_img > img:first').appendTo('#media_wrap > .media_img');
            $('#media_wrap > .media_img').css({marginLeft:0});
        });
    }

    function slide4(){
        $('#media_wrap > .media_img').stop().animate({marginLeft:-300}, function(){
            $('#media_wrap > .media_img > img:first').appendTo('#media_wrap > .media_img');
            $('#media_wrap > .media_img').css({marginLeft:0});
        });
    }

    setInterval(slide4, 3000);

    $('#media_wrap > .media_img > .fa-angle-left').click(function(){
        prev4();
    });

    $('#media_wrap > .media_img > .fa-angle-right').click(function(){
        next4();
    });
});

