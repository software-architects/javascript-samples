var output = ''; 
if (undefined) { 
	output += '<div>undefined is truthy</div>';
} else {
	output += '<div>undefined is falsy</div>';
}

if (null) {
	output += '<div>null is truthy</div>';
} else {
	output += '<div>null is falsy</div>';
}

if (0) {
	output += '<div>0 is truthy</div>';
} else {
	output += '<div>0 is falsy</div>';
}

if ("") {
	output += '<div>"" is truthy</div>';
} else {
	output += '<div>"" is falsy</div>';
}

if (NaN) {
	output += '<div>NaN is truthy</div>';
} else {
	output += '<div>NaN is falsy</div>';
}


var result = window.document.getElementById('result');
result.innerHTML = output;
