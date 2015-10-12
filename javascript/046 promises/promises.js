function getDataAsync(parameter) {
	var promise = new Promise(function(resolve, reject) {
		var http = new XMLHttpRequest();
		http.open('GET', '/resource/param' + parameter1, true);
		http.onreadystatechange = function() {
			// process response
			// parse json, etc.
			if (http.status == 200) {
				resolve(http.responseBody);
			} else {
				reject(http);
			}
		};
		
		http.send();
	});
	return promise;
}

function run() {
	getDataAsync('user')
	.then(function(value) {
		return getDataAsync(value.mainProjectId);	
	})
	.then(function(value) { // success
		document.write('Done!');
	})
	.catch(function(reason) { // error
		document.write('Error occurred...');
	});
}
