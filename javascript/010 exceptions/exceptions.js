var testThrowing = function(){
	var msg = '';
	try
	{
		msg += '<div>in try block</div>';
		throw "Oh no!";
		
		msg += '<div>this will not be reached!</div>';
	}
	catch(exception)
	{
		msg += '<div>in catch</div>';
	}
	
	var element = window.document.getElementById('output');
	element.innerHTML = msg;
} 

var testFinally = function() {
	var msg = '';
	var element = window.document.getElementById('output');
	element.innerHTML = '';
	
	try	{
		msg += '<div>in try block</div>';
		throw "Oh no!";
		
		msg += '<div>this will not be reached!</div>';
	}
	finally {
		msg += '<div>message from finally block</div>';
		element.innerHTML = msg;
	}

	// will never be reached, as code is not continued after finally
	element.innerHTML = 'after finally block';
}