$(document).ready(function(){
	var nav1 = $('#navbarDown');
	var nav2 = $('#navbarShow');
	
	nav1.mouseenter(function(){
//		nav1.removeClass("sticky-top");
		nav2.fadeIn("300");
		console.log("Mouse Entered");
	});
	
	
//	$(window).scroll(function() {
//    if ($(window).scrollTop() > 10) {
//		$("nav:first").addClass("sticky-top");
//		nav2.slideUp("slow");
//    }else{
//		$("nav:first").removeClass("sticky-top");
//		nav2.slideDown("slow");
//	}
//  });
});