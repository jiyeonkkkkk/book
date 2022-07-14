

	//1

	$.ajax({
		method: "GET",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: { query:"한컷 한국사" },
		headers:{Authorization: "KakaoAK aed16f4d00ddda6e1463106773850f17"}
	})
	

	.done(function( msg ) {


		console.log( msg );
		var divs = document.getElementsByTagName('div');

		for(var i=0; i<divs.length; i++){

			$(".slide > .recommend1_wrap:nth-of-type(1) > .book_box").eq(i).append("<img src='"+msg.documents[0].thumbnail+"'/>"); 
			$(".slide > .recommend1_wrap:nth-of-type(1) > .book_text").eq(i).append("<p>"+msg.documents[0].title+"</p>");

			var str = msg.documents[i].contents;
			var str2 = str.substring(0,60);

			$(".slide > .recommend1_wrap:nth-of-type(1) > .ex").eq(i).append("<p>"+str2+"</p>");   

		}  
	});

	//2

	$.ajax({
		method: "GET",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: { query:"그림책, 어떻게 읽어 줄까?" },
		headers:{Authorization: "KakaoAK aed16f4d00ddda6e1463106773850f17"}
	})
	

	.done(function( msg ) {


		console.log( msg );
		var divs = document.getElementsByTagName('div');

		for(var i=0; i<divs.length; i++){

			$(".slide > .recommend1_wrap:nth-of-type(2) > .book_box").eq(i).append("<img src='"+msg.documents[0].thumbnail+"'/>"); 
			$(".slide > .recommend1_wrap:nth-of-type(2) > .book_text").eq(i).append("<p>"+msg.documents[0].title+"</p>");

			var str = msg.documents[i].contents;
			var str2 = str.substring(0,60);

			$(".slide > .recommend1_wrap:nth-of-type(2) > .ex").eq(i).append("<p>"+str2+"</p>");   

		}  
	});

	//3

	$.ajax({
		method: "GET",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: { query:"우편함 속 세계사" },
		headers:{Authorization: "KakaoAK aed16f4d00ddda6e1463106773850f17"}
	})
	

	.done(function( msg ) {


		console.log( msg );
		var divs = document.getElementsByTagName('div');

		for(var i=0; i<divs.length; i++){

			$(".slide > .recommend1_wrap:nth-of-type(3) > .book_box").eq(i).append("<img src='"+msg.documents[0].thumbnail+"'/>"); 
			$(".slide > .recommend1_wrap:nth-of-type(3) > .book_text").eq(i).append("<p>"+msg.documents[0].title+"</p>");

			var str = msg.documents[i].contents;
			var str2 = str.substring(0,60);

			$(".slide > .recommend1_wrap:nth-of-type(3) > .ex").eq(i).append("<p>"+str2+"</p>");   

		}  
	});

	//4

	$.ajax({
		method: "GET",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: { query:"윙페더 사가 1" },
		headers:{Authorization: "KakaoAK aed16f4d00ddda6e1463106773850f17"}
	})
	

	.done(function( msg ) {


		console.log( msg );
		var divs = document.getElementsByTagName('div');

		for(var i=0; i<divs.length; i++){

			$(".slide > .recommend1_wrap:nth-of-type(4) > .book_box").eq(i).append("<img src='"+msg.documents[0].thumbnail+"'/>"); 
			$(".slide > .recommend1_wrap:nth-of-type(4) > .book_text").eq(i).append("<p>"+msg.documents[0].title+"</p>");

			var str = msg.documents[i].contents;
			var str2 = str.substring(0,60);

			$(".slide > .recommend1_wrap:nth-of-type(4) > .ex").eq(i).append("<p>"+str2+"</p>");   

		}  
	});
