var run = function() {
	var homer = { firstName: 'Homer', lastName: 'Simpson' };
	var bart = { firstName: 'Bart', lastName: 'Simpson' };
	var lisa = { firstName: 'Lisa', lastName: 'Simpson' };
	
	bart.dad = homer;
	lisa.dad = homer;
	
	var msg = '<div>bart.dad.lastName = ' + bart.dad.lastName + '</div>';

	// changing homer via bart also changes object referenced by lisa
	bart.dad.age = 38;
	msg += '<div>lisa.dad.age = ' + lisa.dad.age + '</div>';
	
	var elem = window.document.getElementById('output');
	elem.innerHTML = msg;
}

