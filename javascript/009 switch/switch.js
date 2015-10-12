function runSwitch(value) {
	var output = '';
	switch(value){
		case 5:
			output += 'value is 5';
			break;
		case 10:
			output += 'value is 10';
		case 20:
			output += 'value is 20';
			break;
		default:
			output += 'value is something else';
			break;
	}
	
	var element = window.document.getElementById('output');
	element.innerText = output;
}

