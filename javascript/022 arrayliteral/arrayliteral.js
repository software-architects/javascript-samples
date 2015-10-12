var run = function() {
	// simple array of strings
	var fruits = ['Apple', 'Banana', 'Peach'];
	var msg = '<h2>Fruits</h2><ol start="0">';
	for (var i = 0; i < fruits.length; i++) {
		msg += '<li>' + fruits[i] + '</li>';
	}
	msg += '</ol>';
	
	// mixed array of different types
	var mixed = ['some string', 42, true, , null, { firstName: 'Homer', lastName: 'Simpson' }];
	msg += '<h2>Mixed</h2><ol start="0">';
	for (var i = 0; i < mixed.length; i++) {
		msg += '<li>' + mixed[i] + '</li>';
	}
	msg += '</ol>';
	
	var elem = window.document.getElementById('output');
	elem.innerHTML = msg;
}
