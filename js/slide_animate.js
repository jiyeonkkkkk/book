



/* 슬라이드 버튼 호버하면 이미지 바뀜 */


	function slide(){

		$('.slide').stop().animate({marginLeft:-535}, function(){

			$('.slide > .recommend1_wrap:first').appendTo('.slide');

			$('.slide').css({marginLeft:0});

		});

	}

	setInterval(slide, 3000);
