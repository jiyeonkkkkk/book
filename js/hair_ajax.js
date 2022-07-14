
/* 특가할인 콩순이 */

$.ajax({
	method: "GET",
	url: "https://dapi.kakao.com/v3/search/book?target=title",
	data: { query:"엉뚱발랄 콩순이 스티커" },
	headers:{Authorization: "KakaoAK aed16f4d00ddda6e1463106773850f17"}
})


.done(function( msg ) {


	console.log( msg );
	var divs = document.getElementsByTagName('div');

	for(var i=0; i<divs.length; i++){

		$("#hair > li").eq(i).append("<img src='"+msg.documents[i].thumbnail+"'/>"); 
		$("#hair > li").eq(i).append("<p>"+msg.documents[i].title+"</p>");
		$("#hair > li").eq(i).append("<h6>"+"정가 "+msg.documents[i].sale_price+"원"+"</h6>");
		$("#hair > li").eq(i).append("<span>"+msg.documents[i].price+"원"+"</span>");    

	}  
});
