function Rectangle(w, h) { 
	var that = this; 
	this.width = w; 
	this.height = h; 
	this.area = function() {
		return that.width * that.height;		
	}
}

var rect1 = new Rectangle(10, 20);
rect1.area();

var f = rect1.area;
f();
