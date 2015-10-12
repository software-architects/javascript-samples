function Rectangle(w, h) {
	this.width = w;
	this.height = h;
}

// area method moved to prototype
Rectangle.prototype.area = function() {
	return this.width * this.height;
}

function run() {
	var rect1 = new Rectangle(10, 20);
	var a1 = rect1.area(); // as before
}

