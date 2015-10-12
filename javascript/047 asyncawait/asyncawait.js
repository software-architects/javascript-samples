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

async function run() {
	try {
		var user = await getDataAsync('user');
		var project = await getDataAsync(value.mainProjectId);	
		document.write('Done!');
	} catch(reason) {
		document.write('Error occurred...');
	}
}


