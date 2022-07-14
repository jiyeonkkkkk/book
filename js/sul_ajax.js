


/* 정가인하 설민석 */

$.ajax({
	method: "GET",
	url: "https://dapi.kakao.com/v3/search/book?target=title",
	data: { query:"정가인하" },
	headers:{Authorization: "KakaoAK aed16f4d00ddda6e1463106773850f17"}
})


.done(function( msg ) {


	console.log( msg );
	var divs = document.getElementsByTagName('div');

	for(var i=0; i<divs.length; i++){

		var str=msg.documents[i].title;
        var str2=str.substring(0,10);

		$("#sul > li").eq(i).append("<img src='"+msg.documents[i].thumbnail+"'/>"); 
		$("#sul > li").eq(i).append("<p>"+str2+"..."+"</p>");
		$("#sul > li").eq(i).append("<h6>"+"정가 "+msg.documents[i].sale_price+"원"+"</h6>");
		$("#sul > li").eq(i).append("<span>"+msg.documents[i].price+"원"+"</span>");    

	}  
});
