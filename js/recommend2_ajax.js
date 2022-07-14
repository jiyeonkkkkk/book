

//1

$.ajax({
	method: "GET",
	url: "https://dapi.kakao.com/v3/search/book?target=title",
	data: { query:"문학" },
	headers:{Authorization: "KakaoAK aed16f4d00ddda6e1463106773850f17"}
})


.done(function( msg ) {


	console.log( msg );
	var divs = document.getElementsByTagName('div');

	for(var i=0; i<divs.length; i++){

		var str=msg.documents[i].title;
        var str2=str.substring(0,25);

		$("#recommend2_wrap1 > .recommend2_box > .recommend2_content > li").eq(i).append("<img src='"+msg.documents[i].thumbnail+"'/>"); 
		$("#recommend2_wrap1 > .recommend2_box > .recommend2_content > li").eq(i).append("<p>"+str2+"..."+"</p>");
		$("#recommend2_wrap1 > .recommend2_box > .recommend2_content > li").eq(i).append("<span>"+msg.documents[i].price+"원"+"</span>");    

	}  
});




//2

$.ajax({
	method: "GET",
	url: "https://dapi.kakao.com/v3/search/book?target=title",
	data: { query:"인문" },
	headers:{Authorization: "KakaoAK aed16f4d00ddda6e1463106773850f17"}
})


.done(function( msg ) {


	console.log( msg );
	var divs = document.getElementsByTagName('div');

	for(var i=0; i<divs.length; i++){

		var str=msg.documents[i].title;
        var str2=str.substring(0,25);

		$("#recommend2_wrap2 > .recommend2_box > .recommend2_content > li").eq(i).append("<img src='"+msg.documents[i].thumbnail+"'/>"); 
		$("#recommend2_wrap2 > .recommend2_box > .recommend2_content > li").eq(i).append("<p>"+str2+"..."+"</p>");
		$("#recommend2_wrap2 > .recommend2_box > .recommend2_content > li").eq(i).append("<span>"+msg.documents[i].price+"원"+"</span>");  
	}  
});


//3

$.ajax({
	method: "GET",
	url: "https://dapi.kakao.com/v3/search/book?target=title",
	data: { query:"경제" },
	headers:{Authorization: "KakaoAK aed16f4d00ddda6e1463106773850f17"}
})


.done(function( msg ) {


	console.log( msg );
	var divs = document.getElementsByTagName('div');

	for(var i=0; i<divs.length; i++){

		var str=msg.documents[i].title;
        var str2=str.substring(0,25);

		$("#recommend2_wrap3 > .recommend2_box > .recommend2_content > li").eq(i).append("<img src='"+msg.documents[i].thumbnail+"'/>"); 
		$("#recommend2_wrap3 > .recommend2_box > .recommend2_content > li").eq(i).append("<p>"+str2+"..."+"</p>");
		$("#recommend2_wrap3 > .recommend2_box > .recommend2_content > li").eq(i).append("<span>"+msg.documents[i].price+"원"+"</span>");  
	}  
});


//4

$.ajax({
	method: "GET",
	url: "https://dapi.kakao.com/v3/search/book?target=title",
	data: { query:"아동" },
	headers:{Authorization: "KakaoAK aed16f4d00ddda6e1463106773850f17"}
})


.done(function( msg ) {


	console.log( msg );
	var divs = document.getElementsByTagName('div');

	for(var i=0; i<divs.length; i++){

		var str=msg.documents[i].title;
        var str2=str.substring(0,25);

		$("#recommend2_wrap4 > .recommend2_box > .recommend2_content > li").eq(i).append("<img src='"+msg.documents[i].thumbnail+"'/>"); 
		$("#recommend2_wrap4 > .recommend2_box > .recommend2_content > li").eq(i).append("<p>"+str2+"..."+"</p>");
		$("#recommend2_wrap4 > .recommend2_box > .recommend2_content > li").eq(i).append("<span>"+msg.documents[i].price+"원"+"</span>");  
	}  
});


//5

