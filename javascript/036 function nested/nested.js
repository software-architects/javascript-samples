function outer() {
	function nested() {
		alert('Hello from nested');
	}
	
	// call nested function:
	nested();
	
}

function run() {
	outer();
	// fails... nested not defined
	// nested();	
}

