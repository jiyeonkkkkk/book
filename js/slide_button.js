
//버튼 hover 시 슬라이드 배경 색 전환

$(function(){
	$('#slider_btn > #btn_wrap > #btn > div:nth-of-type(1)').mouseenter(function(){
		$("#slider").css({"backgroundColor": "#dbf1ff"});

	});
	
	$('#slider_btn > #btn_wrap > #btn > div:nth-of-type(2)').mouseenter(function(){
		$("#slider").css({"backgroundColor": "#fff"});

	});

	$('#slider_btn > #btn_wrap > #btn > div:nth-of-type(3)').mouseenter(function(){
		$("#slider").css({"backgroundColor": "#90d4ce"});

	});

	$('#slider_btn > #btn_wrap > #btn > div:nth-of-type(4)').mouseenter(function(){
		$("#slider").css({"backgroundColor": "#c4ddf5"});

	});
	
});



