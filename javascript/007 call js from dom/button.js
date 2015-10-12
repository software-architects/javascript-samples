var cond = true;
if (cond) {
	console.log("cond is true!");
} else if (!cond) {
	console.log("cond is false");
} else {
	console.log("cond is neither true nor false !?");
}


var do_something = function(event) 
{
	var output = window.document.getElementById("output");
	output.innerHTML += "this text<br/>";
	output.innerHTML += "was added<br/>";
	output.innerHTML += "by javascript<br/>";
}

