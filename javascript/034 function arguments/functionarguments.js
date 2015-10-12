function myFunction(argumentA) {
	if (argumentA == undefined) {
		document.write("<div>argumentA is undefined</div>");
	} else {
		document.write("<div>argumentA is " + argumentA + "</div>");
	}
}

function run() {
	myFunction();
	myFunction(10);
	myFunction('bananas');
	myFunction(10, 'bananas');
}

