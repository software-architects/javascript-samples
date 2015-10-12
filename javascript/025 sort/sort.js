var run = function() {
	var fruits = ['Apple', 'Lime', 'Banana'];
	
	fruits.sort(); // fruits is now ['Apple', 'Banana', 'Lime']
	
	fruits.sort(function(a, b) { // custom sort function, more later
		return a.length - b.length; // return < 0, 0, or > 0 depending on order	
	})
	
	// fruits is now ['Lime', 'Apple', 'Banana']
}

