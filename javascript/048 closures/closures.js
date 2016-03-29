
function run() {
	
	var functions = [];
	for (var i = 0; i < 3; i++) {
		// closure references outer function call (run() instance)
		// .. not variables
		functions.push(function() {
			alert('i = ' + i);
		});
	}
	
	// i == 3
	for(var x = 0; x < functions.length; x++) {
		var f = functions[x];
		f();
	}
}