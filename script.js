var x = 162, 
	y = 125;

$(document).ready(function() {
	generateGrid(x,y);
	mousey();
});

$('.new-grid').click(function() {
	generateGrid(x,y);
	mousey();
});


function generateGrid(x, y) {
	var $screen = $('#sketch-screen');
	$screen.empty();

	for (var i = 0; i < x; i++) {
		$($screen).append('<div class="grid-x"></div>')		
	}
	var $gridx = $('.grid-x');
	for (var i = 0; i < $gridx.length; i++) {
		for (var j = 0; j < y; j++) {
			$($gridx).append('<div class="grid-y"></div>');
		} break;
	}
}

function hoverTrail() {
	$('.grid-y').mouseover(function() {
		$(this).toggleClass('selected');
	})
}

function mousey() {
	$('.grid-y').click(function(e) {
		hoverTrail();
		$('.grid-y').css('cursor', 'url(pencil_icon4.gif), auto');
		$('.grid-x').css('cursor', 'url(pencil_icon4.gif), auto');
	})
}



