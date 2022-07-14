


//1

$.ajax({
	method: "GET",
	url: "https://dapi.kakao.com/v3/search/book?target=title",
	data: { query:"방탄소년단 CD" },
	headers:{Authorization: "KakaoAK aed16f4d00ddda6e1463106773850f17"}
})


.done(function( msg ) {


	console.log( msg );
	var divs = document.getElementsByTagName('div');

	for(var i=0; i<divs.length; i++){

		$(".cd_box1 > .cd_imgbox > div").eq(i).append("<img src='"+msg.documents[i].thumbnail+"'/>"); 
		$(".cd_box1 > .cd_textbox > span").eq(i).append("<span>"+msg.documents[i].title+"</spon>");
		$(".cd_box1 > .cd_textbox > h6").eq(i).append("<h6>"+msg.documents[i].sale_price+"원"+"</h6>");
		$(".cd_box1 > .cd_textbox > h5").eq(i).append("<h5>"+msg.documents[i].price+"원"+"</h5>");    

	}  
});