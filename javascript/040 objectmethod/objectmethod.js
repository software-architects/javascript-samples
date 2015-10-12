function Rectangle(w, h) {
	this.width = w;
	this.height = h;
	this.area = function() {
		// this = object trough which function is called
		return this.width * this.height;
	}
}

function run() {
	var rect1 = new Rectangle(10, 20);
	var rect2 = new Rectangle(30, 40);
	
	var a1 = rect1.area();
	var a2 = rect2.area();
}


