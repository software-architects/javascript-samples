
interface Person {
	givenName : string;
	lastName : string;
}

var my_func = function(p : Person) {
	alert("hello " + p.givenName + " , " + p.lastName);
}

my_func({
	givenName : 'Philipp',
	lastName: 'Aumayr'
});


function Rectangle(w, h) {
	this.width = w;
	this.height = h;
	this.area = () => {
		return this.width * this.height;
	}
}

function run() {
	var arr = [1,23,4];
	arr.sort(function(a, b) { return a - b; });
	arr.sort((a, b) => { return a - b; });
	
	var rect = new Rectangle(10, 2);
	var areaF = rect.area;
	
	areaF();
	
}
