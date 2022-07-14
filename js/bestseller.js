

	/* 슬라이드 right _ 베스트셀러 */

	$(function(){
		$('.week_lank').hide();
		$('#day').mouseover(function(){
			$('.week_lank').hide();
			$('.date_lank').show();
			$('#week').css({"border-bottom":"1px solid #b3b3b3"});
			$('#day').css({"border-bottom":"none"});
		});
		$('#week').mouseover(function(){
			$('.date_lank').stop().hide();
			$('.week_lank').stop().show();
			$('#day').css({"border-bottom":"1px solid #b3b3b3"});
			$('#week').css({"border-bottom":"none"});
		});
	});
