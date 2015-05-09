
$('div.wrapper').on('click', 'input', function() {
	$('div.result img').css({
		'margin-top': '0'
	});
});

$('div.wrapper').on('click', 'div.gold a.calc', function() {
	var input = $('div.input-block input').val();
	var result;
	if(input != '' && input * 0 != 'NaN' && input >= 0) {
		
		$('div.input-block input').removeClass('error');
		
		result = input * 1 + 6.88;
		
		if(result <= 20) {
			$('div.silver div.result').css({'background-color': 'rgba(220, 220, 220, 0.3)'});
			$('div.gold div.result p').text(result.toFixed(1));
			$('div.gold p.comment').text('На такий бал має бути ваш твір');
		} else {
			$('div.gold div.result').css({'background-color': 'rgba(255, 26, 26, 0.5)'});
			$('div.gold div.result p').text('༼ ºل͟º ༽');
			$('div.gold p.comment').text('Медалі не буде');
		}
		
		$('div.gold div.result img').css({
			'margin-top': '-250px',
			'-webkit-animation': 'movingUp 7s',
			'-moz-animation': 'movingUp 7s',
			'-0-animation': 'movingUp 7s',
			'animation': 'movingUp 7s'
		});
		
		$('div.gold p.comment').css({
			'opacity': '1'
		});
		$('a.hug').css({'opacity': '1'});
	} else {
		$('div.input-block input').addClass('error');
	}
});

$('div.wrapper').on('click', 'div.silver a.calc', function() {
	var input = $('div.input-block input').val();
	var result;
	if(input != '' && input * 0 != 'NaN' && input >= 0) {
		
		$('div.input-block input').removeClass('error');
		
		result = input * 1 + 1.65;
		
		if(result <= 20) {
			$('div.silver div.result').css({'background-color': 'rgba(220, 220, 220, 0.3)'});
			$('div.silver div.result p').text(result.toFixed(1));
			$('div.silver p.comment').text('На такий бал має бути ваш твір');
		} else {
			$('div.silver div.result').css({'background-color': 'rgba(255, 26, 26, 0.5)'});
			$('div.silver div.result p').text('༼ ºل͟º ༽');
			$('div.silver p.comment').text('Медалі не буде');
		}
		
		$('div.silver div.result img').css({
			'margin-top': '-250px',
			'-webkit-animation': 'movingUp 7s',
			'-moz-animation': 'movingUp 7s',
			'-0-animation': 'movingUp 7s',
			'animation': 'movingUp 7s'
		});
		
		$('div.silver p.comment').css({
			'opacity': '1'
		});
		$('a.hug').css({'opacity': '1'});
	} else {
		$('div.input-block input').addClass('error');
	}
});

$(document).ready(function() {
	$('header').text("Чи матиму медаль?");
	$('div.input-block div p').text('Ваша кількість помилок у тестах з мови (БЕЗ КОМАХ)');
});