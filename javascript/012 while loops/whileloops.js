var runLoop = function() {
	var i = 0;
	var msg = '';
	while(i < 10)
	{
		msg += '<div>value is ' + i + '<div>';
		i++;
	}
	
	var element = window.document.getElementById('output');
	element.innerHTML = msg;
}

