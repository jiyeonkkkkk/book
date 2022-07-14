

/*특가할인 정가인하 button*/


$(function() {
  
  $("#sale_header > .sale2").click(function () {
    $("#sale_header > .sale2").css({"border":"1px solid #000", "border-bottom":"none"})
    $("#sale_header > .sale1").css({"border":"none"})
    $("#hair").stop().hide();
    $("#sul").stop().show();
    $("#sul").css({"opacity":"1"})

  })

  $("#sale_header > .sale1").click(function () {
    $("#sale_header > .sale2").css({"border":"none"})
    $("#sale_header > .sale1").css({"border":"1px solid #000", "border-bottom":"none"})
    $("#hair").stop().show();
    $("#sul").stop().hide();

  })


});



