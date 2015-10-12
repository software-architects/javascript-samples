var runForin = function() {
	var homer = {
		firstName: 'Homer',
		lastName: 'Simpson',
		spouse: {
			firstName: 'Marge',
			lastName: 'Simpson'
		} 
	};
	
	var msg = '';
	for (var prop in homer) {
		msg += '<div>' + prop + " = " + homer[prop] + '</div>';
	}
	
	var elem = window.document.getElementById('output');
	elem.innerHTML = msg;
}

