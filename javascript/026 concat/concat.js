var run = function() {
	var a = [1, 2, 3];
	a.concat(4, 5);				// Returns [1, 2, 3, 4, 5]
	a.concat([4, 5]);			// Returns [1, 2, 3, 4, 5]
	
	a.concat([4, 5], [6, 7]);	// Returns [1, 2, 3, 4, 5, 6, 7]
	// non recursive
	a.concat(4, [5, [6, 7]]);	// Returns [1, 2, 3, 4, 5, [6, 7]] 
}

