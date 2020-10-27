$(document).ready(function(){
	$("#imageSendBottom").hover(function(){
		$("#imageSendBottom").attr("src", "images/tryon2.png");
		$("#imageSendUp").attr("src", "images/tryon1.gif");
		
	});
				
	$("#imageSendBottom").mouseleave(function(){
		$("#imageSendBottom").attr("src", "images/tryon1.gif");
		$("#imageSendUp").attr("src", "images/tryon2.png");
	});
});

$(document).ready(function(){
	$("#imageSendBottom1").mouseenter(function(){
		$("#imageSendBottom1").attr("src", "./images/tryon3.png");
		$("#imageSendUp1").attr("src", "./images/tryon4.gif");
	});
				
	$("#imageSendBottom1").mouseleave(function(){
		$("#imageSendBottom1").attr("src", "./images/tryon4.gif");
		$("#imageSendUp1").attr("src", "./images/tryon3.png");
	});
});

$(document).ready(function(){
	$("#imageSendBottom2").mouseenter(function(){
		$("#imageSendBottom2").attr("src", "./images/tryon6.gif");
		$("#imageSendUp2").attr("src", "./images/tryon5.gif");
	});
				
	$("#imageSendBottom2").mouseleave(function(){
		$("#imageSendBottom2").attr("src", "./images/tryon5.gif");
		$("#imageSendUp2").attr("src", "./images/tryon6.gif");
	});
});