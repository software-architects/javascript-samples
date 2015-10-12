var runLoop = function() {
	var msg = '';
	for (var i = 0; i < 10; i++) {
		msg += '<div>value is ' + i + '</div>';
	}
	
	var element = window.document.getElementById('output');
	element.innerHTML = msg;
}
