var run = function() {
	var homer = {
		firstName: 'firstName',
		lastName: 'lastName'	
	};
	
	var msg = '<div>homer.firstName = ' + homer.firstName + '</div>';
	delete homer.firstName;
	msg += '<div>homer.firstName = ' + homer.firstName + '</div>';
	msg += '<h2>Properties:</h2><ul>'
	for (var prop in homer) {
		msg += '<li>' + prop + ' = ' + homer[prop] + '</li>';
	}
	msg += '</ul>'
	
	var elem = window.document.getElementById('output');
	elem.innerHTML = msg;
}

