// For details see https://developer.mozilla.org/en-US/docs/Web/API/document
var do_something = function(event) 
{
	var output = window.document.getElementById("output");
	output.innerHTML += "this text<br/>";
	output.innerHTML += "was added<br/>";
	output.innerHTML += "by javascript<br/>";
}

// For details see https://api.jquery.com/click/
$(function() {
	$("#myButton").click(function() {
		var target = $("#outputJQuery");
		target.append("this text<br/>");
		target.append("was added<br/>");
		target.append("by javascript<br/>");
	});
});