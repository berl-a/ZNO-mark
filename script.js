
$('div.wrapper').on('click', 'input', function() {
	$('div.result img').css({
		'margin-top': '0'
	});
});
$('div.wrapper').on('click', 'a.calc', function() {
	var input = $('div.input-block input').val();
	var result;
	if(input != '' && input * 0 != 'NaN' && input >= 0) {
		
		$('div.input-block input').removeClass('error');
		
		result = input * 1 + 6.87;
		
		if(result <= 20) {
			$('div.result p').text(result.toFixed(1));
			$('p.comment').text('На такий бал має бути ваш твір');
		} else {
			$('div.result').css({'background-color': 'red'});
			$('div.result p').text('༼ ºل͟º ༽');
			$('p.comment').text('Медалі не буде');
		}
		
		$('div.result img').css({
			'margin-top': '-250px',
			'-webkit-animation': 'movingUp 7s',
			'-moz-animation': 'movingUp 7s',
			'-0-animation': 'movingUp 7s',
			'animation': 'movingUp 7s'
		});
		
		$('p.comment').css({
			'opacity': '1'
		});
		
	} else {
		$('div.input-block input').addClass('error');
	}
});
$(document).ready(function() {
	$('header').text("Чи матиму медаль?");
	$('div.input-block div p').text('Ваша кількість помилок у тестах з мови (БЕЗ КОМАХ)');
});