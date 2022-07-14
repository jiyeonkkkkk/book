/* 이 책 어때? js */

$(function(){

    function prev4(){
        $('#aside_box1 > .aside_imgbox1 > li > img:last').prependTo('#aside_box1 > .aside_imgbox1 > li > img');
        $('#aside_box1 > .aside_imgbox1 > li > img').css({marginLeft:-91}); 
        $('#aside_box1 > .aside_imgbox1 > li > img').stop().animate({marginLeft:0},800);
    }

    function next4(){
        $('#aside_box1 > .aside_imgbox1 > li > img').stop().animate({marginLeft:-91}, function(){
            $('#aside_box1 > .aside_imgbox1 > li > img:first').appendTo('#aside_box1 > .aside_imgbox1 > li > img');
            $('#aside_box1 > .aside_imgbox1 > li > img').css({marginLeft:0});
        });
    }

    $('#aside_box1 > .aside_button > .aside_button1').click(function(){
        prev4();
    });

    $('#aside_box1 > .aside_button > .aside_button2').click(function(){
        next4();
    });
});

