function print(msg) {
	document.write('<div>' + msg + '</div>');
}

function distance(x1, y1, x2, y2) {
	var dx = x2 - x1;
	var dy = y2 - y1;
	return Math.sqrt(dx * dx + dy * dy);
}

function factorial(x) {
	if (x <= 1)
		return 1;
	return x * factorial(x-1);
}

function run() {
	var name = 'Homer';
	print("Hello, " + name);
	print("Welcome to my blog!");
	var total_dist = distance(0, 0, 2, 1) + distance(2, 1, 3, 5);
	print("The total distance is " + total_dist);
	print("the probability of that is " + factorial(5)/factorial(13));
}


