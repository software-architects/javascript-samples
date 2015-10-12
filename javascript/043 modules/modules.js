function run() {
	alert('publicFunction: ' + MyLib.publicFunction());
	
	// privateFunction cannot be accessed
	// hidden in anonymous function
	// MyLib.privateFunction -> undefined.
}