var run = function() {
	var objA = { id: 'objA'};
	var objB = { id: 'objB'};
	
	var homer = {
		firstName : 'Homer',
		lastName : 'Simpson'
	};
	
	homer[objA] = 'Some Value A';
	homer[objB] = 'Some Value B';
	
	var msg = "<div>homer[objA] = " + homer[objA] + "</div>";
	msg += "<div>homer[objB] = " + homer[objB] + "</div>";
	
	msg += "<h2>Properties</h2><ul>";

	for (var property in homer) {
		msg += "<li>" + property + " = " + homer[property] + "</li>";
	}

	msg += "</ul>";	
	
	var elem = window.document.getElementById('output');
	elem.innerHTML = msg;
}

