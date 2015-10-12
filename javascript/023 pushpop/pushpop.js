var run = function() {
	var stack = [];
	stack.push(1, 2);	// [1, 2] 		Returns 2
	stack.pop();		// [1]			Returns 2
	stack.push(3);		// [1, 3]		Returns 2
	stack.pop();		// [1]			Returns 3
	stack.push([4,5]);	// [1, [4, 5]]	Returns 2
	stack.pop();		// [1]			Returns [4, 5]
	stack.pop();		// []			Returns 1
}

