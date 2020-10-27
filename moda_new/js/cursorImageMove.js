var lFollowX = 0,
lFollowY = 0,
x = 0,
y = 0,
friction = 1 / 50;

function moveBackground() {
	x += (lFollowX - x) * friction;
	y += (lFollowY - y) * friction;

	translate = 'translate(' + x + 'px, ' + y + 'px) scale(1.1)';

	$('#moveImage').css({
		'-webit-transform': translate,
		'-moz-transform': translate,
		'transform': translate
	});
				
	$('#moveImage1').css({
		'-webit-transform': translate,
		'-moz-transform': translate,
		'transform': translate
	});
				
	$('#moveImage3').css({
		'-webit-transform': translate,
		'-moz-transform': translate,
		'transform': translate
	});			

	window.requestAnimationFrame(moveBackground);
}

$(window).on('mousemove click', function(e) {
	var lMouseX = Math.max(-100, Math.min(150, $(window).width() / 2 - e.clientX));
	var lMouseY = Math.max(-100, Math.min(150, $(window).height() / 2 - e.clientY));
	lFollowX = (40 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
	lFollowY = (40 * lMouseY) / 100;
});

moveBackground();