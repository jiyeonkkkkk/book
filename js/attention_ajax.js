

//1

$.ajax({
	method: "GET",
	url: "https://dapi.kakao.com/v3/search/book?target=title",
	data: { query:"나를 살게 하는 것들" },
	headers:{Authorization: "KakaoAK aed16f4d00ddda6e1463106773850f17"}
})


.done(function( msg ) {


	console.log( msg );
	var divs = document.getElementsByTagName('div');

	for(var i=0; i<divs.length; i++){

		$("#attention_wrap > ul > li:nth-of-type(1) > .attention_box:nth-of-type(1) .attention_imgbox").eq(i).append("<img src='"+msg.documents[0].thumbnail+"'/>"); 
		$("#attention_wrap > ul > li:nth-of-type(1) > .attention_box:nth-of-type(1) .attention_textbox").eq(i).append("<p>"+msg.documents[0].title+"</p>");
		$("#attention_wrap > ul > li:nth-of-type(1) > .attention_box:nth-of-type(1) .attention_textbox").eq(i).append("<h5>"+msg.documents[i].sale_price+"원"+"</h5>");
		$("#attention_wrap > ul > li:nth-of-type(1) > .attention_box:nth-of-type(1) .attention_textbox").eq(i).append("<span>"+msg.documents[i].price+"원"+"</span>");    

	}  
});

//2

$.ajax({
	method: "GET",
	url: "https://dapi.kakao.com/v3/search/book?target=title",
	data: { query:"빅토리 노트" },
	headers:{Authorization: "KakaoAK aed16f4d00ddda6e1463106773850f17"}
})


.done(function( msg ) {


	console.log( msg );
	var divs = document.getElementsByTagName('div');

	for(var i=0; i<divs.length; i++){

		$("#attention_wrap > ul > li:nth-of-type(1) > .attention_box:nth-of-type(2) > .attention_imgbox").eq(i).append("<img src='"+msg.documents[0].thumbnail+"'/>"); 
		$("#attention_wrap > ul > li:nth-of-type(1) > .attention_box:nth-of-type(2) > .attention_textbox").eq(i).append("<p>"+msg.documents[0].title+"</p>");
		$("#attention_wrap > ul > li:nth-of-type(1) > .attention_box:nth-of-type(2) > .attention_textbox").eq(i).append("<h5>"+msg.documents[i].sale_price+"원"+"</h5>");
		$("#attention_wrap > ul > li:nth-of-type(1) > .attention_box:nth-of-type(2) > .attention_textbox").eq(i).append("<span>"+msg.documents[i].price+"원"+"</span>");    

	}  
});

//3

$.ajax({
	method: "GET",
	url: "https://dapi.kakao.com/v3/search/book?target=title",
	data: { query:"퀀텀 라이프" },
	headers:{Authorization: "KakaoAK aed16f4d00ddda6e1463106773850f17"}
})


.done(function( msg ) {


	console.log( msg );
	var divs = document.getElementsByTagName('div');

	for(var i=0; i<divs.length; i++){

		$("#attention_wrap > ul > li:nth-of-type(2) > .attention_box:nth-of-type(1) .attention_imgbox").eq(i).append("<img src='"+msg.documents[0].thumbnail+"'/>"); 
		$("#attention_wrap > ul > li:nth-of-type(2) > .attention_box:nth-of-type(1) .attention_textbox").eq(i).append("<p>"+msg.documents[0].title+"</p>");
		$("#attention_wrap > ul > li:nth-of-type(2) > .attention_box:nth-of-type(1) .attention_textbox").eq(i).append("<h5>"+msg.documents[i].sale_price+"원"+"</h5>");
		$("#attention_wrap > ul > li:nth-of-type(2) > .attention_box:nth-of-type(1) .attention_textbox").eq(i).append("<span>"+msg.documents[i].price+"원"+"</span>");    

	}  
});


//4

$.ajax({
	method: "GET",
	url: "https://dapi.kakao.com/v3/search/book?target=title",
	data: { query:"코로나와 잠수복" },
	headers:{Authorization: "KakaoAK aed16f4d00ddda6e1463106773850f17"}
})


.done(function( msg ) {


	console.log( msg );
	var divs = document.getElementsByTagName('div');

	for(var i=0; i<divs.length; i++){

		$("#attention_wrap > ul > li:nth-of-type(2) > .attention_box:nth-of-type(2) .attention_imgbox").eq(i).append("<img src='"+msg.documents[0].thumbnail+"'/>"); 
		$("#attention_wrap > ul > li:nth-of-type(2) > .attention_box:nth-of-type(2) .attention_textbox").eq(i).append("<p>"+msg.documents[0].title+"</p>");
		$("#attention_wrap > ul > li:nth-of-type(2) > .attention_box:nth-of-type(2) .attention_textbox").eq(i).append("<h5>"+msg.documents[i].sale_price+"원"+"</h5>");
		$("#attention_wrap > ul > li:nth-of-type(2) > .attention_box:nth-of-type(2) .attention_textbox").eq(i).append("<span>"+msg.documents[i].price+"원"+"</span>");    

	}  
});




	//5

	$.ajax({
		method: "GET",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: { query:"사야 할 집 팔아야 할 집" },
		headers:{Authorization: "KakaoAK aed16f4d00ddda6e1463106773850f17"}
	})
	

	.done(function( msg ) {


		console.log( msg );
		var divs = document.getElementsByTagName('div');

		for(var i=0; i<divs.length; i++){

			$("#attention_wrap > ul > li:nth-of-type(3) > .attention_box:nth-of-type(1) .attention_imgbox").eq(i).append("<img src='"+msg.documents[0].thumbnail+"'/>"); 
			$("#attention_wrap > ul > li:nth-of-type(3) > .attention_box:nth-of-type(1) .attention_textbox").eq(i).append("<p>"+msg.documents[0].title+"</p>");
			$("#attention_wrap > ul > li:nth-of-type(3) > .attention_box:nth-of-type(1) .attention_textbox").eq(i).append("<h5>"+msg.documents[i].sale_price+"원"+"</h5>");
			$("#attention_wrap > ul > li:nth-of-type(3) > .attention_box:nth-of-type(1) .attention_textbox").eq(i).append("<span>"+msg.documents[i].price+"원"+"</span>");    

		}  
	});


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


