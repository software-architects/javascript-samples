var run = function() {
	var homer = {
		firstName: 'Homer',
		lastName: 'Simpson'
	};
	
	var msg = "<div>Homers' first name is " + homer.firstName + '</div>';
	msg += "<div>Homers' last name is " + homer['lastName'] + '</div>';
	
	homer['social security number'] = '568-47-0008';
	
	var ssn = 'social security number';
	msg += "<div>Homers' social security number is " + homer[ssn] + "</div>"; 
	
	// failures:
	// homer.'social security number'
	// homer.social security number
	
	var elem = window.document.getElementById('output');
	elem.innerHTML = msg;
}


