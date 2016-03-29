function myFunc(arg1, arg2, arg3) {
	var msg = '';
	for (var i = 0; i < arguments.length; i++) {
		msg += ('<div>' + arguments[i] + '</div>');
	}
	
	return msg;
}

function run() {
	console.log('myFunc(10, 20, 30): ' + myFunc(10, 20, 30));
	console.log('myFunc(): ' + myFunc());
	console.log("myFunc(['a', 'b', 'c']): " + myFunc(['a', 'b', 'c']));
}

