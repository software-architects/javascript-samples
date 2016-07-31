var run = function() {
	var homer = {
		firstName: 'Homer',
		lastName: 'Simpson'
	};
	
	var marge = new Object();
	marge.firstName = 'Marge';
	marge.lastName = 'Simpson';

	var output = window.document.getElementById("output");
	output.innerHTML += JSON.stringify([homer, marge]);
}

