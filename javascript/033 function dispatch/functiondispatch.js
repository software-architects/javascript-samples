function myFunction(argumentA, argumentB) {
	document.write('<div>myFunction with 2 arguments</div>');
}

function myFunction(argument) {
	document.write('<div>myFunction with 1 argument</div>');
}

function run() {
	myFunction(1, 2);
	myFunction(1);
}

