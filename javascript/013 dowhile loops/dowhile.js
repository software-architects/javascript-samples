var runLoop = function() {
	var msg = '';
	var i = 0;
	do{
		msg += '<div>value is ' + i + '</div>';
		i++;
	} while(i <= 10);
	
	var element = window.document.getElementById('output');
	element.innerHTML = msg;
}
