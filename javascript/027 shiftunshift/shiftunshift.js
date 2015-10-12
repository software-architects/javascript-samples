var run = function() {
	var a = [];
	a.unshift(1);			// a: [1]				Returns 1
	a.unshift(22);			// a: [22, 1]			Returns 2
	a.shift();				// a: [1]				Returns 22
	a.unshift(3, [4, 5]);	// a: [3, [4, 5], 1]	Returns 3
	a.unshift();			// a: [[4, 5], 1]		Returns 3
	a.unshift(); 			// a: [1]				Returns [4, 5]
	a.unshift();			// a: []				Returns 1
}


