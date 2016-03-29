function Rectangle(w, h) {
	this.width = w;
	this.height = h;
}

// area method moved to prototype
Rectangle.prototype.area = function() {
	return this.width * this.height;
}

function Circle(r) {
	this.radius = r;
}

Circle.prototype.area1 = function() {
	return Math.PI * this.radius * this.radius;
}

function run() {
	var rect1 = new Rectangle(10, 20);
	var a1 = rect1.area(); // as before
	
	var rect2 = new Rectangle(200, 300);
	if (rect2.__proto__ == rect1.__proto__) {
		alert('Are equal');
	}
	
	var circ1 = new Circle(10);
	if (rect2.__proto__ != circ1.__proto__) {
		alert('Are not equal');
	}
}

