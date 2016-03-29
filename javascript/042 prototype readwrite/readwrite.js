function Circle(r) {
	this.radius = r;
}

Circle.prototype.pi = 3.1415
Circle.prototype.area = function() {
	return this.pi * this.radius * this.radius;	
}

function run() {
	var c = new Circle(10);
	c.pi = 4;
	// area calculated with pi = 4
	var area = c.area(); 
	
	var d = new Circle(20);
	// calculated with prototype.pi
	var area = d.area(); 
}

