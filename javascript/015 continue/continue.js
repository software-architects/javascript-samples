var runContinue = function() {
	var msg = '';
	outerLoop:	for (var i = 0; i < 3; i++) {
		for(var j = 0; j < 5; j++) {
			msg += "<div>i = " + i + ", j = " + j + "</div>";
			if (j > 3) {
				continue outerLoop;
			}
		}
	}
	
	var elem = window.document.getElementById('output');
	elem.innerHTML = msg;
}

