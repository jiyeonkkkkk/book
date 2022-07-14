

/* 분야별 추천 - js */

$(function(){
    var i=0;
    $("#recommend2_nav > li").mouseenter(function(){
        i = ($(this).index())+1
        $("#recommend2_container > div").hide()


        $("#recommend2_nav > li").css({
            "border-bottom":"none",
            "color":"#000   "
        })

        $("#recommend2_nav > li:hover").css({
            "border-bottom":"2px solid #e66a57",
            "color":"#e66a57"
        })


        $(".recommend2 > #recommend2_container > div:nth-of-type"+"("+i+")").stop().fadeIn("fast")
    })
});