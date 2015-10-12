function run() {
	var callCount = 0;
	function nested() {
		callCount++;
		alert('callCount: ' + callCount);		
	}
	
	nested();
	nested();
	nested();
}

