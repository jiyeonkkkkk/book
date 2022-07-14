/* 메인 슬라이더 */

$(function() {
    let i = 0;
    $("#btn .dot").eq(i).css({borderTop:"3px solid red", margin: "-1px 0 0 0"});

    $("#btn .dot").mouseenter(function () {
        i = $(this).index()
    })

    function slide() {

        i++;

        if (i > $(".slider_page:last").index()) {
            i = 0;
        }
        
        $(".slider_page").eq(i).stop().fadeIn("slow");
        $(".slider_page").eq(i-1).stop().fadeOut("slow");

        if (i == 1) {
            $("#slider_wrap").css({"background":"#fff7d2"})
            $("#btn .dot").eq(i-1).css({color:"black", borderTop:"none"});
            $("#btn .dot").eq(i).css({borderTop:"3px solid red", margin: "-1px 0 0 0"});

        } else if (i == 2) {
            $("#slider_wrap").css({"background": "#ffffff"})
            $("#btn .dot").eq(i-1).css({color:"black", borderTop:"none"});
            $("#btn .dot").eq(i).css({borderTop:"3px solid red", margin: "-1px 0 0 0"});

        } else if (i == 3) {
            $("#slider_wrap").css({"background": "#f7cd10"})
            $("#btn .dot").eq(i-1).css({color:"black", borderTop:"none", margin: "-1px 0 0 0"});
            $("#btn .dot").eq(i).css({borderTop:"3px solid red", margin: "-1px 0 0 0"});

        } else if (i == 4) {
            $("#slider_wrap").css({"background": "#f5ebd9"})
            $("#btn .dot").eq(i-1).css({color:"black", borderTop:"none", margin: "-1px 0 0 0"});
            $("#btn .dot").eq(i).css({borderTop:"3px solid red", margin: "-1px 0 0 0"});

        } else {
            $("#slider_wrap").css({"background": "#f5ebd9"})
            $("#btn .dot").eq(i-1).css({color:"black", borderTop:"none"});
            $("#btn .dot").eq(i).css({borderTop:"3px solid red", margin: "-1px 0 0 0"});
        }
    }


    $("#btn .dot").eq(0).mouseenter(function () {
        var i = 0;

        $("#slider_wrap").css({"background": "#f5ebd9"});
        $("#btn .dot").css({borderTop: "none"});
        $(this).css({borderTop: "3px solid red", margin:"-1px 0 0 0"});
        $(".slider_page").stop().hide();
        $(".slider_page").eq(0).stop().show();
    });

    $("#btn .dot").eq(1).mouseenter(function () {
        var i = 0;

        $("#slider_wrap").css({"background": "#fff7d2"});
        $("#btn .dot").css({borderTop: "none"});
        $(this).css({borderTop: "3px solid red", margin:"-1px 0 0 0"});
        $(".slider_page").stop().hide();
        $(".slider_page").eq(1).stop().show();
    });

    $("#btn .dot").eq(2).mouseenter(function () {
        var i = 0;

        $("#slider_wrap").css({"background": "#ffffff"});
        $("#btn .dot").css({borderTop: "none"});
        $(this).css({borderTop: "3px solid red", margin:"-1px 0 0 0"});
        $(".slider_page").stop().hide();
        $(".slider_page").eq(2).stop().show();
    });

    $("#btn .dot").eq(3).mouseenter(function () {
        var i = 0;

        $("#slider_wrap").css({"background": "#f7cd10"});
        $("#btn .dot").css({borderTop: "none"});
        $(this).css({borderTop: "3px solid red", margin:"-1px 0 0 0"});
        $(".slider_page").stop().hide();
        $(".slider_page").eq(3).stop().show();
    });



    let ani = setInterval(slide, 5000)

    $("#btn .dot").mouseover(function () {
        clearInterval(ani);
    });

    $("#btn .dot").mouseout(function () {
        $(this).css({borderTop: "3px solid red", margin: "-1px 0 0 0"});
        ani = setInterval(slide, 5000);
    });

})