var run = function() {
	var a = [0,1,2,3,4,5];
	
	var result = a.splice(2, 2, 'a', 'b', 'c'); 
	// a [0, 1, 'a', 'b', 'c', 4, 5] 	
	// Returns [2, 3]
	
	window.document.getElementById('output').innerHTML = a.join();
	window.document.getElementById('return').innerHTML = result.join();
}