$.ajax({
	method: "GET",
	url: "https://dapi.kakao.com/v3/search/book?target=title",
	data: { query:"학습" },
	headers:{Authorization: "KakaoAK aed16f4d00ddda6e1463106773850f17"}
})


.done(function( msg ) {


	console.log( msg );
	var divs = document.getElementsByTagName('div');

	for(var i=0; i<divs.length; i++){

		var str=msg.documents[i].title;
        var str2=str.substring(0,25);

		$("#recommend2_wrap5 > .recommend2_box > .recommend2_content > li").eq(i).append("<img src='"+msg.documents[i].thumbnail+"'/>"); 
		$("#recommend2_wrap5 > .recommend2_box > .recommend2_content > li").eq(i).append("<p>"+str2+"..."+"</p>");
		$("#recommend2_wrap5 > .recommend2_box > .recommend2_content > li").eq(i).append("<span>"+msg.documents[i].price+"원"+"</span>");  
	}  
});

//6

$.ajax({
	method: "GET",
	url: "https://dapi.kakao.com/v3/search/book?target=title",
	data: { query:"외국" },
	headers:{Authorization: "KakaoAK aed16f4d00ddda6e1463106773850f17"}
})


.done(function( msg ) {


	console.log( msg );
	var divs = document.getElementsByTagName('div');

	for(var i=0; i<divs.length; i++){

		var str=msg.documents[i].title;
        var str2=str.substring(0,25);

		$("#recommend2_wrap6 > .recommend2_box > .recommend2_content > li").eq(i).append("<img src='"+msg.documents[i].thumbnail+"'/>"); 
		$("#recommend2_wrap6 > .recommend2_box > .recommend2_content > li").eq(i).append("<p>"+str2+"..."+"</p>");
		$("#recommend2_wrap6 > .recommend2_box > .recommend2_content > li").eq(i).append("<span>"+msg.documents[i].price+"원"+"</span>");  
	}  
});


//7

$.ajax({
	method: "GET",
	url: "https://dapi.kakao.com/v3/search/book?target=title",
	data: { query: "CD" },
	headers:{Authorization: "KakaoAK aed16f4d00ddda6e1463106773850f17"}
})


.done(function( msg ) {


	console.log( msg );
	var divs = document.getElementsByTagName('div');

	for(var i=0; i<divs.length; i++){

		var str=msg.documents[i].title;
        var str2=str.substring(0,25);

		$("#recommend2_wrap7 > .recommend2_box > .recommend2_content > li").eq(i).append("<img src='"+msg.documents[i].thumbnail+"'/>"); 
		$("#recommend2_wrap7 > .recommend2_box > .recommend2_content > li").eq(i).append("<p>"+str2+"..."+"</p>");
		$("#recommend2_wrap7 > .recommend2_box > .recommend2_content > li").eq(i).append("<span>"+msg.documents[i].price+"원"+"</span>");  
	}  
});












/*
	//6

	$.ajax({
		method: "GET",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: { query:"어쩌면 나도 무례한 사람일까" },
		headers:{Authorization: "KakaoAK aed16f4d00ddda6e1463106773850f17"}
	})


	.done(function( msg ) {


		console.log( msg );
		var divs = document.getElementsByTagName('div');

		for(var i=0; i<divs.length; i++){

			$("#attention_wrap > ul > li:nth-of-type(3) > .attention_box:nth-of-type(2) .attention_imgbox").eq(i).append("<img src='"+msg.documents[0].thumbnail+"'/>"); 
			$("#attention_wrap > ul > li:nth-of-type(3) > .attention_box:nth-of-type(2) .attention_textbox").eq(i).append("<p>"+msg.documents[0].title+"</p>");
			$("#attention_wrap > ul > li:nth-of-type(3) > .attention_box:nth-of-type(2) .attention_textbox").eq(i).append("<h5>"+msg.documents[i].sale_price+"원"+"</h5>");
			$("#attention_wrap > ul > li:nth-of-type(3) > .attention_box:nth-of-type(2) .attention_textbox").eq(i).append("<span>"+msg.documents[i].price+"원"+"</span>");    

		}  
	});

*/

