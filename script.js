$(document).on('scroll', function() {
	$('div.info').text('scroll position: ' + $(document).scrollTop() + 'px')
	if($(document).scrollTop() > 200) {
		$('div.info').addClass('active');
	} else {
		$('div.info').removeClass('active')
	}
})

