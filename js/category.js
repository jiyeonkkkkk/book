

/* 전체 카테고리 */

	$(function(){

		/* 카테고리 클릭시 */
		$('.category1').click(function(){
			if($('#category_up').css('display')=='none'){
				$('#category_up').show()
				$('#category_down').hide()
				$('#sub').stop().slideDown()
			}

			else{
				$('#category_up').hide()
				$('#category_down').show()
				$('#sub').stop().slideUp()
			}

		})


		/* 카테고리 X 버튼 클릭시 */
		$("#subClose > .close").click(function () {
			$('#sub').stop().sildeUp()
			$('#category_up').hide()
			$('#category_down').show()
		})

	})