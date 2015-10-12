function outer() {
	var someVar = 10;
	function inner() {
		var localVar = 20;
	}
}

function make_function(num) {
	function r() {
		alert('parameter: ' + numb);
	}
	
	return r;	
}

function run() {
	var funcs = [
		make_function(10),
		make_function('Hello!'),
		make_function(30)
	];
	
	for(var i = 0; i < funcs.length; i++) {
		funcs[i]();
	}
}