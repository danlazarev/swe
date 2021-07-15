let body = document.querySelector('body'),
	cursor = document.querySelector('#cursor')

// document.onmousemove = function(event) {
// 	let a = event.clientX,
// 		b = event.clientY,
// 		c = event.pageX,
// 		d = event.pageY
// 		$(function() {
// 			cursor.animate({
// 				top: b + 'px',
// 				left: a + 'px'
// 			  }, 200, "ease")
// 		})
	
	
// 	// setTimeout(function() {
// 	// 	cursor.style.top = b + 'px'
// 	// 	cursor.style.left = a + 'px'
// 	// }, 100)
// }


// function getPosition(e){
// 	var x = y = 0;
 
// 	if (!e) {
// 		var e = window.event;
// 	}
 
// 	if (e.pageX || e.pageY){
// 		x = e.pageX;
// 		y = e.pageY;
// 	} else if (e.clientX || e.clientY){
// 		x = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
// 		y = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
// 	}
 
// 	return {x: x, y: y}
// }

$(function() {
	cursorjq = $('#cursor')

	$('body').mouseenter(function() {
		cursorjq.fadeIn()
	})

	$('body').mousemove(function(e) {
		// let coord = getPosition(e);
		let a = e.clientX,
			b = e.clientY
		
		setTimeout(function() {
			cursor.style.left = a + 'px'
			cursor.style.top = b + 'px'
			cursor.animate({
				left: a + 'px',
				top: b + 'px'
				}, 250, "ease")
		}, 30)
	})

	$('body').mouseleave(function() {
		cursorjq.fadeOut()
	})
	

})