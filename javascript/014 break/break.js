var runBreak = function() {
	var msg = '';
	myLoop: for(var i = 0; i < 5; i++) {
		for(var j = 0; j < 5; j++) {
			msg += "<div>i = " + i + ", j = " + j + ", i * j = " + (i * j) + "</div>";
			if (i * j > 10) {
				msg += "<div>Breaking out of both loops</div>"
				break myLoop; // breaks out of both loops;
			}
		}
	}
	
	var elem = window.document.getElementById('output');
	elem.innerHTML = msg;
}

