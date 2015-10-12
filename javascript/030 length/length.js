var run = function() {
	var a = [0, 1, 2, 3, 4, 5];
	var msg = '<div>a.length == ' + a.length + ', a = ' + a.join() + '</div>';
	
	a.length = 3;
	msg += '<div>a.length == ' + a.length + ', a = ' + a.join() + '</div>';
	
	a.length = 5;
	msg += '<div>a.length == ' + a.length + ', a = ' + a.join() + '</div>';
	
	window.document.getElementById('output').innerHTML = msg;
}

