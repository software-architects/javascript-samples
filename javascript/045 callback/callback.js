function getData(parameter1, finished)
{
	var http = new XMLHttpRequest();
	http.open('GET', '/resource/param' + parameter1, true);
	http.onreadystatechange = function() {
		// process response
		// parse json, etc.
		finished(http.responseBody);
	}
	http.send();
}

var run = function() {
	getData('User', function(user) {
		getData(user.mainProject, function(project) {
			// .....
		})
	})
}
